import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Navbar, Nav,Card} from 'react-bootstrap';

function Header(props) {
    return (
  <Container>
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
               <Nav.Link href="/"><h3>Home</h3></Nav.Link>
               <Nav.Link href="/dogs"><h3>Available Pets</h3></Nav.Link>
               <Nav.Link href="/new"><h3>Register Pet</h3></Nav.Link>
           </Nav>

        </Container>
     </Navbar>
     <Card className="Header" bg="white" variant= "white" text="dark" >

          <Card.Body>
              <Card.Title>Pupps&Paws.com</Card.Title>        

          </Card.Body>
      </Card>
      </Container>
 
    );
}

export default Header;