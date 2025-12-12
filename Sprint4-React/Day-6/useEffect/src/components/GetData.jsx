import React from 'react'
import { useEffect,useState } from 'react'

function GetData() {
  const [data,setData]=useState(null);//data=null
  useEffect(() => {
  const fetchData = async () => {
    console.log("useEffect ran");
    const response =await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    setData(user);
  };

  fetchData();
},
[]);

  //useEffect is used to call a fucntion once the render actually happens
  console.log("rendered");
  return (
    <>
      {data==null?
        <h2>PlaceHolder loading the data ....</h2>:
        <>
          <h2>Name:{data.name}</h2>
          <h2>username:{data.username}</h2>
        </>
  
      }
    </>
  )
}

export default GetData