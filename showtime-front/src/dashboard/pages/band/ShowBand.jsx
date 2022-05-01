import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import axios from "axios";
import axios from '../../../api/axios'

export default function ShowUser() {
  let { bandId } = useParams();
  let navigate = useNavigate();
  const [band, setBandData] = useState({});

  // Get band
  useEffect(() => {
    axios
      .get(`/bands/${bandId}`)
      .then((res) => {
        console.log(res);
        setBandData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bandId]);

  const [data, setData] = useState({
    name: "",
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
    const bandData = {
      name: data.name,
    };
    axios
      .put(`/bands/${bandId}`, bandData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    window.location.reload(false);
  };

  // Delete User

  const deleteBand = (bandId, e) => {
    e.preventDefault();
    axios
      .delete(`/bands/${bandId}`)
      .then((res) => console.log("deleted", res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/dashboard/bands");
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
                <CardContent sx={{ marginBottom: 5 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong> Name:</strong> {band.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    <strong> Created :</strong> {band.updated_at}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    <strong> Updated : </strong> {band.created_at}
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
                <Button onClick={(e) => deleteBand(bandId, e)} variant="danger">
                  <i style={{ marginRight: 3 }} class="bi bi-trash3"></i> Delete
                </Button>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3> Edit band n° {bandId}</h3>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicA">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={band.name}
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
