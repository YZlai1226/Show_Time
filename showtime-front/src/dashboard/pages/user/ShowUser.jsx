import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Topbar from '../../components/topbar/Topbar'
import { unstable_HistoryRouter, useParams,} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export default function ShowUser() {
    let { userId } = useParams();
    const [user, setUserData] = useState({});


    // Get user 
    useEffect(() => {
      axios.get(`http://localhost:3000/users/${userId}`)
      .then(res => {
        console.log(res)
        setUserData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [userId]);
    
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      account_active: "",
      admin: ""
    });
  
    const handleChange = (e) => {
      const value = e.target.value;
      setData({
        ...data,
        [e.target.name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        account_active: data.account_active,
        admin: data.admin
  
      };
      axios.put(`http://localhost:3000/users/${userId}`, userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    }

    // Delete User

    const deleteUser = (userId, e) => {
      e.preventDefault();
      axios.delete(`http://localhost:3000/users/${userId}`)
      .then(res => console.log('deleted', res))
      .catch(err => console.log(err));
      unstable_HistoryRouter.push('/dashboard')
    }
    
  return (
    <>
        <Topbar />
        <Container style={{marginTop: 100}}>
            <Row>
                <Col lg= "6">
                    <div className=''  > 

                         <Card sx={{ maxWidth: 500 }}>
                            <CardMedia sx={{borderRadius: 50, width: 250, height: 250, marginLeft: 15, marginBottom: 1, marginTop: 5,}}
                                component="img"
                                height="140"
                                image= {user.avatar}
                                alt=""
                            />
                            <CardContent sx={{marginBottom: 5}} >
                                <Typography gutterBottom variant="h5" component="div">
                                Name: {user.name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                E-mail: {user.email}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Actif:  {user.account_active}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Admin: {user.admin}
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
                <Col lg= "6">
                <div className='shadow-sm p-3 mb-5 bg-white rounded' style={{marginTop: 10}}>

                        <h3> Edit user n° {userId} <Button onClick={(e)=> deleteUser(userId, e)}  variant="danger">
                        Delete
                    </Button></h3>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' value={data.name} onChange={handleChange} type="text" placeholder= {user.name} />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' value={data.email} onChange={handleChange}  type="text" placeholder= {user.email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' value={data.password} onChange={handleChange}  type="text" placeholder= {user.password} />
                    </Form.Group>

                   
                    <Form.Group className="mb-3" controlId="formBasicC">
                    <Form.Label>Actif</Form.Label>
                    <Form.Control name='account_active' value={data.account_active} onChange={handleChange}  type="text" placeholder= {user.account_active} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicD">
                    <Form.Label>Admin right</Form.Label>
                    <Form.Control name='admin' value={data.admin} onChange={handleChange} type="text" placeholder= {user.admin} />
                    </Form.Group>

                    <Button className='mt-2' variant="primary" type="submit">
                    Submit
                    </Button>

                </Form>
                </div>
                </Col>
            </Row>
        
        </Container>
     
    </>

    
  )
}
