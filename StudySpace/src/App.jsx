import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage.jsx'

function App() {
  

  return (
    <>
    <div id = "app">
    <div className="header">Clustr</div>
    <div className = "content">
  
    <HomePage/>
    <p>Find, host, and reserve study spaces effortlessly.</p>
    </div>
    </div>
     
    </>
  )
}

export default App
