import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import ServicesSection from "./components/ServiceSection";
import ContactForm from "./components/ContactForm";
import AboutSection from "./components/aboutSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// Service Pages - Using ServiceDetail for all
import ServiceDetail from "./components/ServiceDetail";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <motion.div
        className="d-flex flex-column min-vh-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavigationBar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />

            <Route path="/services" element={<ServicesSection />} />

            <Route path="/services/:id" element={<ServiceDetail />} />

            {/* <Route path="/services/transportation" element={<TransportationService />} /> */}
            {/* <Route path="/services/warehousing" element={<WarehousingService />} /> */}
            {/* <Route path="/services/cargo-repacking" element={<CargoRepackingService />} /> */}
            {/* <Route path="/services/cargo-management" element={<CargoManagementService />} /> */}
            {/* <Route path="/services/pest-control" element={<PestControlService />} /> */}
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>

        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
