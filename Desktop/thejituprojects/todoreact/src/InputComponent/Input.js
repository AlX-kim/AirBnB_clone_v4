
import React, { useState } from "react"
import './input.css'
import Task from "../Task/Task"

export default function Input() {
  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'low', text: 'Low'},
    {value: 'medium', text: 'Medium'},
    {value: 'high', text: 'High'},
  ]
  const [task, setTask]=useState("")
  const [date, setDate]=useState()
  const [items, setItems]=useState([])
  const [option, setOption]=useState(options[0].value)
  const [modal, setModal]=useState(false)
  const [message, setMessage]=useState('')
  const newItem=() => {

    setItems([
      ...items,
      {  task: task, date:date, option:option }
    ]);
  }
  const onOptionChangeHandler=(e)=>{
    setOption (e.target.value)
    
  }
  

const removlist=[...items]

const deleHandler=(index)=>{
  removlist.splice(index, 1);
  
  setItems(removlist)


}
const edit=[...items]

// const color1={
//   color:"red",
//   opacity:"1",
//   visibility:"visible"

// }

const handleShow=(index)=>{
        let findtask=edit.at(index)
        setTask(findtask.task)
        setDate(findtask.date)
        setOption(findtask.option)
        handleModal()
}
 const handleModal=()=>{
  console.log("Emmanuel");

setModal(true)

 }
const search=[...items]

 const seachBtn=()=>{

  let filtItem=search.filter((i)=>{
  let e=i.task.toLowerCase()
  let el=message.toLowerCase()
    if(e===""){
      return search
    }
    else{
      return e.includes(el)
    }
})
setItems(filtItem)
console.log(filtItem);
 }




return (
<div className="grid-1">
  <div className="header">
  <div className="addtext">
  <div>

  <input type="checkbox" id="click"  />

  <label htmlFor="click" className="click-me" checked={modal} onChange={()=>{handleModal()}}>Add Task + </label>


  <div className="content" >
    <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
    <input type="date" value={date} onChange={e => setDate(e.target.value)}/>

    <select value ={option} onChange={onOptionChangeHandler}>
   {options.map(option => (
          <option  value={option.value}>
            {option.text}
          </option>))}
</select>
    <input type="submit" onClick={newItem}/>S
  </div>
  </div>
  </div>
  <div>
  
  <input   className="search" value={message} onChange={(event)=>{setMessage(event.target.value)}
  }/>

  <button className="seachBtn" onClick={()=>{seachBtn()}}> search</button>
  </div>
  </div>
<div className="titles">
    <h1> Tasks</h1>
    <h1> Deadline</h1>
    <h1> Priority</h1>

  </div>
  <div>
  <Task items={items} deleHandler={deleHandler} handleShow={handleShow}/>

  </div>
</div>

);

}
