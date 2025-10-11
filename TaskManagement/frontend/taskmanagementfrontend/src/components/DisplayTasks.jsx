import React from 'react'
import { useState, useEffect} from 'react'
import { DisplayAllTasks,DeleteTask} from '../services/TaskService';
import './DisplayTasks.css'
import { useNavigate } from 'react-router-dom';

function DisplayTasks(props) {

    const [taskList, setTaskList] = useState([])

    const navigate = useNavigate();

      useEffect(() => {
        fetchtasks();// on 1st render fetch tasks
    }, [props.refresh])

    const fetchtasks = async() => {
        // call backend api to fetch all tasks : http://localhost:5000/api/Task
        try{    
            const tasks =  await DisplayAllTasks();
            console.log(" Tasks fetched successfully ");
            // set the tasks to state
           setTaskList(tasks.data);
        }
        catch(err){
            console.log(" Error while fetching tasks ", err);
        }
    }


    const handleDelete = async(id) => {
        // call backend api to delete task by id : http://localhost:5000/api/Task/{id}
       try{
       const task= await DeleteTask(id);
        console.log(" Task deleted successfully ");
          //  fetchtasks();// refresh the list
          // Optimized approch : 
          setTaskList(taskList.filter(task=>task.id!==id )); // remove from state
       }catch(err){
        console.log(" Error while deleting task ", err);
       }
    }

  return (
    <div className="dt-container">
      {taskList.length === 0 ? (
        <div className="dt-empty">No tasks found. Add a task to get started.</div>
      ) : (
        <table className="dt-table" role="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr key={task.id}>
                <td data-label="Task">{task.toDoTask}</td>
                <td data-label="Description">{task.taskDescription}</td>
                <td data-label="Date">{task.date}</td>
                <td data-label="Time">{task.time}</td>
                <td data-label="Action">
                  <button className="dt-action-btn" onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} style={{ textAlign: 'right', padding: 16 }}>
                <button className="dt-add-btn" onClick={()=>navigate('/')}>Add Task</button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  )
}

export default DisplayTasks


