import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const WarehousingService = () => {
  return (
    <section className="service-detail py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold mb-4">Warehousing Services</h1>
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
                  src="/services/warehouse-1.jpg"
                  alt="Warehousing Service - Facility"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/warehouse-2.jpg"
                  alt="Warehousing Service - Storage"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/services/warehouse-3.jpg"
                  alt="Warehousing Service - Security"
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
                  <h3 className="mb-4">Secure and Efficient Storage Solutions</h3>
                  <p className="mb-4">
                    Our state-of-the-art warehousing facilities provide secure and efficient storage solutions for your goods. We offer various storage options including ambient, temperature-controlled, and specialized storage areas.
                  </p>
                  <p className="mb-4">
                    Our warehouses are equipped with modern security systems, fire protection, and 24/7 surveillance to ensure the safety of your inventory. We provide comprehensive inventory management and regular reporting.
                  </p>
                  <h4 className="mb-3">Facility Features:</h4>
                  <ul className="mb-4">
                    <li>Climate-controlled storage areas</li>
                    <li>Advanced security systems</li>
                    <li>Fire protection systems</li>
                    <li>24/7 surveillance</li>
                    <li>Loading docks and equipment</li>
                    <li>Inventory management system</li>
                    <li>Regular maintenance and cleaning</li>
                  </ul>
                  <h4 className="mb-3">Our Services Include:</h4>
                  <ul>
                    <li>Short-term and long-term storage</li>
                    <li>Inventory management and reporting</li>
                    <li>Regular stock audits</li>
                    <li>Order fulfillment services</li>
                    <li>Cross-docking facilities</li>
                    <li>Value-added services</li>
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

export default WarehousingService; 