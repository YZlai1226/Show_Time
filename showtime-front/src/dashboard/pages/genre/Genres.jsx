import React, { useState } from 'react'
import Topbar from './../../components/topbar/Topbar'
import GenreList from '../../components/GenreList';
import { Container, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';
import axios from '../../../api/axios'




export default function Genres() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Topbar />

      <Container>
        <h1 className='dashTitle'> Genres Dashboard      
           <Button onClick={() => setModalShow(true)} style={{float: "right", margin: 12}} variant="success">
           <i class="bi bi-plus-lg"></i> New Genre</Button>
        </h1>

        
        <GenreList  />
        
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
      
    </>
        
  )
}
function MyVerticallyCenteredModal(props) {

  const [genreData, setData] = useState({
    name: "",

  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...genreData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGenreData = {
      name: genreData.name,


    };
    axios.post("/genres", newGenreData)
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    setTimeout(() => {
      window.location.reload(false);

    }, 2500);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add genre
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicA">
          <Form.Label>Genre Name</Form.Label>
          <Form.Control name='name' value={genreData.name} onChange={handleChange} type="text" placeholder="Genre name .." />
        </Form.Group>

        <Button className='mt-2' variant="success" type="submit">
        <i class="bi bi-check-lg"></i> Submit
        </Button>

      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
