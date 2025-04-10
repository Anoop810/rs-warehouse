import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PestControlService = () => {
  return (
    <section className="service-detail py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold mb-4">Pest Control Services</h1>
          <div className="divider bg-primary mb-4" style={{ height: '4px', width: '70px' }}></div>
        </motion.div>

        <Row className="mb-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="service-images">
                <img
                  src="/services/pest-1.jpg"
                  alt="Pest Control - Inspection"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/pest-2.jpg"
                  alt="Pest Control - Treatment"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/pest-3.jpg"
                  alt="Pest Control - Prevention"
                  className="img-fluid rounded shadow mb-3"
                />
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Professional Pest Control Solutions</h3>
                  <p className="mb-4">
                    Our professional pest control services protect your stored goods from damage caused by pests and insects. We use environmentally friendly methods and regular monitoring to maintain a pest-free environment.
                  </p>
                  <p className="mb-4">
                    Our trained technicians conduct regular inspections and treatments to prevent infestations and ensure the safety of your inventory. We follow strict safety protocols and use approved methods for pest control.
                  </p>
                  <h4 className="mb-3">Our Pest Control Services Include:</h4>
                  <ul className="mb-4">
                    <li>Regular inspections</li>
                    <li>Preventive treatments</li>
                    <li>Emergency pest control</li>
                    <li>Documentation of treatments</li>
                    <li>Environmentally friendly solutions</li>
                    <li>Integrated Pest Management (IPM)</li>
                    <li>Follow-up monitoring</li>
                  </ul>
                  <h4 className="mb-3">Why Choose Our Pest Control Services?</h4>
                  <ul>
                    <li>Certified pest control technicians</li>
                    <li>Safe and effective treatments</li>
                    <li>Regular monitoring and reporting</li>
                    <li>Environmentally conscious methods</li>
                    <li>Comprehensive documentation</li>
                    <li>24/7 emergency response</li>
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PestControlService; 