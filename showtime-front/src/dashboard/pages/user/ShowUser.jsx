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
    const [user, setUserData] = useState({});
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userActive, setUserActive] = useState('');
    const [userAdmin, setUserAdmin] = useState('');

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

    const editUser =  (e) => {
        e.preventDefault();
        const updatedUser = { name: userName, email: userEmail, 
            password: userPassword, accounte_active: userActive, admin: userAdmin };
        axios.put(`http://localhost:3000/users/${userId}`, updatedUser);
        setUserName('');
        setUserEmail('');
        setUserPassword('');
        setUserActive('');
        setUserAdmin('');   

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
                                Actif: {user.account_active}
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
                <div className='shadow-sm p-3 mb-5 bg-white rounded' style={{marginTop: 50}}>
                        <h3> Edit user n° {userId}</h3>
                <Form onSubmit={editUser}>
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={userName} type="text" placeholder= {user.name} />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={userEmail} type="text" placeholder= {user.email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={userPassword} type="text" placeholder= {user.password} />
                    </Form.Group>

                   
                    <Form.Group className="mb-3" controlId="formBasicC">
                    <Form.Label>Actif</Form.Label>
                    <Form.Control value={userActive} type="text" placeholder= {user.account_active} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicD">
                    <Form.Label>Admin right</Form.Label>
                    <Form.Control value={userAdmin} type="text" placeholder= {user.admin} />
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
