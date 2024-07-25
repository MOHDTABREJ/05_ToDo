import React, { useState } from 'react'

import Form from './Form';
import Todolist from './Todolist';

const Todo = () => {

  let[todos,setTodos]=useState([]);
    
    

    

  return (
    <>
    
    <Form todos={todos} setTodos={setTodos}/>
    <Todolist todos={todos}  setTodos={setTodos}/>
    

    </>
  )
}

export default Todo