import React, {useState} from "react";

import './Login.css'

function Login () {
    const [test, setTest]=useState([])
    return (
        <p>I'm the LoginPage {test} !</p>
    )
}

export default Login;