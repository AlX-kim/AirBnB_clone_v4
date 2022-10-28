
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
  const [message, setMessage]=useState('')
  const[isActive, setIsActive]=useState({})


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

const submitHandle=()=>{
  setIsActive({
    visibility:  'hidden',
    opacity: '0',
  })

}

const edit=[...items]
const handleShow=(index)=>{
        let findtask=edit.at(index)
        setTask(findtask.task)
        setDate(findtask.date)
        setOption(findtask.option)
        edit.splice(index, 1);
        setItems(edit)

        handleModal()
}
 const handleModal=()=>{
  setIsActive({
    visibility:  'visible',
    opacity: '1',
  })
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
 }




return (

<div className="grid-1">
  <div className="header">
  <div className="addtext">
  <input type="checkbox" id="click"  />

  <label htmlFor="click" className="click-me" onClick={handleModal} >Add Task + </label>


  <div className="content"  style={isActive}>
     <label htmlFor="title">Title:</label>
    <input type="text" id="title" value={task} onChange={e => setTask(e.target.value)}/>

    <label htmlFor="date">Deadline:</label>
    <input type="date"id="date" value={date} onChange={e => setDate(e.target.value)}/>

    <label htmlFor="priority">Priority:</label>
    <select id="priority" value ={option} onChange={onOptionChangeHandler}>
   {options.map(option => (
          <option  value={option.value}>
            {option.text}
          </option>))}
</select>
    <input type="submit" onClick={()=>{newItem();submitHandle()}} />
  </div>
  </div>
  <div>
  
  <input   className="search" value={message} onChange={(event)=>{setMessage(event.target.value)}
  }/>

  <button className="seachBtn" onClick={()=>{seachBtn()}} > search</button>
  </div>
  </div>
<div className="titles">
    <h4> Tasks </h4>
    <h4> Deadline</h4>
    <h4> Priority</h4>

  </div>
  <div>
  <Task items={items} deleHandler={deleHandler} handleShow={handleShow}/>

  </div>
</div>

);

}
