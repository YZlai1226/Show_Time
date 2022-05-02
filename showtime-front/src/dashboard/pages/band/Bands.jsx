import React, { useState } from 'react'
import Topbar from './../../components/topbar/Topbar'
import BandList from '../../components/BandList';
import { Container, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';
import axios from '../../../api/axios'




export default function Bands() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Topbar />

      <Container>
        <h1 className='dashTitle'> Bands Dashboard  <Button onClick={() => setModalShow(true)} style={{float: "right", margin: 12}} variant="success">
        <i class="bi bi-plus-lg"></i> New Band</Button>
        </h1>

        
         <BandList /> 
        
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
      
    </>
        
  )
}
function MyVerticallyCenteredModal(props) {
  
  const [bandData, setData] = useState({
    name: "",

  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...bandData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBandData = {
      name: bandData.name,


    };
    axios.post("/bands", newBandData)
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
          New Band
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicA">
          <Form.Label>Band Name</Form.Label>
          <Form.Control name='name' value={bandData.name} onChange={handleChange} type="text" placeholder="Name.." />
        </Form.Group>

        <Button className='mt-2' variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
