import React, { useState } from "react";
import SearchBar from '../../components/UserPart/SearchBar.js';
import { Button, Container, Form} from 'react-bootstrap'
import './Register.css'
// import axios from 'axios'
import axios from '../../api/axios'
import { useNavigate } from "react-router-dom";

function Register () {
    let navigate = useNavigate();
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
        axios.post("/users", newUserData).then((response) => {
          console.log(response.status);
          console.log(response.data);
        });
        setTimeout(() => {
          navigate("/Login");
        }, 1500);
        
      };
    return (
        <>
        <SearchBar />
        <Container style={{ marginLeft: "auto", marginRight: "auto"}} >
          
        <Form style={{width: "50%", margin: "auto", marginTop: 50, backgroundColor: "#66c2ff", padding: 10 }} onSubmit={handleSubmit}>
        <h1 style={{marginBottom: 50, textAlign: "center"}}>Register</h1>
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

          <Button style={{marginLeft: 260}} className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
    
        </>
        )
}

export default Register