import React from 'react'

export default function Todo({todoItem , todoList ,setTodoList}) {
  const deleteTodo =()=>{
    setTodoList(todoList.filter((item) =>item.id !== todoItem.id ))

  }
  return (
    <div>
    

    <div className='todo-item'>
        <h2 className='todoname'>{todoItem.name}</h2>
        <button className='todoDeletebtn' onClick={deleteTodo} >Done</button>
    </div>
    
    
    
    
    </div>
  )
}
