import React from 'react'
import { AddBook } from '../services/service';
import { useState } from 'react';

function AddBooks(props) {
 
  const[bookName,setBookName]=useState("");
  const[authorName,setAuthorName]=useState("");
  const[description,setDescription]=useState("");
  const[price,setPrice]= useState(""); 
 
 const handleSubmit= async(e)=>{
   e.preventDefault();// save current
  
   // backend DTO name should match this object property names
   // DTO feilds : Name, Author, Description, Price
   const bookData={
       Name : bookName,
       Author: authorName || null,
       Description: description || null,
       Price: price};

   try{
    // call backend POST API : AddBook
      let response = await AddBook(bookData);
      console.log("Book added successfully",response.data);
      // clear form
      setBookName("");
      setAuthorName("");
      setDescription("");
      setPrice("");
      // after adding book refresh book list in parent component
     props.onAdd();// toggle refresh state in parent---> useEffect in RenderBooks will be triggered
   }
   catch(err){
    console.log("Error while adding book",err);
   }
 }

  return (

    <div>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Book Name'     onChange={(e)=>setBookName(e.target.value)}   value={bookName} />
        <input type="text" placeholder='Author Name'    onChange={(e)=>setAuthorName(e.target.value)} value={authorName}/>
        <input type="text" placeholder='Description'    onChange={(e)=>setDescription(e.target.value)}  value={description}/>
        <input type="number" placeholder='Price'        onChange={(e)=>setPrice(parseFloat(e.target.value))}  value={price} />
        <button type='submit'> Add Book </button>
       </form>
    </div>
  )
}


export default AddBooks
  