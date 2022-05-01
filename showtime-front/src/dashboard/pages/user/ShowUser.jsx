import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from '../../../api/axios'

export default function ShowUser() {
  let { userId } = useParams();
  let navigate = useNavigate();
  const [user, setUserData] = useState({});

  // Get user
  useEffect(() => {
    axios
      .get(`/users/userdetails/${userId}`)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    account_active: "",
    admin: "",
    avatar: "",
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
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      account_active: data.account_active,
      admin: data.admin,
      avatar: data.avatar
    };
    axios
      .put(`/users/${userId}`, userData)
      .then((response) => {
        console.log('here in put request')
        console.log(response.status);
        console.log(response.data);
      });
    window.location.reload(false);
  };

  // Delete User

  const deleteUser = (userId, e) => {
    e.preventDefault();
    axios
      .delete(`/users/${userId}`)
      .then((res) => console.log("deleted", res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/dashboard/users");
    }, 1500);
  };

  console.log('========user=======')
  console.log(user)
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
                  image={user.avatar}
                  alt=""
                />
                <CardContent sx={{ marginBottom: 5 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {user.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    E-mail: {user.email}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Active: {JSON.stringify(user.account_active)}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Admin: {JSON.stringify(user.admin)}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Created : {user.updated_at}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Updated : {user.created_at}
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
                <Button onClick={(e) => deleteUser(userId, e)} variant="danger">
                  <i style={{ marginRight: 3 }} class="bi bi-trash3"></i> Delete
                </Button>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3> Edit user n° {userId}</h3>
              </div>
              <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicA">
                  <Form.Label>Avatar</Form.Label>
                  <Form.Control
                    name="avatar"
                    value={data.avatar}
                    onChange={handleChange}
                    type="text"
                    placeholder={user.avatar}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicA">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={user.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicA">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    type="text"
                    placeholder={user.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicA">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    type="text"
                    placeholder={user.password}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicC">
                  <Form.Label>Active</Form.Label>
                  <Form.Control
                    name="account_active"
                    value={data.account_active}
                    onChange={handleChange}
                    type="text"
                    placeholder={JSON.stringify(user.account_active)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicD">
                  <Form.Label>Admin rights</Form.Label>
                  <Form.Control
                    name="admin"
                    value={data.admin}
                    onChange={handleChange}
                    type="text"
                    placeholder={JSON.stringify(user.admin)}
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
