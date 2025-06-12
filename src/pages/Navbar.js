import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="px-3"
      style={{ backgroundColor: '#004aad' }} // Navy blue
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://paymanfintech.in/images/home%20logo%2050x50.png"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Payman Logo"
          />
          <span className="fw-bold">PAYMAN</span>
        </Navbar.Brand>

        {/* Toggler visible only on small screens (expand="lg" controls this) */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="/" exact="true">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
