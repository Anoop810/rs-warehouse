import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-section text-white py-5" style={{ backgroundColor: '#0F0147' }}>
      <Container className="py-5">
        <Row className="align-items-center min-vh-75">
          <Col lg={6} className="text-center text-lg-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="display-4 fw-bold mb-4"
            >
              Your goods are in <span className="text-warning">safe hands</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lead mb-4"
            >
              Professional logistics and warehousing solutions for your business
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="#services" className="btn btn-warning btn-lg me-3">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </Link>
            </motion.div>
          </Col>
          
          <Col lg={6} className="mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <img 
                src="/hero-image.jpg" 
                alt="Logistics Services" 
                className="img-fluid rounded shadow-lg" 
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;