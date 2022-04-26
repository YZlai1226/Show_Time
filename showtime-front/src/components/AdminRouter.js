import React from 'react'
import {Routes, Route, } from "react-router-dom";
import Users from '../dashboard/pages/user/Users.jsx';
import Concerts from '../dashboard/pages/concert/Concerts.jsx';
import Dashboard from '../dashboard/Dashboard';




export default function AdminRouter() {
  return (
    <>
         
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/users" element={<Users />} />
          <Route exact path="/dashboard/concerts" element={<Concerts />} />
        </Routes> 
         
        
    </>
  )
}
