import React from 'react'
import {useState, useEffect } from 'react';
import { GetBooks } from '../services/service';
import { DeleteBook } from '../services/service';
import { useNavigate } from 'react-router-dom';

function RenderBooks(props) {

    const[BookList,setBookList]= useState([]);
    const navigate =  useNavigate(); // used to navigate to different routes


    // function to fetch list of books from backend
    const fetchBooks= async()=>{
        try{
            let books= await GetBooks(); 
            setBookList(books.data);
            console.log("Books fetched successfully", books.data);
        }catch(err){
            console.log("Error while fetching books",err);
        }
}

    useEffect(()=>{
        fetchBooks(); // on 1st render it should fetch list of books
    },[props.refresh]); // whenever refreshList changes



    const handleDelete = async(id)=>{
        try{
            await DeleteBook(id);
            // after delete refresh book list
           console.log(" Deleted Suucessfully ");
        }
        catch(err){
            console.log(err);
        }
    }


  return (
    <div>
      <table>
        <thead>
            <tr>
                <th> Book Name </th>
                <th> Author Name </th>
                <th> Description </th>
                <th> Price </th>
                <th> Action </th>
                <th> Edit </th>
            </tr>
        </thead>
        <tbody>
            {BookList.map((book)=>(
                <tr key={book.id}>
                    <td> {book.name} </td>
                    <td> {book.author} </td>
                    <td> {book.description} </td>
                    <td> {book.price} </td>
                    <td> 
                        <button onClick={()=>handleDelete(book.id)}> Delete </button> 
                    </td>              
                             {/* make it callback becoz it should execute after clicking */}
                    <td> <button onClick={()=>navigate(`/edit/${book.id}`)}> Edit </button> </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default RenderBooks
