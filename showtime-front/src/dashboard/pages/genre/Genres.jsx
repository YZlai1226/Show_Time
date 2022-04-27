import React from 'react'
import Topbar from './../../components/topbar/Topbar'
import GenreList from '../../components/GenreList';
import { Container, Button, Modal, Form } from 'react-bootstrap';




export default function Genres() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Topbar />

      <Container>
        <h1 className='dashTitle'> Genres Dashboard         <Button onClick={() => setModalShow(true)} style={{float: "right", margin: 12}} variant="success">New Genre</Button>
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New genre
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicA">
          <Form.Label>Genre Name</Form.Label>
          <Form.Control type="text" placeholder="Name.." />
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
