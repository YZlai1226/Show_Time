import React from 'react'
import {  Routes, Route, } from "react-router-dom";
 import Login from './../Pages/Login/Login.js'
 import Register from './../Pages/Register/Register.js'
 import Wishlist from './../Pages/Wishlist/Wishlist.js'
import Index from './../Pages/Index/Index.js'
// import SearchBar from './SearchBar.js'



export default function UserRouter() {
  return (
    <>
         {/* <SearchBar /> */}
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Routes>
    </>
  )
}
