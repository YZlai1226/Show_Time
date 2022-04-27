import React from 'react'
import Topbar from './../../components/topbar/Topbar'
// import UserList from '../../components/userList/UserList';
import { Container, Button, Modal, Form } from 'react-bootstrap';




export default function Users() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Topbar />

      <Container>
        <h1 className='dashTitle'> Bands Dashboard         <Button onClick={() => setModalShow(true)} style={{float: "right", margin: 12}} variant="success">New Band</Button>
        </h1>

        
        {/* <UserList /> */}
        
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
          New Band
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicA">
          <Form.Label>Band Name</Form.Label>
          <Form.Control type="text" placeholder="Name.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description..." />
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
