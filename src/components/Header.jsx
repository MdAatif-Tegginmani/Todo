import React from 'react'

export default function Header() {
  return (
    <div className='nav-container'>
        <nav className='header'>
            
             <h1>Todo App</h1>
            
            <a href='/home'>Home</a>
            <a href='/items'>Items</a>
            <a href='/about'>About</a>
        </nav>
    
    </div>
  )
}
