import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Topbar from '../../components/topbar/Topbar'
import './user.css'
import { useParams,} from "react-router-dom";
export default function ShowUser() {

    let { userId } = useParams();
  return (
    <>
        <Topbar />
        <Container style={{marginTop: 20}}>
            <Row>
                <Col >
                    <div className='user'> 
                         <h1>Show User {userId}</h1>
                    </div>ye
                </Col>
                <Col sm={8}>
                    <div > 
                        <h1>Edit User {userId}</h1>

                    </div>
                </Col>
            </Row>
        
        </Container>
     
    </>

    
  )
}
