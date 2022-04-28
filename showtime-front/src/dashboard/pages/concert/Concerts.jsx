import React from 'react'
import ConcertList from './../../components/concertList/ConcertList'
import Topbar from './../../components/topbar/Topbar'
import { Container, Button, Modal, Form } from 'react-bootstrap'





export default function Concert() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
        
      <>
        <Topbar responsive="sm" />
        <Container>
          <h1 className='dashTitle'> Concert Dashboard           <Button onClick={() => setModalShow(true)} style={{float: "right", margin: 12}} variant="success">Add Concert</Button>
</h1> 

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
          <ConcertList />
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
            New concert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title..." />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description..." />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Band_id</Form.Label>
            <Form.Control type="text" placeholder="Band identification" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Genre_id</Form.Label>
            <Form.Control type="text" placeholder="Genre identification" />
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
