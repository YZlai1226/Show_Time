import React from 'react'
import { Routes, Route, } from "react-router-dom";
 import Login from './../Pages/Login/Login.js'
 import Register from './../Pages/Register/Register.js' 
 import Wishlist from './../Pages/Wishlist/Wishlist.js'
 import Profile from './../Pages/Profile/Profile.js'
import Home from './../Pages/Home/Home.js'


export default function UserRouter() {
    return ( 
    <div>
        <Routes>
            <Route exact path = "/" element = { < Home / > }/> 
            <Route exact path = "/register" element = { < Register / > }/> 
            <Route exact path = "/login" element = { < Login / > }/>
            <Route exact path = "/wishlist" element = { < Wishlist / > }/> 
            <Route exact path = "/profile" element = { < Profile / > }/>
        </Routes>
    </div>
    )
} 