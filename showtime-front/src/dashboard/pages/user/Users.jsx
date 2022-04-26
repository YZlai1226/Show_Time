import React from 'react'
import Topbar from './../../components/topbar/Topbar'
import UserList from '../../components/userList/UserList';
import { Container, Button, Modal, Form } from 'react-bootstrap';




export default function Users() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
 
    <>
      <Topbar />

      <Container>
        <h1 className='dashTitle'  > Users Dashboard </h1>

        <Button onClick={() => setModalShow(true)} style={{float: "right", margin: 12}} variant="success">Add User</Button>

          <UserList />
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
          New user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Role</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </Form.Select>

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
