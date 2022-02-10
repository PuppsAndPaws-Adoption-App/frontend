import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';

function Header(props) {
    return (
  <Navbar bg="dark" variant= "dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.PNG"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dogs">Available Pets</Nav.Link>
        <Nav.Link href="/new">Register Pet</Nav.Link>
     </Nav>

  </Container>
  </Navbar>
 
    );
}

export default Header;