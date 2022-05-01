import './Wishlist.css'
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/PostsManager.js'
import React, { useContext, useEffect, useState } from 'react';
import axios from './../../api/axios';
import AuthContext from "../../context/AuthProvider"


const Wishlist = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [concerts, setConcerts] = useState([]);
  const [myWishlist, setMyWishlist] = useState([]);
  const [userInfos, setUserInfos] = useState([]);
  const [groups, setGroups] = useState([]);


  useEffect(() => {
    axios.get('/bands')
      .then(result => {
        setGroups(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get groups');
      })
    if (auth) {
      axios.get('/users/userdetails/' + auth.userId)
        .then(result => {
          setUserInfos(result.data);
          // console.log('USERSINFOS ARE : ', userInfos)
        })
        .catch(err => {
          console.error(err.message, 'get userInfos');
        })
      axios.get('/concerts')
        .then(result => {
          setConcerts(result.data);
        })
        .catch(err => {
          console.error(err.message, 'get concerts');
        })
    }
  }, [auth]);

  useEffect (() => {
    if (concerts && userInfos) {
      setMyWishlist(concerts.filter((concert) => userInfos.concerts.includes(concert._id)))  
    }
  }, [concerts, userInfos]);



  return (
    <div>
      <SearchBar class="searchbar" />
      <br></br>
      <h1 style={{textAlign: "center"}} >My wishlist</h1>
      <br></br>
      <PostsManager
        groups={groups}
        concerts={myWishlist} 
      />
    </div>
  )
}

export default Wishlist;