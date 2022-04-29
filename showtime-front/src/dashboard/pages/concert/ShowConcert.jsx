import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Topbar from '../../components/topbar/Topbar'
import { unstable_HistoryRouter, useParams,} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export default function ShowConcert() {
    let { concertId } = useParams();
    const [concert, setConcertData] = useState({});


    // Get concert 
    useEffect(() => {
      axios.get(`http://localhost:3000/concerts/${concertId}`)
      .then(res => {
        console.log(res)
        setConcertData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [concertId]);
    
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
      const concertData = {
        name: data.name,
        email: data.email,
        password: data.password,
        account_active: data.account_active,
        admin: data.admin
  
      };
      axios.put(`http://localhost:3000/concerts/${concertId}`, concertData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    }

    // Delete concert

    const deleteconcert = (concertId, e) => {
      e.preventDefault();
      axios.delete(`http://localhost:3000/concerts/${concertId}`)
      .then(res => console.log('deleted', res))
      .catch(err => console.log(err));
      
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
                                image= {concert.image}
                                alt=""
                            />
                            <CardContent sx={{marginBottom: 5}} >
                                <Typography gutterBottom variant="h5" component="div">
                                Title: {concert.title}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Description: {concert.description}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Band id:  {concert.band_id}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Genre_id: {concert.genre_id}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Created : {concert.updated_at}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                Updated : {concert.created_at}
                                </Typography>

                            </CardContent>
                        </Card>

                    </div>
                </Col>
                <Col lg= "6">
                <div className='shadow-sm p-3 mb-5 bg-white rounded' style={{marginTop: 10}}>

                        <h3> Edit concert n° {concertId} <Button onClick={(e)=> deleteconcert(concertId, e)}  variant="danger">
                        Delete
                    </Button></h3>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name='name' value={data.name} onChange={handleChange} type="text" placeholder= {concert.name} />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='email' value={data.email} onChange={handleChange}  type="text" placeholder= {concert.email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicA">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='password' value={data.password} onChange={handleChange}  type="text" placeholder= {concert.password} />
                    </Form.Group>

                   
                    <Form.Group className="mb-3" controlId="formBasicC">
                    <Form.Label>Seats</Form.Label>
                    <Form.Control name='account_active' value={data.account_active} onChange={handleChange}  type="text" placeholder= {concert.account_active} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicD">
                    <Form.Label>Band_id</Form.Label>
                    <Form.Control name='admin' value={data.admin} onChange={handleChange} type="text" placeholder= {concert.admin} />
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
