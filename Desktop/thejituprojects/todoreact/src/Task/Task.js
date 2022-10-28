import React from 'react'
import Buttons from '../Buttons/Buttons';
import './task.css'

export default function Task({items, deleHandler, handleShow}) {
 
 
  return (
    <div >
     {
        items.map((item, index)=>(
         <Buttons item={item}   index={index}  deleHandler={deleHandler}  handleShow={handleShow}/> 
        ))
     }
    
</div>
  )
}
