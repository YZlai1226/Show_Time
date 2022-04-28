import RecipeReviewCard from './EachPost.js';
// import React,{useState} from 'react';

const postsManager = (props) => {

    return (
        <div>
            {props.postsFiltered.map((concert) => (
            <RecipeReviewCard data={concert} key={concert.id} />
            )
            )}
        </div>
    )
}

export default postsManager;