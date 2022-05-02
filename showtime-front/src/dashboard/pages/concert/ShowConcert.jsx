import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import axios from "axios";
import axios from '../../../api/axios'

export default function ShowConcert() {
  let navigate = useNavigate();
  let { concertId } = useParams();
  const [concert, setConcertData] = useState({});
  let token = localStorage.getItem('token');

  // Get concert
  useEffect(() => {
    axios
      .get(`/concerts/${concertId}`)
      .then((res) => {
        console.log(res);
        setConcertData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [concertId]);

  const [data, setData] = useState({
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
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newConcertData = {
      seat_amount: data.seat_amount,
      image: data.image,
      title: data.title,
      description: data.description,
      date: data.date,
      band_id: data.band_id,
      genre_id: data.genre_id,
    };
    axios
      .put(`http://localhost:3000/concerts/${concertId}`, newConcertData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
  };

  // Delete concert

  const deleteConcert = (concertId, e) => {
    e.preventDefault();
    axios
      .delete(`/concerts/${concertId}`)
      .then((res) => console.log("deleted", res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/dashboard/concerts");
    }, 1500);
  };

  return (
    <>
      <Topbar />
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col lg="6">
            <div className="">
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  sx={{
                    borderRadius: 50,
                    width: 250,
                    height: 250,
                    marginLeft: 15,
                    marginBottom: 1,
                    marginTop: 5,
                  }}
                  component="img"
                  height="140"
                  image={concert.image}
                  alt=""
                />
                <CardContent sx={{ marginTop: 5 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>Title:</strong> {concert.title}
                  </Typography>
                  <Typography
                    style={{ paddingBottom: 2 }}
                    variant="h6"
                    color="text.secondary"
                  >
                    <strong>Description:</strong> {concert.description}
                  </Typography>
                  <Typography
                    style={{ paddingBottom: 2 }}
                    variant="h6"
                    color="text.secondary"
                  >
                    <strong>Date:</strong> {concert.date}
                  </Typography>
                  <Typography
                    style={{ paddingBottom: 2 }}
                    variant="h6"
                    color="text.secondary"
                  >
                    <strong>Band id:</strong> {concert.band_id}
                  </Typography>
                  <Typography
                    style={{ paddingBottom: 2 }}
                    variant="h6"
                    color="text.secondary"
                  >
                    <strong>Genre_id:</strong> {concert.genre_id}
                  </Typography>
                  <Typography
                    style={{ paddingBottom: 2 }}
                    variant="h6"
                    color="text.secondary"
                  >
                    <strong>Created :</strong> {concert.updated_at}
                  </Typography>
                  <Typography
                    style={{ paddingBottom: 2 }}
                    variant="h6"
                    color="text.secondary"
                  >
                    <strong>Updated :</strong> {concert.created_at}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Col>
          <Col lg="6">
            <div className="shadow-sm p-3 mb-5 bg-white rounded" style={{}}>
              <div style={{ float: "right" }}>
                <Button
                  onClick={(e) => deleteConcert(concertId, e)}
                  variant="danger"
                >
                  <i style={{ marginRight: 3 }} class="bi bi-trash3"></i> Delete
                </Button>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3> Edit concert n° {concertId}</h3>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    type="text"
                    placeholder={concert.title}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasica">
                  <Form.Label>seats</Form.Label>
                  <Form.Control
                    name="seat_amount"
                    value={data.seat_amount }
                    onChange={handleChange}
                    type="text"
                    placeholder={concert.seat_amount}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicb">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    name="image"
                    value={data.image}
                    onChange={handleChange}
                    type="text"
                    placeholder={concert.image}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                    placeholder={concert.description}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasiccc">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    type="text"
                    placeholder={concert.date}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasica">
                  <Form.Label>band</Form.Label>
                  <Form.Control
                    name="band_id"
                    value={data.band_id}
                    onChange={handleChange}
                    type="text"
                    placeholder={concert.band_id}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicb">
                  <Form.Label>genre</Form.Label>
                  <Form.Control
                    name="genre_id"
                    value={data.genre_id}
                    onChange={handleChange}
                    type="text"
                    placeholder={concert.genre_id}
                  />
                </Form.Group>

                <Button className="mt-2" variant="success" type="submit">
                <i class="bi bi-check-lg"></i> Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
