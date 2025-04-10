import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const CargoRepackingService = () => {
  return (
    <section className="service-detail py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold mb-4">Cargo Repacking Services</h1>
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
                  src="/services/repacking-1.jpg"
                  alt="Cargo Repacking - Process"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/repacking-2.jpg"
                  alt="Cargo Repacking - Materials"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/repacking-3.jpg"
                  alt="Cargo Repacking - Quality Control"
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
                  <h3 className="mb-4">Professional Cargo Repacking Solutions</h3>
                  <p className="mb-4">
                    Our cargo repacking services ensure that your goods are properly packaged and protected for storage and transportation. We use high-quality materials and follow industry best practices for packaging.
                  </p>
                  <p className="mb-4">
                    We offer specialized repacking solutions for various types of goods, including fragile items, hazardous materials, and temperature-sensitive products. Our team is trained in handling all types of cargo with care.
                  </p>
                  <h4 className="mb-3">Our Repacking Services Include:</h4>
                  <ul className="mb-4">
                    <li>Custom packaging solutions</li>
                    <li>Protective material application</li>
                    <li>Labeling and documentation</li>
                    <li>Quality control checks</li>
                    <li>Specialized handling for fragile items</li>
                    <li>Hazardous material packaging</li>
                    <li>Temperature-sensitive packaging</li>
                  </ul>
                  <h4 className="mb-3">Quality Assurance:</h4>
                  <ul>
                    <li>Trained packaging specialists</li>
                    <li>Quality control inspections</li>
                    <li>Documentation and tracking</li>
                    <li>Compliance with safety standards</li>
                    <li>Custom packaging solutions</li>
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

export default CargoRepackingService; 