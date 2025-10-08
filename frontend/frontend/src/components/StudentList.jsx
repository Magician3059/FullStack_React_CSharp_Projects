import React, { useEffect, useState } from 'react'
import { GetAllStudents } from '../services/service';

function StudentList(props) {

   const[studentList , setStudentList] = useState([]);
   
   const fetchStudents = async()=>{
    try{
      // call backend api : getAllStudent http://localhost:5000/api/Student
        const students = await GetAllStudents();
        setStudentList(students.data);// set all students to list
    }
    catch(err){
        console.log(" No Student Found"+ err);
    }
   }


   useEffect(()=>{
      fetchStudents(); // render studentsList on 1st render
   },[props.refreshFlag])

  return (
    <div>
         <h3> Student List </h3>
        
         <table border="1" cellPadding="5" cellSpacing="0">
            <th>
                <thead> Name </thead>
            </th>
            <th>
               <thead> Report </thead>
            </th>
            <th> 
                <thead> Marks </thead>
            </th>
           <tbody>
             {studentList.map(student=> 
                
                <tr Key={student.Id}>
                    <td> {student.name} </td>
                    <td> {student.report} </td>
                    <td> {student.marks} </td>
                </tr>
             )}
           </tbody>
          </table>
    </div>
  )
}

export default StudentList
