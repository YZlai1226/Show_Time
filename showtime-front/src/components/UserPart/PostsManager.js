import RecipeReviewCard from './EachPost.js';

const postsManager = (props) => {

  return (
    <div>
      {props.concerts?.map((concert) => (

        <RecipeReviewCard
          concert={concert}
          key={concert._id}
          bookings={props.bookings}
          userInfos={props.userInfos}
          group={props.groups?.filter((group) => group._id === concert.band_id)}
          postWishlist={props.postWishlist}
          deleteWishlist={props.deleteWishlist}
          bookingConcert={props.bookingConcert}
          // concertId={props.concertId}
        />
      ))}
    </div>
  )
}

export default postsManager;
