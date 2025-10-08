import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddStudentList from './components/AddStudentList'
import StudentList from './components/StudentList'
import { reactRefresh } from 'eslint-plugin-react-refresh';

function App() {
 
  const[refresh,setRefresh] = useState(false);

  const toggleRefresh = ()=> setRefresh(!refresh);

  return (
    <>
     <h2> Welcome to Student Management Application </h2>
     <AddStudentList refreshList={toggleRefresh} /> 
     <StudentList refreshFlag={refresh} /> 
    </>
  )
}

export default App
