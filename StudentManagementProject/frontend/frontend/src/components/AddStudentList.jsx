import React, { useState } from 'react'
import { AddStudent } from '../services/service';

function AddStudentList(props) {

   const [name,setName] = useState("");
   const[marks,setMarks]= useState(0);
   const[report,setReport] = useState("");

   const handleSubmit = async(e)=>{
    e.preventDefault();// save current state
  
    const student = {
        Name : name,
        Report: report,
        Marks: marks 
    };

     try{
       // call backend post api : http://localhost:5000/api/Student 
        await AddStudent(student);
        // after calling backend data on fronend should be null
        setName("");
        setMarks(0);
        setReport("");
        props.refreshList(); // refresh list 
     } 
     catch(err){
        console.log(" Failed to Add Student"+ err);
     }
       
   }

  return (
    <div>
   
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type='text' placeholder='Enter Report' value={report} onChange={(e)=>setReport(e.target.value)} />
        <input type='number' placeholder='Enter Marks' value={marks}  onChange={(e) => setMarks(parseFloat(e.target.value))} />
        <button type='submit'> Add Student </button>
    </form>
      
    </div>
  )
}

export default AddStudentList
