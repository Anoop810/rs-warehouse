import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const CargoManagementService = () => {
  return (
    <section className="service-detail py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold mb-4">Cargo Management Services</h1>
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
                  src="/services/cargo-1.jpg"
                  alt="Cargo Management - Tracking"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/cargo-2.jpg"
                  alt="Cargo Management - Documentation"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/cargo-3.jpg"
                  alt="Cargo Management - Quality Control"
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
                  <h3 className="mb-4">Comprehensive Cargo Management Solutions</h3>
                  <p className="mb-4">
                    Our comprehensive cargo management services handle all aspects of your goods' journey, from arrival to final delivery. We provide end-to-end solutions for efficient cargo handling and tracking.
                  </p>
                  <p className="mb-4">
                    Our team of experts ensures that your cargo is handled with care and efficiency at every step of the process. We maintain detailed documentation and provide regular updates on your cargo's status.
                  </p>
                  <h4 className="mb-3">Our Management Services Include:</h4>
                  <ul className="mb-4">
                    <li>Cargo tracking and monitoring</li>
                    <li>Documentation management</li>
                    <li>Customs clearance assistance</li>
                    <li>Quality control inspections</li>
                    <li>Inventory management</li>
                    <li>Risk assessment and mitigation</li>
                    <li>Performance reporting</li>
                  </ul>
                  <h4 className="mb-3">Why Choose Our Cargo Management?</h4>
                  <ul>
                    <li>Experienced management team</li>
                    <li>Advanced tracking systems</li>
                    <li>Comprehensive documentation</li>
                    <li>Regular status updates</li>
                    <li>Customized solutions</li>
                    <li>24/7 support</li>
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

export default CargoManagementService; 