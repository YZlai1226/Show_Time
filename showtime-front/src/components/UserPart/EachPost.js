import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Concert from './../../images/Concert.jpeg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';
import { margin, width } from '@mui/system';
import BasicModal from './BasicModal';
import AuthContext from "../../context/AuthProvider"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const { auth, setAuth } = useContext(AuthContext);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      maxWidth: 700,
      margin: 'auto',
      marginBottom: 5
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="group">
            {props.group[0]?.name.substring(0, 1)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.group[0]?.name}
        group='groupName'
        subheader={props.concert.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={Concert}
        alt={props.concert.title}
        sx={{
          display: 'block',
          margin: 'auto',
          width: 40 + '%'
        }}
      />
      <CardContent>
        <Typography variant="h5" color="black">
          {props.concert.title}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {auth && typeof props.userInfos?.concerts !== 'undefined' &&
          <div>
            {/* ===================== ADD WISHLIST ====================== */}
            {
              (props.userInfos.concerts.filter((e) => e === props.concert._id).length === 0) &&
              <IconButton aria-label="add to favorites"
                onClick={() => {
                  props.postWishlist(auth.userId, props.concert._id);
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            }

            {/* =================== DELETE WISHLIST ==================== */}
            {
              (props.userInfos.concerts.filter((e) => e === props.concert._id).length > 0) &&
              <IconButton aria-label="add to favorites" color="primary"
                onClick={() => {
                  props.deleteWishlist(auth.userId, props.concert._id);
                }}
              >
                <FavoriteIcon />
              </IconButton>
            }
            {/* ================= BOOKING CONCERT ===================== */}

            <IconButton aria-label="book concert" >
              <BasicModal
                bookingConcert={props.bookingConcert}
                concert={props.concert}
                bookings={props.bookings}
              />

            </IconButton>
          </div>
        }

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.concert.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}