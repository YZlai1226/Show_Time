import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/DateFilter.js'
const Profile = () => {

    const [Users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [concerts, setConcerts] = useState([]);

    useEffect(() => {
        init();
      }, []);
    
    
      const init = () => {
        LoadUsers();
        loadBands();
        loadConcerts();
        console.log("Users", Users);
        }
    
    const LoadUsers = () => {
    axios.get('http://localhost:3000/users/userdetails/626a916c6d02c3d72f1896f5')
    .then(res => {
        console.log("=========",res, "+++++++++")
        // const users = res.data;
        setUsers(res.data);
        console.log("res.data" , res.data);
        console.log("Users.concerts", Users.concerts)
        })
    };
    
    const loadBands = () => {
        axios.get('http://localhost:3000/bands')
          .then(result => {
            setGroups(result.data);
          })
          .catch(err => {
            console.error(err.message, 'get group');
          })
    }

    const loadConcerts = () => {
        axios.get('http://localhost:3000/concerts/')
          .then(result => {
            setConcerts(result.data);
            console.log("concerts.title", concerts.title)
          })
          .catch(err => {
            console.error(err.message, 'get concerts');
          })
    }

    define
fucntion = gettittleconcert (concert.array)
for concert in concert.array
axios.get('http://localhost:3000/concerts/{concerts}')
OR 
axios.get('http://localhost:3000/concerts/'+concert)
result = concert.title
     


 return (
        <div>
        <SearchBar />
        <p>Welcome {Users.name}</p>
        components :
        
            <br/>- userformulaire
            <br/>- email {Users.email}
            <br/>- password {Users.password}
            <br/>- photo {Users.photo}
            <br/>
            <br/>concerts
            PostsManager
            <br/>concerts = {Users.concerts}
            <br/> get concerts = {concerts.title}
            
{/* concerts => users.id 
             */}
            <br/>- bookedthis {}
   
        </div>
    )
}

export default Profile;
