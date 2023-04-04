import React from 'react'

export default function Todo({todoItem}) {
  return (
    <div>
    

    <div className='todo-item'>
        <h3 className='todoname'>{todoItem}</h3>
        <button className='todoDeletebtn'>Done</button>
    </div>
    
    
    
    
    </div>
  )
}
