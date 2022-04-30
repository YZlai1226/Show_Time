/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect, useContext  } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import axios from '../../api/axios'
import './Login.css'
// import { set } from "date-fns";
const LOGIN_URL = '/auth/login'


const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                    JSON.stringify({email:user, password:pwd}),
                    {
                        headers: { 'Content-Type': 'application/json'},
                        withCredentials: false
                    });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            // console.log(`response?.data.access_token: ${response?.data.access_token.slice(1, -1)}`);
            localStorage.setItem("token", JSON.stringify(response?.data.access_token).slice(1, -1));
            setAuth({user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setTimeout(() => {
                navigate("/");
              }, 1500);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
            // return ??
        }
    }

    return (
        <section>
            <p ref= {errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <a href="/register">Sing Up</a>
                </span>
            </p>
        </section>
    )
}

export default Login;