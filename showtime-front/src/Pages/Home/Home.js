
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

  const onDateChange = (Date) => {
    // console.log('date is:', Date);
  }

  const onGroupChange = (group) => {
    // console.log('group is:', group);
  }

  const onGenreChange = (genre) => {
    // console.log('genre is:', genre);
  }

  return (
    <div class='home'>
      <SearchBar />
      <div class='Filters'>
        <Highlights filter={groups} label="Artist" onChange={onGroupChange} />
        <Highlights filter={genres} label="Genre" onChange={onGenreChange} />
        <DateFilter onChange={onDateChange} />
        {console.log('genres here is :', genres)}
        {console.log('groups here is :', groups)}
        {console.log('concerts here is :', concerts)}
      </div>
      <PostsManager concerts={concerts} groups={groups} />
    </div>
  )
}

export default Home;