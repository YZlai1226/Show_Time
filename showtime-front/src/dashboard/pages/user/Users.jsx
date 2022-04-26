import React from 'react'
import Topbar from './../../components/topbar/Topbar'
import UserList from '../../components/userList/UserList';
import { Container } from 'react-bootstrap';




export default function Users() {


  return (

    <>
      <Topbar />

      <Container>
        <UserList />
      </Container>
      
    </>
        
  )
}
