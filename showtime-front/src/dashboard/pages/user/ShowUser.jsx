import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Topbar from '../../components/topbar/Topbar'
import { useParams,} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function ShowUser() {

    let { userId } = useParams();
    const [user, setUserData] = useState({})

    useEffect(() => {
      axios.get(`http://localhost:3000/users/${userId}`)
      .then(res => {
        console.log(res)
        setUserData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [userId])

    
  return (
    <>
        <Topbar />
        <Container style={{marginTop: 100}}>
            <h1> Edit </h1>
            <Row>
                <Col >
                    <div className='user'> 
                         <h6>User n° {userId}</h6>
                         <Card sx={{ maxWidth: 500 }}>
                            <CardMedia sx={{borderRadius: 50, width: 250, height: 250, marginLeft: 15,}}
                                component="img"
                                height="140"
                                image= {user.avatar}
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Name: {user.name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                E-mail: {user.email}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Actif: {user.account_active}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Admin: {user.admin}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Created_at: {user.updated_at}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Updated_at: {user.created_at}
                                </Typography>

                            </CardContent>
                        </Card>

                    </div>
                </Col>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="New name.." />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="New Email.." />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Actif</Form.Label>
                    <Form.Control type="text" placeholder="Actif.." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Admin right</Form.Label>
                    <Form.Control type="text" placeholder="Admin right...." />
                    </Form.Group>

                    <Button className='mt-2' variant="primary" type="submit">
                    Submit
                    </Button>

                </Form>

                </Col>
            </Row>
        
        </Container>
     
    </>

    
  )
}
