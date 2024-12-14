import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer text-white py-4">
    <hr />     
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#about" className="text-white">Our Story</Nav.Link>
              <Nav.Link href="#team" className="text-white">Our Team</Nav.Link>
              <Nav.Link href="#services" className="text-white">Services</Nav.Link>
              <Nav.Link href="#careers" className="text-white">Careers</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <Nav className="flex-column">
              <Nav.Link href="#contact-us" className="text-white">Contact Us</Nav.Link>
              <Nav.Link href="#support" className="text-white">Support</Nav.Link>
              <Nav.Link href="#faq" className="text-white">FAQ</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <Nav className="social-icons">
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white">
                <FaFacebook size={30} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="text-white">
                <FaTwitter size={30} />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="text-white">
                <FaInstagram size={30} />
              </Nav.Link>
              <Nav.Link href="https://linkedin.com" target="_blank" className="text-white">
                <FaLinkedin size={30} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
