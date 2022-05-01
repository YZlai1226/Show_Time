import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams, useResolvedPath } from "react-router-dom";
import PostsManager from '../../components/UserPart/PostsManager.js'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AuthContext from "../../context/AuthProvider"
import axios from '../../api/axios'
import SearchBar from '../../components/UserPart/SearchBar.js'


export default function ShowUser() {
  const { auth, setAuth } = useContext(AuthContext);
  let { userId } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  let { concertsId } = useParams();
  const [groups, setGroups] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [UserConcerts, setUserConcerts] = useState([]);
  //////////////
  // Get user //
  //////////////

  useEffect(() => {
    if(auth) {
    axios
      // !!! //
      // .get(`http://localhost:3000/users/${userId}`)
      // !!! //
      .get(`/users/userdetails/` + auth.userId)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    axios.get('/concerts')
      .then(result => {
        setConcerts(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get concerts');
      });
    axios.get('/bands')
      .then(result => {
        setGroups(result.data);
      })
      .catch(err => {
        console.error(err.message, 'get group');
      });
  }, [auth]);


  //////////////////
  // Get concerts //
  //////////////////

  useEffect(() => {
  if (user?.bookings) {
    setUserConcerts(concerts.filter((concert) => user.bookings.findIndex((booking) => booking.concert_id === concert._id) !== -1))

    console.log("User", user);
    console.log("concerts", concerts);
    console.log("UserBookings", user.bookings);
  }
}, [user]);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",

  });

  ///////////////
  // Edit User //
  ///////////////


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    axios
      .put(`/users/${userId}`, user)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    window.location.reload(false);
  };

  /////////////////
  // Delete User //
  /////////////////

  const deleteUser = (userId, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then((res) => console.log("deleted", res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };


  return (
    <>
    <SearchBar class="searchbar" />

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

                  {/* <Typography variant="h6" color="text.secondary">
                      Favorited Bands : {user.bands}
                      <br/>Favorited bands : {bands.name}
                    </Typography> */}
                </CardContent>
              </Card>
            </div>
          </Col>
          <Col lg="6">
            <div
              className="shadow-sm p-3 mb-5 bg-white rounded"
              style={{ marginTop: 10 }}
            >

              <div style={{ marginBottom: 20 }}>
                <h3> Edit your Profile </h3>
              </div>
              <Form onSubmit={handleSubmit}>

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

                <Button className="mt-2" variant="success" type="submit">
                  <i class="bi bi-check-lg"></i> Submit
                </Button>
                <div style={{ float: "right" }}>
                  <Button onClick={(e) => deleteUser(userId, e)} variant="danger">
                    <i style={{ marginRight: 3 }} class="bi bi-trash3"></i> Delete
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Typography variant="h6" color="text.secondary">
          <div>
            <br></br>
            <h3 style={{textAlign: "center"}}>Booked Concerts</h3>
            <PostsManager concerts={UserConcerts} groups={groups} />
          </div>
        </Typography>
      </Container>

    </>
  );
}
