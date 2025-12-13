import React,{useState,useEffect} from 'react'

function UseEffectExamples() {
    const [value,setValue]=useState("");
    const [taskList,setTaskList]=useState([]);
    const setTask=function(){
        let newTaskList=[...taskList];
        newTaskList.push({
            id:Date.now(),
            task:value
        })
        setTaskList(newTaskList);
        setValue("")
    }
    const removeTask=function(id){
        let restOftasks=taskList.filter(function (taskObject){
            return taskObject.id!=id;
        })
        setTaskList(restOftasks);
    }
    //1st case we see what happens when we have empty dependency array
    function firstCb(){
        console.log("first useEffect");
        return function(){
            console.log("cleanup for useEffect with Empty Dependency")
        }
    }

    function secondCb(){
        console.log("second useEffect");
        return function(){
            console.log("cleanup for useEffect with no Dependency");
        }
    }
    function thirdCb(){
        console.log("third useEffect");
        return function(){
            console.log("cleanup for useEffect with TaskList Dependency")
        }
    }
    //1st version -> only it's cb fn only once aftrer first render
    //useEffect(firstCb,[]);

    //2nd version -> it's cb fn is called after every render and re-render
    //useEffect(secondCb);

    //3rd version -> In this case where we see what happens when we have a dependency array with state variable
    //inside it
    // it's cb fn is called after render and after the element changes it's values
    //inside the dependency array
    useEffect(thirdCb,[taskList]);
    //console.log("render")
    console.log("rendered");
  return (
    <>
     <div>
        {/*input */}
        <input type="text" placeholder="Input Task" value={value}
           onChange={(e)=>{setValue(e.target.value)}}></input>
        <button onClick={setTask}>Add task</button>
     </div>
     {/*list*/}
     {taskList.map((taskObj)=>{
        return (
            <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                removeTask={removeTask}></Task>
        )
     })}
    </>
  )
}

function Task(props){
    let {id,task,removeTask}=props;
    return(
        <li
            onClick={()=>{
                removeTask(id)
            }}
        >
            {task}
        </li>
    )
}


export default UseEffectExamples

/*
* useEffect->to be called after render
* 1.cb is called once in the lifetime=>useEffect(fn,[])
*   cleanup ->after component is removed then cleanup is callled
*   usecase->onpage first load data fetching
*  2.cb is called n number of tiems in lifetime ->useEffect(fn)
* cleanup->before next useEffect call happens this cleanup function will be executed
* usecase->autosave for every 5 secs,where cleanup code will actually update the state variable
 that is responsible to store the written code on the screen
*   3.cb is called if the dependency updates number of times in lifetime->useEffect(fn,[statevariable]);
*    cleanup->before next useEffect call happens then clean up will be 
    called 
*   useCase:-
*/ 