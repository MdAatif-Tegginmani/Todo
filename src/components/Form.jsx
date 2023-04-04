import React from 'react'
import shortid from 'shortid'

export default function Form({todo,setTodo,todoList,setTodoList}) {

    const handleChange=(event)=>{
        setTodo(event.target.value)
        console.log(todo)

    }
    const handleSubmit=(event)=>{
        event.preventDefault() ;
        setTodoList([...todoList,{name:todo}])

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>

        <input type="text"
            value={todo}
            onChange={handleChange}
            placeholder='Add Todo Item' 
            className='input-form'
            
        ></input>
        <button className='btn-form'>Add</button>
        
        
        
        
        </form>
    
    
    </div>
  )
}
