import React from 'react'
import {useState} from 'react'
import InputBox from './InputBox';
import List from './List';

function Todo() {
  const [taskArray, setTaskArray] = useState([]);
    const handleClick = (task) => {
      const newTask=task;
      //we never manipulate/chnage the state variable directly
      // taskArray.push(newTask) //wrong way to change state,as state variable is immutable and should not be manipulated by our own
      if (!newTask.trim()) return;
      const newTaskArray=[...taskArray,newTask];
      setTaskArray(newTaskArray); //we are using newly created array and keeping the old array values as it is using spread operator
  }
    const handleDelete=(idx)=>{
    const filteredTasks=taskArray.filter((task,cIdx)=>{
      return cIdx!=idx
    })
    setTaskArray(filteredTasks);//taskArr=filteredTasks
  }
  

  return (
      <>
        <InputBox handleClick={handleClick}></InputBox>
        <List taskArray={taskArray} handleDelete={handleDelete}></List>
      </>
  )
}

export default Todo