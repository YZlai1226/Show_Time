
import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import Highlights from '../../components/UserPart/Filter.js'
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/PostsManager.js'
import DateFilter from '../../components/UserPart/DateFilter.js'
import axios from './../../api/axios';
import AuthContext from "../../context/AuthProvider"

const Home = () => {
  const {auth, setAuth} = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [genres, setGenres] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [userInfos, setUserInfos] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState(concerts);
  const [selectionRanges, setSelectionRanges] = useState(({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }), []);
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    loadBands();
    loadGenres();
    loadConcerts();
    loadBookings();
  }
  useEffect(() => {
    if (auth) {
    loadUserInfos();
  }
}, [auth])

const loadUserInfos = () => {
axios.get('/users/userdetails/' + auth.userId)
    .then(result => {
      setUserInfos(result.data);
      // console.log('USERSINFOS ARE : ', userInfos)
    })
    .catch(err => {
      console.error(err.message, 'get userInfos');
    })
  }
  const loadBands = () => {
    axios.get('/bands')
      .then(result => {
        setGroups(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get groups');
      })
  }


  const loadBookings = () => {
    axios.get('/bookings')
      .then(result => {
        setBookings(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get bookings');
      })
  }

  const loadGenres = () => {
    axios.get('/genres')
      .then(result => {
        setGenres(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get genres');
      })
  }

  const loadConcerts = () => {
    axios.get('/concerts')
      .then(result => {
        setConcerts(result.data);
        setFilteredConcerts(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get concerts');
      })
  }

  const postWishlist = (userId, concertId) => {
    console.log('userId,', userId)
    console.log('concertId,', concertId)
    axios.put('/users/like_concert/' + userId,
    {
      concerts: concertId
    })
    .then((response) => {
      console.log(response.data)
      loadUserInfos();
    })
    .catch(err => {
      console.error(err.message, 'post wishlist');
    })
  }
  const deleteWishlist = (userId, concertId) => {
    axios.put('/users/unlike_concert/' + userId,
    {
      concerts: concertId
    })
    .then((response) => {
      console.log(response.data)
      loadUserInfos();
    })
    .catch(err => {
      console.error(err.message, 'delete wishlist');
    })
  }
  const bookingConcert = (userId, concertId) => {
    axios.post('/bookings/',
    {
      user_id: userId,
      concert_id: concertId
    })
    .then((response) => {
      console.log(response.data)
      loadBookings();
    })
    .catch(err => {
      console.error(err.message, 'delete wishlist');
    })
  }
  

  const onDatesChange = (ranges) => {
    setSelectionRanges(ranges.selection);
    // let date = new Date(concert.date)
    const filteredConcerts = concerts.filter((concert) => 
      new Date(concert.date)>ranges.selection.startDate && new Date(concert.date)<ranges.selection.endDate);
      setFilteredConcerts(filteredConcerts)
  }

  const onGroupChange = (group) => {
    setFilteredConcerts(concerts.filter((concert) => concert.band_id === group._id))
  }
  const onGenreChange = (genre) => {
    setFilteredConcerts(concerts.filter((concert) => concert.genre_id === genre._id))
  }

  const onSearchChange = (search) => {
    console.log('SEARCH is: ', search)
  }
  return (
    <div class='home'>
      <SearchBar class="searchbar" 
      wishlistNumber={userInfos?.concerts?.length}
      onSearchChange={onSearchChange}
      search={search}/>
      <div class='homePageContent'>
        <div class="posts">
          <PostsManager 
            concerts={filteredConcerts} 
            groups={groups} 
            bookings={bookings}
            userInfos={userInfos}
            postWishlist={postWishlist}
            deleteWishlist={deleteWishlist}
            bookingConcert={bookingConcert}
          />
        </div>
        <div class='Filters'>
          <Highlights class="highlights" filter={groups} label="Artist" onChange={onGroupChange} />
          <Highlights class="highlights" filter={genres} label="Genre" onChange={onGenreChange} />
          <DateFilter onDatesChange={onDatesChange} selectionRanges={selectionRanges} />
        </div>
      </div>
    </div>
  )
}

export default Home;