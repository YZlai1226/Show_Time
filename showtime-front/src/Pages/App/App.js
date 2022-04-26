import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";

import './App.css';

import AdminRouter from './../../components/AdminRouter.js'
import UserRouter from '../../components/UserRouter.js'


function App() {
  return (

    <Router>
      <UserRouter /> 
      <AdminRouter />
    </Router>
    
  )
}


export default App;