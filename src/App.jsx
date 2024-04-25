import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'
import About from './About/About'
import Home from './Home/Home'

function App() {



  return (
    <>
      <BrowserRouter>

        <h1>Header</h1>

        <div className='links'>
          
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <h1>Footer</h1>
    </BrowserRouter>
    </>
  )
}

export default App
