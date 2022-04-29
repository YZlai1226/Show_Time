import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from '../../components/UserPart/SearchBar.js'

const Profile = () => {

    const [Users, setUsers] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3000/users/userdetails/626a916c6d02c3d72f1896f5')
    .then(res => {
        console.log("=========",res, "+++++++++")
        // const users = res.data;
        setUsers(res.data);
        console.log("res.data" , res.data);
        })
    }, []);
console.log("object");
 return (
        <div>
        <SearchBar />
        {/* <p>Welcome {users}</p> */}
        components :
        
            <br/>- userformulaire
            {/* <br/>- email {this.email}
            <br/>- password {this.password}
            <br/>- photo {this.photo} */}
            <br/>
            <br/>concerts
            <br/>- booked
   
        </div>
    )
}

export default Profile;
