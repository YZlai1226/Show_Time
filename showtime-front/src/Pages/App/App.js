import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, } from "react-router-dom";

import './App.css';

import AdminRouter from '../../components/AdminRouter.js'
import UserRouter from '../../components/UserRouter.js'
import AuthContext from "../../context/AuthProvider";
import { getMe } from '../../api/getUser'

function App() {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    console.log('*****token******')
    console.log(token)
    if (token) {
      getMe().then((response) => {
        if (response) {
          const userId = response?.userId;
          const user = response?.email;
          const pwd = response?.password;
          const isAdmin = response?.isAdmin;
          setAuth({user, userId, isAdmin, pwd});
        }
      });
    }
  }, []);

  return (
      <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <UserRouter />
        <AdminRouter />
      </Router>
      </AuthContext.Provider>
  )
}

export default App;