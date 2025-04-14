import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import shippingContainers from '../assets/shippingContainers (1).webp';

const AboutSection = () => {
  return (
    <section id="about" className="page-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.h2 
              className="display-5 fw-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Our Company
            </motion.h2>
            <motion.div 
              className="divider bg-primary mx-auto mb-4"
              style={{ height: '4px', width: '70px' }}
              initial={{ width: 0 }}
              whileInView={{ width: '70px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={shippingContainers}
                alt="About Our Company" 
                className="img-fluid rounded shadow" 
              />
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4">Your Trusted Logistics Partner</h3>
              <p className="lead mb-4">
                With over 15 years of experience in the industry, we provide comprehensive 
                logistics solutions tailored to meet the unique needs of your business.
              </p>
              <p className="mb-4">
                Our dedicated team of professionals is committed to delivering exceptional 
                service with a focus on reliability, efficiency, and customer satisfaction.
                We understand the importance of timely delivery and secure handling of your
                valuable goods.
              </p>
              <p className="mb-4">
                Whether you're a small business or a large enterprise, we have the expertise
                and resources to streamline your supply chain and help your business grow.
              </p>
             
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;