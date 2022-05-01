import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function ShowUser() {
  let token = localStorage.getItem('token');
  let { genreId } = useParams();
  let navigate = useNavigate();
  const [genre, setGenreData] = useState({});
  const [data, setData] = useState({
    name: "",
  });
  // Get genre
  useEffect(() => {
    axios
      .get(`http://localhost:3000/genres/${genreId}`)
      .then((res) => {
        console.log(res);
        setGenreData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genreId]);

  

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const genreData = {
      name: data.name,
    };
    axios
      .put(`http://localhost:3000/genres/${genreId}`, genreData, {
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

  // Delete User

  const deleteGenre = (genreId, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/genres/${genreId}`)
      .then((res) => console.log("deleted", res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/dashboard/genres");
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
                <CardContent sx={{ marginBottom: 10 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong> Name:</strong> {genre.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    <strong> Created :</strong> {genre.updated_at}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    <strong> Updated : </strong> {genre.created_at}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Col>
          <Col lg="6">
            <div
              className="shadow-sm p-3 mb-5 bg-white rounded"
              style={{ marginTop: 10 }}
            >
              <div style={{ float: "right" }}>
                <Button
                  onClick={(e) => deleteGenre(genreId, e)}
                  variant="danger"
                >
                  <i style={{ marginRight: 3 }} class="bi bi-trash3"></i> Delete
                </Button>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3> Edit genre n° {genreId}</h3>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicA">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={genre.name}
                  />
                </Form.Group>

                <Button className="mt-2" variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
