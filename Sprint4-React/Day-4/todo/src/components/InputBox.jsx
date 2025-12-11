import React from 'react'
import { useState } from 'react'

function InputBox(props) {
    const [value, setValue] = useState("")
    const handleInput = (e) => {
      setValue(e.target.value) 
  }
  const  handleClick=()=>{
    props.handleClick(value);//when there is click happens we need to send the data from input element to Todo element using function
    setValue("") 
  }
  return (
    <div className="InputBox">
          <input type="text" value={value} onChange={handleInput}/>
          <button onClick={handleClick}>Add Task</button>
        </div>
  )
}

export default InputBox