import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png' ;

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close menu effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && !event.target.closest('.navbar')) {
        setExpanded(false);
        document.body.classList.remove('menu-open');
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  // Close menu on route change
  useEffect(() => {
    setExpanded(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  return (
    <Navbar
      expand="lg"
      variant="light"
      className={`fixed-top ${scrolled ? 'scrolled' : ''}`}
      collapseOnSelect
      expanded={expanded}
      onToggle={(expanded) => {
        setExpanded(expanded);
        if(expanded) document.body.classList.add('menu-open');
        else document.body.classList.remove('menu-open');
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center me-auto"
          onClick={() => setExpanded(false)}
        >
          <img
            src={logo}
            alt="Company Logo"
            height="40"
            className="d-inline-block align-middle me-2"
          />
          <span className="fw-bold text-dark">
            R.S Warehouse
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="border-0">
          <div className={`custom-toggler ${expanded ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/services', 'Services'],
              ['/contact', 'Contact'],
            ].map(([path, title]) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                active={location.pathname === path}
                onClick={() => {
                  setExpanded(false);
                  document.body.classList.remove('menu-open');
                }}
                className={`mx-1 nav-link-hover ${
                  location.pathname === path ? 'active-link' : ''
                }`}
              >
                {title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;