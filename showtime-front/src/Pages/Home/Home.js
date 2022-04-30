
import React, { useEffect, useState } from 'react';
import './Home.css'
import Highlights from '../../components/UserPart/Filter.js'
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/PostsManager.js'
import DateFilter from '../../components/UserPart/DateFilter.js'
import axios from './../../api/axios';

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
    axios.get('/bands')
      .then(result => {
        setGroups(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get group');
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
    
    console.log('CONCERTDATE IS: ', concerts[0].date)
    console.log('CONCERTDATE IS: ', new Date(concerts[1].date))
    console.log('CONCERTDATE IS: ', new Date(concerts[2].date))
    console.log('CONCERTDATE IS: ', new Date(concerts[3].date))
    console.log('CONCERTDATE IS: ', new Date(concerts[4].date))
    console.log('CONCERTDATE IS: ', new Date(concerts[5].date))
    console.log('RANGE IS: ', ranges)
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
    console.log('ongenrechange', genre._id)
    console.log('ongenrechange concert.genrne_id', concerts[0].genre_id)
    setFilteredConcerts(concerts.filter((concert) => concert.genre_id === genre._id))
    console.log('filteredConcerts', filteredConcerts)
  }
  const onGroupChange = (group) => {
    console.log('ongroupchange', group)
    setFilteredConcerts(concerts.filter((concert) => concert.bands_id === group._id))
    console.log('filteredConcerts', filteredConcerts)
  }
  return (
    <div class='home'>
      <SearchBar class="searchbar" />
      <div class='homePageContent'>
        <div class="posts">
          <PostsManager 
            concerts={filteredConcerts} 
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