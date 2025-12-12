import React from 'react'
import Todo from './components/Todo'

function App() {
  return(
    <>
    <Todo></Todo>
    </>
  )
}

export default App

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
7)whenever we are actuslly comminicating with child elements we will
use props to send the data from parent to child
8)whenever we want to hve communication from child to parent then we send a fucntion
to parent,where parent will use result of function and uodate the state variable
that it have 
9)in React,we dont have thing known as child to child communication
whic is here we need communicate with sibling elements through parent comp only
as in react we have a tree structure of repres between chiild and parent only.
*/