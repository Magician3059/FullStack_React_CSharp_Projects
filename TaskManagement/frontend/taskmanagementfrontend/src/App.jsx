import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddTasks from './components/AddTasks'
import DisplayTasks from './components/DisplayTasks'


function App() {
  
const[refresh,setRefresh] = useState(false);

const handleRefresh=()=>{
  setRefresh(!refresh);
}

  return (
    <>

    <Routes>
      <Route path="/" element={<AddTasks refreshList={handleRefresh} />} />
      <Route path="/show" element={<DisplayTasks refresh={refresh} />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>

     
     
    </>
  )
}

export default App
