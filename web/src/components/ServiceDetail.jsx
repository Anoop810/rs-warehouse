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
    description: "Arranging trained labor for warai cargo crossing, unloading/stacking bag stock, bulk repacking, and vehicle loading operations.",
    icon: People,
    color: "#336633",
    details: [
      "Arranging trained labor for warai cargo crossing",
      "Arranging trained labor for unloading and stacking bag stock in the warehouse",
      "Arranging special labor for bulk repacking cargo for loading and unloading purposes",
      "Arranging trained labor for loading cargo in vehicles"
    ]
  },
  {
    id: 2,
    title: "Cargo Vehicle Documentation",
    description: "Handling weight slips, supervision reports, delivery vehicle weight slips, and gate passes for cargo drivers.",
    icon: FileEarmark,
    color: "#333399",
    details: [
      "Handover inward container weight slip, supervision report, and delivery vehicle weight slip to the party representative",
      "Handover gate pass to cargo drivers"
    ]
  },
  {
    id: 3,
    title: "Cargo Planning & Reporting",
    description: "Daily work planning, client communication via WhatsApp/email, order processing, and damage reporting for efficient cargo management.",
    icon: ClipboardData,
    color: "#990066",
    details: [
      "Planning a day before for cargo work",
      "Sending product images through WhatsApp or emails",
      "Receiving delivery or unloading orders from clients",
      "Informing delivery parties to pick up consignments from the warehouse",
      "Unloading and processing warehousing stock in a clean and safe environment while optimizing space utilization",
      "Informing parties if cargo is damaged"
    ]
  },
  {
    id: 4,
    title: "Cargo Inspection",
    description: "Collecting challan and weight slips, conducting rough tally, verifying container numbers with BL copy and CHA challan, and checking seal numbers.",
    icon: Search,
    color: "#663300",
    details: [
      "Collecting challan and weight slip from container drivers",
      "Conducting a rough tally of cargo weight",
      "Checking container number with BL copy and CHA challan",
      "Cross-verifying cargo weight slip with BL copy, yard weight slip, and warehouse weight slip",
      "Checking seal number with CHA challan"
    ]
  },
  {
    id: 5,
    title: "Cargo Maintenance",
    description: "Regular cargo inspections every 15 days, maintaining cleanliness after dispatch, and scheduling fumigation after 28 days of stock holding.",
    icon: Tools,
    color: "#996633",
    details: [
      "Inspecting cargo every 15 days for quality purposes",
      "Maintaining cleanliness of stock after dispatching each vehicle",
      "Reporting clients for fumigation of lots after completing 28 days of stock holding",
      "Holding repeat inspections every 28 days until the lot is cleared"
    ]
  },
  {
    id: 6,
    title: "Cargo Repacking",
    description: "Repacking of loose goods to preserve & store for further processing and distribution",
    icon: Box,
    color: "#009933",
    details: [
      "Repacking of loose goods for preservation",
      "Storage preparation for further processing",
      "Distribution-ready packaging"
    ]
  },
  {
    id: 7,
    title: "Cargo Management",
    description: "Cargo management services to ensure the safe and efficient movement of goods.",
    icon: ListTask,
    color: "#6600cc",
    details: [
      "Safe and efficient movement of goods",
      "Inventory tracking and management",
      "Quality control and assurance"
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