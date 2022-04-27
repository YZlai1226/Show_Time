import React from "react";
import { useState } from "react";
import "./topbar.css";
import {Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FestivalIcon from '@mui/icons-material/Festival';
import PianoIcon from '@mui/icons-material/Piano';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Topbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link onClick={handleShow} href=""> <MenuIcon sx={{fontSize: 30}}/> </Nav.Link> 
    </Nav>

    {/* Right sidebar */}
    <Nav> 
      <Nav.Link href="#deets"><AccountCircleIcon sx={{fontSize: 30}} /></Nav.Link>
      <NavDropdown title="Actions" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
        <NavDropdown.Item href="/">Home Page</NavDropdown.Item>
 
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>

  <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link p-2 href="/dashboard/users"> <GroupIcon sx={{fontSize: 30, paddingBottom: 0.5}}/> Users </Nav.Link>
          <Nav.Link href="/dashboard/genres"> <MusicNoteIcon sx={{fontSize: 30, paddingBottom: 0.5}}/>Genres </Nav.Link>
          <Nav.Link href="/dashboard/concerts"><FestivalIcon sx={{fontSize: 30, paddingBottom: 1}}/> Concerts</Nav.Link>
          <Nav.Link href="/dashboard/bands"><PianoIcon sx={{fontSize: 30, paddingBottom: 0.5}}/> Bands</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>

      </Offcanvas.Body>
        </Offcanvas>
  </Container>
</Navbar>

  );
}