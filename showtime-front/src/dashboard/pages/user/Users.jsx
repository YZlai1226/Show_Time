import React, { useState } from "react";
import Topbar from "./../../components/topbar/Topbar";
import UserList from "../../components/userList/UserList";
import { Container, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

export default function Users() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Topbar />

      <Container>
        <h1 className="dashTitle">
          {" "}
          Users Dashboard
          <Button
            onClick={() => setModalShow(true)}
            style={{ float: "right", margin: 12 }}
            variant="success"
          >
            <i class="bi bi-plus-lg"></i> Add User
          </Button>
        </h1>

        <UserList />

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </>
  );
}
function MyVerticallyCenteredModal(props) {
  const [userData, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    axios.post("http://localhost:3000/users", newUserData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    setTimeout(() => {
      window.location.reload(false);
    }, 2500);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicA">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={userData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name.."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicB">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={userData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email.."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={userData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password.."
            />
          </Form.Group>

          <Button className="mt-2" variant="primary" type="submit">
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
