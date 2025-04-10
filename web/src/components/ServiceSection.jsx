import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TruckFlatbed, 
  BoxSeam, 
  Search,
  Tools,
  People,
  FileEarmark,
  ClipboardData,
  ListTask,
  Bug,
  Box
} from 'react-bootstrap-icons';

const services = [
  {
    id: 1,
    title: "Manpower Management",
    description: "Arranging trained labor for warai cargo crossing, unloading/stacking bag stock, bulk repacking, and vehicle loading operations.",
    icon: People,
    color: "#336633",
    path: "/services/1"
  },
  {
    id: 2,
    title: "Cargo Vehicle Documentation",
    description: "Handling weight slips, supervision reports, delivery vehicle weight slips, and gate passes for cargo drivers.",
    icon: FileEarmark,
    color: "#333399",
    path: "/services/2"
  },
  {
    id: 3,
    title: "Cargo Planning & Reporting",
    description: "Daily work planning, client communication via WhatsApp/email, order processing, and damage reporting for efficient cargo management.",
    icon: ClipboardData,
    color: "#990066",
    path: "/services/3"
  },
  {
    id: 4,
    title: "Cargo Inspection",
    description: "Collecting challan and weight slips, conducting rough tally, verifying container numbers with BL copy and CHA challan, and checking seal numbers.",
    icon: Search,
    color: "#663300",
    path: "/services/4"
  },
  {
    id: 5,
    title: "Cargo Maintenance",
    description: "Regular cargo inspections every 15 days, maintaining cleanliness after dispatch, and scheduling fumigation after 28 days of stock holding.",
    icon: Tools,
    color: "#996633",
    path: "/services/5"
  },
  {
    id: 6,
    title: "Cargo Repacking",
    description: "Repacking of loose goods to preserve & store for further processing and distribution",
    icon: Box,
    color: "#009933",
    path: "/services/6"
  },
  {
    id: 7,
    title: "Cargo Management",
    description: "Cargo management services to ensure the safe and efficient movement of goods.",
    icon: ListTask,
    color: "#6600cc",
    path: "/services/7"
  },
  {
    id: 8,
    title: "Pest Control",
    description: "Pest control services to ensure the safety of goods from pests and insects.",
    icon: Bug,
    color: "#cc3300",
    path: "/services/8"
  }
];

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  
  return (
    <Col md={6} lg={4} className="mb-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-100 shadow-sm hover-lift">
          <Card.Body className="text-center p-4">
            <div 
              className="icon-box rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
              style={{ 
                backgroundColor: `${service.color}20`, 
                width: '80px', 
                height: '80px' 
              }}
            >
              <IconComponent size={36} color={service.color} />
            </div>
            <Card.Title className="mb-3 fw-bold">{service.title}</Card.Title>
            <Card.Text className="text-muted">{service.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white border-0 text-center pb-4">
            <Link to={service.path} className="btn btn-outline-primary">Learn More</Link>
          </Card.Footer>
        </Card>
      </motion.div>
    </Col>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="page-section py-5">
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
             Our Services
            </motion.h2>
            <motion.div 
              className="divider bg-primary mx-auto mb-4"
              style={{ height: '4px', width: '70px' }}
              initial={{ width: 0 }}
              whileInView={{ width: '70px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="lead mb-5 text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We offer comprehensive logistics solutions to streamline your supply chain
            </motion.p>
          </Col>
        </Row>
        
        <Row>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;