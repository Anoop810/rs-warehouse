import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Here you would normally send the data to your backend
  
    try {
      const response = await fetch('https://rs-warehouse-1.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
    
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setError(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setValidated(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    }
  };
  
  return (
    <section id="contact" className="contact-section page-section py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-4">Contact Us</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: '4px', width: '70px' }}></div>
            <p className="lead mb-5">
              Have questions or need assistance? Reach out to our team today.
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="contact-info bg-light p-4 rounded shadow-sm h-100">
              <h3 className="mb-4">Get In Touch</h3>
              
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <GeoAlt size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Our Location</h5>
                  <p className="mb-0">
                    Dahisar Mori<br />
                    Thane, Maharashtra<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <Envelope size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Email Us</h5>
                  <p className="mb-0">
                    info@rswarehouse.in
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <Telephone size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p className="mb-0">
                    +1 (555) 123-4567<br />
                    +1 (555) 765-4321
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <h5>Business Hours</h5>
                <p className="mb-1">We work around the clock, so your goods don't sit around.
                </p>
                <p className="mb-0"><span className="fw-bold">24/7 availability </span>— because storage waits for no one.</p>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="contact-form bg-white p-4 rounded shadow-sm">
              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Thank you for your message! We'll get back to you shortly.
                </Alert>
              )}
              
              {error && (
                <Alert variant="danger" onClose={() => setError(false)} dismissible>
                  There was an error submitting your form. Please try again.
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="name">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" Number"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Service Inquiry"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a subject.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;