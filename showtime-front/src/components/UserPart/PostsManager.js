import RecipeReviewCard from './EachPost.js';

const postsManager = (props) => {

  return (
    <div>
      {props.concerts?.map((concert) => (
        <RecipeReviewCard
          concert={concert}
          key={concert._id}
          group={props.groups?.filter((group) => group._id === concert.band_id)}
        />
      ))}
    </div>
  )
}

export default postsManager;
