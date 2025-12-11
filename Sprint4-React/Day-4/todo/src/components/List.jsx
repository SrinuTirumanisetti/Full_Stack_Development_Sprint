import React from 'react'

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

export default List