import React from 'react'

import Topbar from './components/topbar/Topbar'
import { Container } from 'react-bootstrap';


export default function Dashboard() {

  return ( 

    <>
    <Topbar />
    <Container>
      <h1 className='dashTitle'> Dashboard Home </h1> 
    </Container>
    
    </>

    
  );
}
