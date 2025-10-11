import React from 'react'
import { useState } from 'react'
import { AddTask } from '../services/TaskService';
import './AddTasks.css'
import { useNavigate } from 'react-router-dom';


function AddTasks(props) {

    const [task, setTask] = useState({
        ToDoTask: '',
        TaskDescription: '',
        date: '',
        time: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
        console.log(task);
    }


   const handleSubmit = async(e) => {
    e.preventDefault();
    //submit to backend : call backend post api: http://localhost:5000/api/Task
     try{
         const response = await AddTask(task);
         console.log(" Task added successfully ", response.data);
         // set frontend task to empty
         setTask({
            ToDoTask: '',
            TaskDescription: '',
            date: '',
            time: ''
         });
          // refresh the task list
         props.refreshList();
        }
     catch(err){
        console.log(" Error while adding task", err);
     }

   }    

   return (
      <div className="at-container">
         <h1 className="at-heading">Add Tasks</h1>
         <form className="at-form" onSubmit={handleSubmit}>
            <input className="at-input" type="text" name="ToDoTask" placeholder="Add Task" onChange={handleChange} value={task.ToDoTask} />
            <input className="at-input" type="text" name="TaskDescription" placeholder="Description" onChange={handleChange} value={task.TaskDescription} />
            <input className="at-input" type="date" name="date" placeholder="Date" onChange={handleChange} value={task.date} />
            <input className="at-input" type="time" name="time" placeholder="Time" onChange={handleChange} value={task.time} />
            <button className="at-btn"  type='submit'>Add</button>
            <button className="at-btn at-btn-show" type='button' onClick={()=>navigate('/show')}>Show Tasks</button>
         </form>
      </div>
   )
}

export default AddTasks
