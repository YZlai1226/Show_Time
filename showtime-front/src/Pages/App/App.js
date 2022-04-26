import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './../Login/Login.js'
import Register from './../Register/Register.js'
import Wishlist from './../Wishlist/Wishlist.js'
import Index from './../Index/Index.js'
import './App.css';
import SearchBar from './../../components/SearchBar.js'

function App() {
  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  )
}


export default App;