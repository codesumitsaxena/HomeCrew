import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../App.css';

function NavbarApp() {
  return (
    <Navbar expand="lg" className="custom-navbar py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="brand-text">
          HomeCrew
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center text-center">
            <Nav.Link href="#home" className="custom-link">Home</Nav.Link>
            <Nav.Link href="#services" className="custom-link">Services</Nav.Link>
            <Nav.Link as={Link} to="/AgentDetail/1" className="custom-link">About</Nav.Link>
            <Nav.Link as={Link} to="/service/1" className="custom-link">Contact</Nav.Link>

            <Button className="book-btn  ms-lg-3 mt-3 mt-lg-0">
              Book a Service
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
