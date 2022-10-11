import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
import Task from './Component';

function App() {

  const [name, setName] = useState("");
  const [department, setDep] = useState("");
  const [rating, setRating] = useState("");
  const [EmpList, setList] = useState([])

  const addDetails = () => {
    setList([...EmpList, {name: name, department: department, rating: rating}])
    setName("")
    setDep("")
    setRating("")
  }

  return (

    <>
      <h1 className='header'>Employee Data Form</h1>
      <label for="name" className='label'>Name : </label>
      <input className='inputfield' type="text" id="name" onChange={(e) => {
        setName(e.target.value)
        }}/> <br />

      <label for="department" className='label'>Department : </label>
      <input className='inputfield' type="text" id="department" onChange={(e) => {
        setDep(e.target.value)
        }}/> <br />

      <label for="rating" className='label'>Rating : </label>
      <input className='inputfield' type="text" id="rating" onChange={(e) => {
        setRating(e.target.value)
        }} /> <br />

      <button className='btn' onClick={addDetails} > Submit</button>

      <div className='flex'>
        {EmpList.map((task) =>{
          return <Task name={task.name} department={task.department} rating={task.rating}/>
        })}
      </div>
        </>
  );
}

export default App;