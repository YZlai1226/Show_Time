
import React, { useState } from 'react';
import './Home.css'
import Highlights from '../../components/UserPart/Filter.js'
import SearchBar from '../../components/UserPart/SearchBar.js'
import PostsManager from '../../components/UserPart/PostsManager.js'
import DateFilter from '../../components/UserPart/DateFilter.js'


const Home = () => {
    const [group, setGroup] = useState ({artists: [] });
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

    const allConcerts = [
        {
            id: 1, Title: 'titre 1', group_name: 'Sting', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 2, Title: 'titre 2', group_name: 'Sting', date: '01/02/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 3, Title: 'titre 3', group_name: 'Pink', date: '01/03/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 4, Title: 'titre 4', group_name: 'Coldplay', date: '01/04/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 5, Title: 'titre 5', group_name: 'Pink', date: '01/05/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 6, Title: 'titre 6', group_name: 'Pink', date: '01/06/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 7, Title: 'titre 7', group_name: 'Coldplay', date: '01/07/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 8, Title: 'titre 8', group_name: 'Sting', date: '01/08/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 9, Title: 'titre 9', group_name: 'Coldplay', date: '01/09/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 10, Title: 'titre 10', group_name: 'Sting', date: '01/10/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
    ];

    const [postsFiltered, setPostsFiltered] = useState(allConcerts)
    const onDateChange = (Date) => {
        console.log('date is:', Date);
    }

    return (
        <div class='home'>
            <SearchBar />
            <div class='Filters'>
                <Highlights filter={groups} label="Artist" />
                <Highlights filter={genre} label="Genre" />
                <DateFilter onChange={onDateChange} />
                {/* {this.valueTest} */}
            </div>
                <PostsManager postsFiltered={postsFiltered} />
        </div>
    )
}

export default Home;