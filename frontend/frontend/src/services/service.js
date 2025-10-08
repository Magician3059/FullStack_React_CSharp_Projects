import axios from 'axios';

const URL = "http://localhost:5000/api/Student";


export const AddStudent =(student)=> axios.post(URL,student);

export const GetAllStudents= ()=> axios.get(URL);