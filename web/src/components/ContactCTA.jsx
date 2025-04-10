import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactCTA = () => {
  return (
    <section className="contact-cta py-5 bg-primary text-white">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="lead mb-4">Contact us today to discuss how we can help with your logistics needs.</p>
            <a href="/contact" className="btn btn-light btn-lg">Contact Us Now</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactCTA;