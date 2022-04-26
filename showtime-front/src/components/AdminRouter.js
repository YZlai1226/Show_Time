import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Topbar from '../dashboard/components/topbar/Topbar';
import Home from '../dashboard/pages/home/Home.jsx';
import Users from '../dashboard/pages/user/Users.jsx';
import Concerts from '../dashboard/pages/concert/Concerts.jsx';




export default function AdminRouter() {
  return (
    <>
         
        <Routes>
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/dashboard/users" element={<Users />} />
          <Route exact path="/dashboard/concerts" element={<Concerts />} />
        </Routes> 
         
        
    </>
  )
}
