import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './loginpart/Register';
import Login from './loginpart/login';
import Dashboard from './HomePart/Dashboard';
import Applyforleave from './HomePart/Applyforleave';
import AnnualLeave from './leavespage/AnnualLeave';
import UpdateProfile from './HomePart/UpdateProfile';
import AdminLogin from './loginpart/AdminLogin';
import AdminDashboard from './HomePart/AdminDashboard';


function App() {
  return (
    <div
      className='font-[poppins]'>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/logins" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/applyforleave" element={<Applyforleave />} />
        <Route path="/leave" element={<AnnualLeave />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
      </Routes>
    </div>
  )
}

export default App
