import React from 'react'
import { useState } from 'react'

function App() {
  const [taskArray, setTaskArray] = useState([]);
    const handleClick = (task) => {
      const newTask=task;
      //we never manipulate/chnage the state variable directly
      // taskArray.push(newTask) //wrong way to change state,as state variable is immutable and should not be manipulated by our own
      if (!newTask.trim()) return;
      const newTaskArray=[...taskArray,newTask];
      setTaskArray(newTaskArray); //we are using newly created array and keeping the old array values as it is using spread operator
  }
  

  return (
      <>
        <InputBox handleClick={handleClick}></InputBox>
        <List taskArray={taskArray}></List>
      </>
  )
}


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


function List(props) {
  const {taskArray}=props;
  return (
    <div className="List">
          <ul>
            {taskArray.map((task,id) => (
              <li key={id}>{task}</li>
            ))}
          </ul>
        </div>
  )
}

export default App
export {InputBox,List}

/*
1)we need to create a static wepage version
2)we need to figure out where to add dynamic  nature to webpage i.e,adding state
3)Divide the code you have written into components if possible
4)check if logic and code are working as expected with test cases
5)Primary Reason:- where if we have a component which has
a scope to increase its scale then we need to separate those components into smaller components
6)Both lists and input components can be scaled up so that the reason
we are dividing  them into different components. or
that inorder to scale we need to focus on these components individually,
so that the reason we are dividing them into different components.

*/