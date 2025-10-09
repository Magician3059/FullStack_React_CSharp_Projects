import axios from "axios";

const URL = "https://localhost:7083/api/Book";

export const AddBook=(bookData)=> axios.post(URL,bookData);

export const GetBooks=()=> axios.get(URL);

export const DeleteBook=(id)=> axios.delete(`${URL}/${id}`);

export const UpdateBook=(id,bookData)=> axios.put(`${URL}/${id}`,bookData);