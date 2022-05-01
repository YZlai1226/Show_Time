import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookIcon from '@mui/icons-material/Book';
import IconButton from '@mui/material/IconButton';
import AuthContext from "../../context/AuthProvider"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { auth, setAuth } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (props.bookings) {
    if (props.bookings.filter((e) => e.user_id === auth.userId && e.concert_id === props.concert._id).length > 0) {
      return (
        <BookIcon color="primary" />
      )
    }
    return (
      <div>
        <IconButton onClick={handleOpen}>
          <BookIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to book this concert ?
            </Typography>
            <Button
              id="modal-modal-description"
              sx={{ mt: 2 }}
              onClick={() => {
                // console.log(props.concert._id)
                props.bookingConcert(auth.userId, props.concert._id);
                handleClose();
              }}>
              Yes
            </Button>
            <Button id="modal-modal-description" sx={{ mt: 2 }} onClick={handleClose} >
              No
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }

}