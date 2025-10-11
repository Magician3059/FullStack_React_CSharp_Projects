
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/task';

export const AddTask=(task)=>axios.post(`${API_URL}`,task);

export const DisplayAllTasks=()=>axios.get(`${API_URL}`);

export const DeleteTask=(id)=>axios.delete(`${API_URL}/${id}`);