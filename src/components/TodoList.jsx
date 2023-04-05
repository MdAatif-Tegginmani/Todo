import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList  ,setTodoList}) {
  return (
    <div>
    {todoList.map((todoItem)=>(

        <Todo key={todoItem.id} setTodoList={setTodoList} todoList={todoList} todoItem={todoItem}></Todo>
        
        )
        )}
    
    </div>
  )
}
