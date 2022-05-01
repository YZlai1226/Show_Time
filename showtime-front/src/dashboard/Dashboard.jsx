import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Topbar from "./components/topbar/Topbar";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { element } from "prop-types";

export default function Dashboard() {
  let token = localStorage.getItem("token");

  const [bookingsData, setBookingsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [concertsData, setConcertsData] = useState([]);

  // const [concert, setConcertData] = useState({}); 
  // get bookings
  useEffect(() => {
    axios
      .get("http://localhost:3000/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        
        setBookingsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  // get users
  useEffect(() => {
    axios
      .get("http://localhost:3000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  // get concerts

  useEffect(() => {
    axios
      .get("http://localhost:3000/concerts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setConcertsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  // concert
  
  return (
    <>
      <Topbar />
      <Container>
        <h1 className="dashTitle"> Dashboard Home </h1>

      </Container>
      <Container>
        <Row>
          <Col>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                {
                  bookingsData.length > 25 ? (
                    <Typography variant="h4" component="div">
                    Bookings <i style={{color: "green", fontSize: 30}} class="bi bi-graph-up-arrow"></i>
                  </Typography>   
                  ) : (
                    <Typography variant="h4" component="div">
                    Bookings <i style={{color: "red", fontSize: 30}} class="bi bi-graph-down-arrow"></i>
                  </Typography>
                  )
                }
                
                <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
                  <strong>{bookingsData.length} </strong> 
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Last month: 25 bookings   
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
              {
                  usersData.length > 5  ? (
                    <Typography variant="h4" component="div">
                    Users <i style={{color: "green", fontSize: 30}} class="bi bi-graph-up-arrow"></i>
                  </Typography>   
                  ) : (
                    <Typography variant="h4" component="div">
                    Users <i style={{color: "red", fontSize: 30}} class="bi bi-graph-down-arrow"></i>
                  </Typography>
                  )
                }
                <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
                   <strong>{usersData.length}</strong>
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Last month: 5 users   
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
              {
                  concertsData.length > 10 ? (
                    <Typography variant="h4" component="div">
                    Concerts <i style={{color: "green", fontSize: 30}} class="bi bi-graph-up-arrow"></i>
                  </Typography>   
                  ) : (
                    <Typography variant="h4" component="div">
                    Concerts <i style={{color: "red", fontSize: 30}} class="bi bi-graph-down-arrow"></i>
                  </Typography>
                  )
                }
                <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
                   <strong>{concertsData.length}</strong>
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Last month: 10 concerts   
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
      {/* <div>
        {concertsData.map( concert => (<p>{concert._id}</p>))}
      </div> */}
             
      </Container>
      </>
  );
}
