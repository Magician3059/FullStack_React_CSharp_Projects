import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import AddBooks from './components/AddBooks'
import RenderBooks from './components/RenderBooks'
import { Route } from 'react-router-dom'
import EditBook from './components/EditBook'


function App() {
 
  const[refresh,setRefresh]= useState(false);

  const toggleRefresh=()=>{ setRefresh(!refresh);}

  return (
    <>
     <Routes>
       <Route path='/' element={ 
        <>
       <AddBooks onAdd={toggleRefresh} /> 
       <RenderBooks refresh={refresh} /> 
       </> } />  
      <Route path='/edit/:id' element={ <EditBook onEdit={toggleRefresh} /> } />
     </Routes>
    </>
  )
}

export default App
