import './IndexPage.css'
import Highlights from './../../components/Filter.js'


const IndexPage = () => {
   
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

    return (
        <div>
            <Highlights groups = {groups}/>
        <h1>I'm the IndexPage !</h1>
        </div>
    )
}

export default IndexPage;