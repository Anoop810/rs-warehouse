import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import logo from '../assets/logo-removebg-preview.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Company Info */}
          <Col xs={12} md={6} className="mb-3 mb-md-0 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img src={logo} alt="R.S Warehouse" height="30" className="me-2" />
              <span className="text-light-50">
                © 2023 R.S Warehouse
              </span>
            </div>
          </Col>

          {/* Developer Info */}
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
              <span className="text-light-50 me-2">Developed by Anoop Sonawane</span>
              <div className="social-links">
                <a href="mailto:anoopsonawane810@gmail.com" 
                   className="text-light me-2">
                  <Envelope />
                </a>
                <a href="https://github.com/anoop810" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-light me-2">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/anoop-sonawane-aa98851a3/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-light">
                  <Linkedin />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;