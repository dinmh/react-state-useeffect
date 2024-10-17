import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Friends from './assets/friends'
import './App.css'

function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 =() =>{
    alert('click me again')
  }
  
  return (
    <>
      
      <h1>React World Two</h1>
      <Friends></Friends>
      <button onClick={handleClick} >Click Me</button> 
      <button onClick={handleClick2}>Click Me</button>
    </>
  )
}


export default App

