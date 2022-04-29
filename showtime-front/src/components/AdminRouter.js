import React from 'react'
import {Routes, Route, } from "react-router-dom";
import Users from '../dashboard/pages/user/Users.jsx';
import Concerts from '../dashboard/pages/concert/Concerts.jsx';
import Bands from '../dashboard/pages/band/Bands';
import Genres from '../dashboard/pages/genre/Genres';


import Dashboard from '../dashboard/Dashboard';
import ShowUser from '../dashboard/pages/user/ShowUser';
import ShowGenre from '../dashboard/pages/genre/ShowGenre';
import ShowBand from '../dashboard/pages/band/ShowBand';
import ShowConcert from '../dashboard/pages/concert/ShowConcert';




export default function AdminRouter() {
  return (
    <>
         
        <Routes>
          {/* Dashboard home Route */}
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* Dashboard main routes */}
          <Route exact path="/dashboard/users" element={<Users />} />
          <Route exact path="/dashboard/concerts" element={<Concerts />} />
          <Route exact path="/dashboard/genres" element={<Genres />} />
          <Route exact path="/dashboard/bands" element={<Bands />} />
          {/* Dashboard routes with params id  */}
          <Route exact path="/dashboard/user/:userId" element={<ShowUser />} />
          <Route exact path="/dashboard/concert/:concertId" element={<ShowConcert />} />
          <Route exact path="/dashboard/genre/:genreId" element={<ShowGenre />} />
          <Route exact path="/dashboard/band/:bandId" element={<ShowBand />} />
        </Routes> 
         
        
    </>
  )
}
