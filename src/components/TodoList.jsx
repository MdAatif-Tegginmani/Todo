import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList}) {
  return (
    <div>
    {todoList.map((todoItem)=>(

        <Todo todoitem={todoItem}></Todo>
        
        )
        )}
    
    </div>
  )
}
