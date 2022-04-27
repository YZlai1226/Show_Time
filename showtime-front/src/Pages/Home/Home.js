
import './Home.css'
import Highlights from '../../components/UserPart/Filter.js'
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/PostsManager.js'


const Home = () => {
    
    const groups = [
        { name: 'Eagles', year: 1994 },
        { name: 'Coldplay', year: 1972 },
        { name: 'Metallica', year: 1974 },
        { name: 'Pink', year: 2008 },
        { name: 'Elton John', year: 1957 },
        { name: "Aerosmith", year: 1993 },
        { name: 'Maroon 5', year: 1994 },
        { name: " Guns N' Roses", year: 2003 },
        { name: 'Red Hot Chili Peppers', year: 1966 },
        { name: 'Sting', year: 1999 },
    ];

    const genre = [
        { name: 'pop', year: 1994 },
        { name: 'rock', year: 1972 },
        { name: 'electro', year: 1974 },
        { name: 'Rap', year: 2008 },
        { name: 'Reggae', year: 1957 },
        { name: "Jazz", year: 1993 },
        { name: 'Classical', year: 1994 },

    ];
    
    return (
        <div>
            <SearchBar />

            <Highlights filter = {groups} label="Artist" />
            <Highlights filter = {genre} label="Genre" />
            <PostsManager/>
            
        <h1>I'm the Home !</h1>
        </div>
    )
}

export default Home;