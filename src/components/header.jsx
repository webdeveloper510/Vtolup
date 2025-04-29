// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/header.css';
import logo from '../Assets/image/Logo.svg';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          
          {/* Custom Toggler */}
          <Navbar.Toggle aria-controls="navbarCollapse">
            <span className="custom-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
              <Nav.Link as={Link} to="/myflightplan" active={location.pathname === '/myflightplan'}>My Flight Plan</Nav.Link>
              <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About</Nav.Link>
              <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link>
              <Button as={Link} to="/login" className="btn">
                <span>Login/Register</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
