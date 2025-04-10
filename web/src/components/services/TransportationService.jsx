import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TransportationService = () => {
  return (
    <section className="service-detail py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold mb-4">Transportation Services</h1>
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
                  src="/services/transportation-1.jpg"
                  alt="Transportation Service - Fleet"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/transportation-2.jpg"
                  alt="Transportation Service - Delivery"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/transportation-3.jpg"
                  alt="Transportation Service - Tracking"
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
                  <h3 className="mb-4">Efficient and Reliable Transportation Solutions</h3>
                  <p className="mb-4">
                    Our transportation services ensure safe and timely delivery of your goods from our warehouse to your desired location. We maintain a fleet of modern vehicles equipped with GPS tracking and temperature control systems.
                  </p>
                  <p className="mb-4">
                    We offer both local and long-distance transportation solutions, with real-time tracking and updates throughout the journey. Our experienced drivers are trained in handling various types of cargo with utmost care.
                  </p>
                  <h4 className="mb-3">Our Services Include:</h4>
                  <ul className="mb-4">
                    <li>Door-to-door delivery</li>
                    <li>Scheduled pickups</li>
                    <li>Real-time tracking</li>
                    <li>Temperature-controlled transport</li>
                    <li>Special handling for fragile items</li>
                    <li>Express delivery options</li>
                    <li>Bulk transportation</li>
                  </ul>
                  <h4 className="mb-3">Why Choose Us?</h4>
                  <ul>
                    <li>Modern fleet with GPS tracking</li>
                    <li>Experienced and trained drivers</li>
                    <li>24/7 customer support</li>
                    <li>Competitive pricing</li>
                    <li>Insurance coverage</li>
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

export default TransportationService; 