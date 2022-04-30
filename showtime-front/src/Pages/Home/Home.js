
import React, { useEffect, useState } from 'react';
import './Home.css'
import Highlights from '../../components/UserPart/Filter.js'
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/PostsManager.js'
import DateFilter from '../../components/UserPart/DateFilter.js'
import axios from 'axios';

const Home = () => {
  const [groups, setGroups] = useState([]);
  const [genres, setGenres] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState(concerts);
  const [selectionRanges, setSelectionRanges] = useState(({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }), []);
  // const userId = "626c100d6bdf114a07577a35"
  
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    loadBands();
    loadGenres();
    loadConcerts();
  }

  const loadBands = () => {
    axios.get('http://localhost:3000/bands')
      .then(result => {
        setGroups(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get group');
      })
  }

  const loadGenres = () => {
    axios.get('http://localhost:3000/genres')
      .then(result => {
        setGenres(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get genres');
      })
  }

  const loadConcerts = () => {
    axios.get('http://localhost:3000/concerts')
      .then(result => {
        setConcerts(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get concerts');
      })
  }

  const postWishlist = (userId, concertId) => {
    axios.post('http://localhost:3000/users/like_concert/' + userId,
    {
      concerts: concertId
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err.message, 'post wishlist');
    })
  }
  const deleteWishlist = (userId, concertId) => {
    axios.post('http://localhost:3000/users/unlike_concert/' + userId,
    {
      concerts: concertId
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err.message, 'delete wishlist');
    })
  }

  const bookingConcert = (userId, concertId) => {
    axios.post('http://localhost:3000/bookings/',
    {
      user_id: userId,
      concert_id: concertId
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err.message, 'delete wishlist');
    })
  }
  

  const onDatesChange = (ranges) => {
    setSelectionRanges(ranges.selection);
    const filteredConcerts = concerts.filter((concert) => 
      Date(concert.date)>ranges.selection.startDate);
      setFilteredConcerts(filteredConcerts)
    console.log('CONCERTDATE IS: ', Date(concerts[0].date))
    console.log('CONCERTDATE IS: ', Date(concerts[1].date))
    console.log('CONCERTDATE IS: ', Date(concerts[2].date))
    console.log('CONCERTDATE IS: ', Date(concerts[3].date))
    console.log('CONCERTDATE IS: ', Date(concerts[4].date))
    console.log('CONCERTDATE IS: ', Date(concerts[5].date))
    // console.log('RANGE IS: ', ranges)
    // console.log('STARTDATE IS: ', ranges.selection.startDate)
    // console.log('ENDDATE IS: ', ranges.selection.endDate)
    // setFilteredConcerts(filteredConcerts.filter((concert) => Date(concert.date)>ranges.selection.startDate && concert.date<ranges.selection.endDate));
    console.log('filteredConcerts is: ', filteredConcerts)
  }

  // const [inputValue, setInputValue] = useState({ inputValue: '' });

  // const onFilterChange = (filter) => {
  //   setInputValue(filter);
  // }

  const onGenreChange = (genre) => {
  }
  const onGroupChange = (genre) => {
  }
  return (
    <div class='home'>
      <SearchBar class="searchbar" />
      <div class='homePageContent'>
        <div class="posts">
          <PostsManager 
            concerts={concerts} 
            groups={groups} 
            postWishlist={postWishlist}
            deleteWishlist={deleteWishlist}
            bookingConcert={bookingConcert}
          />
        </div>
        <div class='Filters'>
          <Highlights class="highlights" filter={groups} label="Artist" onChange={onGroupChange} />
          <Highlights class="highlights" filter={genres} label="Genre" onChange={onGenreChange} />
          <DateFilter onDatesChange={onDatesChange} selectionRanges={selectionRanges} />
          {console.log('selectionRanges is :', selectionRanges)}
        </div>
      </div>
    </div>
  )
}

export default Home;