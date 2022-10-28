import React from 'react'
import './button.css'
import { useState } from 'react'

export default function Buttons({item, deleHandler,index, handleShow}) {

const[isActive, setIsActive]=useState(false)


const handleDone=()=>{
  
  setIsActive(current => !current);



}
    
  return (
 <div className='main-div' >

  <div className='task-1' style={{
  textDecoration: isActive ? 'line-through' : '',
  color: isActive ? 'red' : '',
}}>
<div className='task-2'>

<p>{item.task}</p>
</div>
<div className='task-3'> 
<p>{item.date}</p>
</div>
<div className='task-4'> 

<p>{item.option}</p>
</div>
</div>
<div className='task-5'> 
<button onClick={()=>{
  deleHandler(index)
}} >Delete</button>
<button className='editbtn' onClick={()=>{
  handleShow(index)
}}>Edit</button>

<button onClick={()=>{handleDone()}}> Done</button>
</div>
  </div> 
  )
}
