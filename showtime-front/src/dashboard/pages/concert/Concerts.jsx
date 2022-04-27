import React from 'react'
import ConcertList from './../../components/concertList/ConcertList'
import Topbar from './../../components/topbar/Topbar'
import { Container } from 'react-bootstrap'





export default function Concert() {

  return (
        
      <>
        <Topbar />
        <Container>
        <ConcertList />
        </Container>
        

      </>  
  )
}
