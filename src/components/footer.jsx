// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerBg from '../Assets/image/BG-Footer.jpg';
import logo from '../Assets/image/Logo.svg';
import '../Assets/css/footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="BG">
        <img src={footerBg} alt="Footer Background" />
      </div>

      <Container className="d-flex flex-column align-items-center">
      <h5>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </h5>
        <ul className="quickLinks d-flex justify-content-center align-items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/myflightplan">My Flight Plan</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login/Register</Link></li>
        </ul>

        <h6>
          &copy; {new Date().getFullYear()} LogistiWerx, Inc. All rights reserved.{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </h6>
      </Container>
    </footer>
  );
};

export default Footer;
