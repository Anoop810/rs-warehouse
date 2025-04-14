import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  People,
  FileEarmark,
  ClipboardData,
  Search,
  Tools,
  Box,
  ListTask,
  Bug
} from 'react-bootstrap-icons';

const services = [
  {
    id: 1,
    title: "Manpower Management",
    description: "Efficient management of trained labor for cargo handling and warehouse operations.",
    icon: People,
    color: "#336633",
    details: [
      "Professional labor management for cargo handling",
      "Trained workforce for warehouse operations",
      "Efficient resource allocation and supervision"
    ]
  },
  {
    id: 2,
    title: "Cargo Vehicle Supervision",
    description: "Handling cargo from weight measuring point till warehouse, inspecting documentation with weight slip till delivery.",
    icon: FileEarmark,
    color: "#333399",
    details: [
      "Complete supervision from weight measurement to delivery",
      "Documentation verification and management",
      "Weight slip inspection and validation",
      "Quality control during transportation"
    ]
  },
  {
    id: 3,
    title: "Cargo Planning",
    description: "Processing and reporting cargo quality for effective cargo management.",
    icon: ClipboardData,
    color: "#990066",
    details: [
      "Quality assessment and reporting",
      "Efficient cargo processing planning",
      "Regular quality monitoring",
      "Detailed reporting system"
    ]
  },
  {
    id: 4,
    title: "Cargo Inspection",
    description: "Seal verification and quality inspection of cargo for safe transportation.",
    icon: Search,
    color: "#663300",
    details: [
      "Seal verification and validation",
      "Quality inspection protocols",
      "Safety compliance checks",
      "Documentation verification"
    ]
  },
  {
    id: 5,
    title: "Cargo Management",
    description: "Expert management for the preservation and quality maintenance of cargo.",
    icon: Tools,
    color: "#996633",
    details: [
      "Quality preservation techniques",
      "Regular maintenance checks",
      "Storage condition monitoring",
      "Quality control measures"
    ]
  },
  {
    id: 6,
    title: "Cargo Repacking",
    description: "Professional repacking of bulk and loose goods for safe storage and transportation.",
    icon: Box,
    color: "#009933",
    details: [
      "Bulk goods repacking",
      "Loose goods consolidation",
      "Safe packaging solutions",
      "Quality preservation during repacking"
    ]
  },
  {
    id: 7,
    title: "Supervised Cargo Management",
    description: "Cargo management under best and experienced supervisors for optimal results.",
    icon: ListTask,
    color: "#6600cc",
    details: [
      "Expert supervision of cargo operations",
      "Quality control by experienced professionals",
      "Efficient management practices",
      "Optimal resource utilization"
    ]
  },
  {
    id: 8,
    title: "Pest Control",
    description: "Pest control services to ensure the safety of goods from pests and insects.",
    icon: Bug,
    color: "#cc3300",
    details: [
      "Regular pest inspection and control",
      "Preventive measures against infestation",
      "Safe and effective pest management solutions"
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === parseInt(id));
  const IconComponent = service?.icon;

  if (!service) {
    return (
      <Container className="py-5">
        <h2>Service not found</h2>
      </Container>
    );
  }

  return (
    <section className="page-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div 
                className="icon-box rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                style={{ 
                  backgroundColor: `${service.color}20`, 
                  width: '100px', 
                  height: '100px' 
                }}
              >
                <IconComponent size={48} color={service.color} />
              </div>
              <h2 className="display-5 fw-bold mb-4">{service.title}</h2>
              <div className="divider bg-primary mx-auto mb-4" style={{ height: '4px', width: '70px' }}></div>
              <p className="lead mb-5">{service.description}</p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Service Details</h3>
                  <ul className="list-unstyled">
                    {service.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="mb-3 d-flex align-items-start"
                      >
                        <div 
                          className="me-3 mt-1"
                          style={{ 
                            color: service.color,
                            minWidth: '24px'
                          }}
                        >
                          <IconComponent size={20} />
                        </div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceDetail;