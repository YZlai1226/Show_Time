import RecipeReviewCard from './EachPost.js';
// import React,{useState} from 'react';

const postsManager = () => {

    const allConcerts = [
        {
            id: 1, Title: 'titre 1', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 2, Title: 'titre 2', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 3, Title: 'titre 3', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 4, Title: 'titre 4', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 5, Title: 'titre 5', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 6, Title: 'titre 6', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 7, Title: 'titre 7', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 8, Title: 'titre 8', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 9, Title: 'titre 9', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
        {
            id: 10, Title: 'titre 10', date: '01/01/2023',
            description: 'Diem sortiri cui Sortietur Martiis certam sine non licebit nascetur in non consulatu habere sis non an repente pervenire sortiri non fuerit ante quod paludatus ianuario nascetur Kalendis provincia habere quod toto Quo certam sis et ei provincia provincia paludatus an et ianuario ante certam repente non denique toto est.',
            photo: './../../images/Concert.jpeg'
        },
    ];

    return (
        <div>
            {allConcerts.map((concert) => (
            <RecipeReviewCard data={concert} key={concert.id} />
            )
            )}
        </div>
    )
}

export default postsManager;