import React from 'react'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState("")
  const [taskArray, setTaskArray] = useState([]);
  const handleInput = (e) => {
      setValue(e.target.value) 
  }
  const handleClick = () => {
      const newTask=value;
      //we never manipulate/chnage the state variable directly
      // taskArray.push(newTask) //wrong way to change state,as state variable is immutable and should not be manipulated by our own
      const newTaskArray=[...taskArray,newTask];
      setTaskArray(newTaskArray); //we are using newly created array and keeping the old array values as it is using spread operator
      setValue("")
  }
  

  return (
      <>
        <div className="InputBox">
          <input type="text" value={value} onChange={handleInput}/>
          <button onClick={handleClick}>Add Task</button>
        </div>
        <div className="List">
          <ul>
            {taskArray.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        </div>
      </>
  )
}

export default App

/*
1)we need to create a static wepage version
2)we need to figure out where to add dynamic  nature to webpage i.e,adding state
3)Divide the code you have written into components if possible
4)check if logic and code are working as expected with test cases
*/