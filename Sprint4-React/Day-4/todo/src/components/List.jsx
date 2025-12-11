import React from 'react'

function List(props) {
  const {taskArray,handleDelete}=props;
  return (
    <div className="List">
          <ul>
            {taskArray.map((task,idx) => {
              return <li onClick={()=>{
                  //console.log(`Element with id: ${idx} is deleted`);
                  handleDelete(idx);
              }
              } key={idx}>{task}</li>
            })}
          </ul>
        </div>
  )
}

export default List