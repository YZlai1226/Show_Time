import React, { useState } from "react";
import ConcertList from "./../../components/concertList/ConcertList";
import Topbar from "./../../components/topbar/Topbar";
import { Container, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

export default function Concert() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Topbar responsive="sm" />
      <Container>
        <h1 className="dashTitle">
          {" "}
          Concert Dashboard
          <Button
            onClick={() => setModalShow(true)}
            style={{ float: "right", margin: 12 }}
            variant="success"
          >
             <i class="bi bi-plus-lg"></i> Add Concert
          </Button>
        </h1>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <ConcertList />
      </Container>
    </>
  );
}
function MyVerticallyCenteredModal(props) {
  const [concertData, setConcertData] = useState({
    seat_amount: "",
    image: "",
    title: "",
    description: "",
    date: "",
    band_id: "",
    genre_id: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setConcertData({
      ...concertData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newConcertData = {
      seat_amount: concertData.seat_amount,
      image: concertData.image,
      title: concertData.title,
      description: concertData.description,
      date: concertData.date,
      band_id: concertData.band_id,
      genre_id: concertData.genre_id,
    };
    axios
      .post("http://localhost:3000/concerts", newConcertData)
      .then((response) => {
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
        <Modal.Title id="contained-modal-title-vcenter">
          New concert
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={concertData.title}
              onChange={handleChange}
              type="text"
              placeholder="Title..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasica">
            <Form.Label>seats</Form.Label>
            <Form.Control
              name="seat_amount"
              value={concertData.seat_amount}
              onChange={handleChange}
              type="text"
              placeholder="Title..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicb">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              value={concertData.image}
              onChange={handleChange}
              type="text"
              placeholder="Title..."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={concertData.description}
              onChange={handleChange}
              as="textarea"
              rows={3}
              placeholder="Description..."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiccc">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              value={concertData.date}
              onChange={handleChange}
              type="text"
              placeholder="date"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasica">
            <Form.Label>band</Form.Label>
            <Form.Control
              name="band_id"
              value={concertData.band_id}
              onChange={handleChange}
              type="text"
              placeholder="band id"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicb">
            <Form.Label>genre</Form.Label>
            <Form.Control
              name="genre_id"
              value={concertData.genre_id}
              onChange={handleChange}
              type="text"
              placeholder="band id"
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
