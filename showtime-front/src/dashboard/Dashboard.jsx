import React from 'react'

import Topbar from './components/topbar/Topbar'
import { Container } from 'react-bootstrap';


export default function Dashboard() {

  return ( 

    <>
    <Topbar />
    <Container>
     <div> <h1> Dash Home </h1> </div>
    </Container>
    
    </>

    
  );
}
