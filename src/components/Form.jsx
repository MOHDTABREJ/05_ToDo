import React from 'react'
import { useState } from 'react';
import styles from './form.module.css'

const Form = ({todos,setTodos} ) => {
    // let[todo, setTodo]=useState("");
    let[todo, setTodo]=useState({name:"",done:false});
    

    function handler(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
    }

  return (
    <>
    
    <form className={styles.todoform} onSubmit={handler}>

      <div className={styles.inputContainer}>

        <input className={styles.modernInput} onChange={(e)=>setTodo({name:e.target.value, done:false})} type="text" value={todo.name} placeholder='Enter todo item...' />
        <button className={styles.modernBtn} type='submit'>ADD</button>
        
      </div>
    </form>
    </>
  )
}

export default Form