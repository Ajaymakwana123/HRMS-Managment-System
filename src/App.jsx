import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './loginpart/Register';
import Login from './loginpart/login';
import Dashboard from './HomePart/Dashboard';


function App() {
  return (
    <div
      className='font-[poppins]'>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/logins" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
