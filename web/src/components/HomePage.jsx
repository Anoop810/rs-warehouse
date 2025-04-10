import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServicesSection from './ServiceSection';
import ContactForm from './ContactForm';
import AboutSection from './aboutSection';
import StorageGoodsSlider from './StorageGoodsSlider';
import aiwarehouse from '../assets/aiwarehouse1.webp'; 
import carouselimg from '../assets/carouselimg1.webp';
import carouselimg2 from '../assets/carouselimg2.webp';
import carouselimg3 from '../assets/carouselimg3.webp';
import carouselimg4 from '../assets/carouselimg4.webp';
import carouselimg5 from '../assets/carouselimg5.webp';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden" style={{ backgroundColor: '#0F0147' }}>
        {/* Background Image for Mobile */}
        <div className="d-block d-lg-none position-absolute w-100 h-100" style={{
          backgroundImage: `linear-gradient(rgba(15, 1, 71, 0.85), rgba(15, 1, 71, 0.85)), url(${aiwarehouse})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: 0,
          left: 0,
          zIndex: 0
        }} />

        <Container fluid className="px-0 h-100">
          <Row className="g-0 min-vh-100 mx-0">
            {/* Content Side */}
            <Col lg={12} className="d-flex align-items-center justify-content-center p-3 p-md-5" style={{ zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
                style={{ maxWidth: '800px' }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  Your <span className="text-warning">Goods</span> are in safe Hands.
                </h1>
                <p className="lead mb-4 fs-4">
                  We provide reliable and efficient logistics solutions for your business needs.
                  From transportation to warehousing, we've got you covered.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link to="/services" className="btn btn-warning btn-lg px-4 py-2">
                    Our Services
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-2 position-relative overflow-hidden contact-btn">
                    <span className="position-relative z-1">Contact Us</span>
                    <div className="position-absolute w-100 h-100 top-0 start-0 contact-btn-overlay"></div>
                  </Link>
                </div>
              </motion.div>
            </Col>

            {/* Desktop Image Side - Now as background */}
            <div className="d-none d-lg-block position-absolute w-100 h-100" style={{ 
              top: 0,
              left: 0,
              zIndex: 0,
              backgroundImage: `linear-gradient(rgba(15, 1, 71, 0.85), rgba(15, 1, 71, 0.85)), url(${aiwarehouse})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </Row>
        </Container>
      </section>

      {/* Storage Goods Slider Section */}
      <StorageGoodsSlider />

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            
          </motion.div>
          <ServicesSection />
        </Container>
      </section>

      {/* Warehouse Carousel Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold">Our Facilities</h2>
            <div className="divider mx-auto"></div>
            <p className="lead text-muted">
               warehousing and logistics facilities
            </p>
          </motion.div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Carousel 
                indicators={true} 
                controls={true} 
                className="shadow-lg rounded overflow-hidden"
                interval={3000}
              >
                <Carousel.Item>
                  <div className="carousel-image-container" style={{ height: 'auto', aspectRatio: '16/9' }}>
                    <img
                      className="d-block w-100"
                      src={carouselimg}
                      alt="Main Warehouse"
                      style={{ 
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-image-container" style={{ height: 'auto', aspectRatio: '16/9' }}>
                    <img
                      className="d-block w-100"
                      src={carouselimg2}
                      alt="Distribution Center"
                      style={{ 
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-image-container" style={{ height: 'auto', aspectRatio: '16/9' }}>
                    <img
                      className="d-block w-100"
                      src={carouselimg3}
                      alt="Storage Facility"
                      style={{ 
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-image-container" style={{ height: 'auto', aspectRatio: '16/9' }}>
                    <img
                      className="d-block w-100"
                      src={carouselimg4}
                      alt="Storage Facility"
                      style={{ 
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-image-container" style={{ height: 'auto', aspectRatio: '16/9' }}>
                    <img
                      className="d-block w-100"
                      src={carouselimg5}
                      alt="Storage Facility"
                      style={{ 
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5">
        <Container>
          <AboutSection />
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta py-5 position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F0147 0%, #1a0b6b 100%)'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="position-relative"
              >
                <h2 className="display-5 fw-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="lead text-white mb-4">
                  Contact us today to discuss your logistics needs and discover how we can help your business grow.
                </p>
                <Link to="/contact" className="btn btn-warning btn-lg px-5 py-3 fw-bold position-relative overflow-hidden contact-cta-btn">
                  <span className="position-relative z-1">Contact Us Now</span>
                  <div className="position-absolute w-100 h-100 top-0 start-0 contact-cta-btn-overlay"></div>
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;