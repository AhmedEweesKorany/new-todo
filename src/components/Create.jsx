import React, { useState } from 'react'
import Divider from './Divider'
import axios from "axios"
function Create() {
  const [task,setTask] = useState()
  const handleAdd = ()=>{
    axios.post("http://localhost:3010/add",{task:task}).then(e=>console.log(e)).catch(e=>console.log(e))
    document.querySelector('input').value = ""
  } 
  return (
    <div className='create'>

        <input type="text" name="" id="" className='Add'  placeholder='ADD TASK' onChange={(e)=>{
          setTask(e.target.value)
        }} />
        <button type="submit" className='brk-btn ' onClick={handleAdd} onSubmit={handleAdd}>Add</button>
        <Divider/>
    </div>
  )
}

export default Create