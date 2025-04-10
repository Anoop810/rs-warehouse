import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-removebg-preview.png';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it if you want to control loading state externally)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen position-fixed w-100 h-100 d-flex align-items-center justify-content-center" 
         style={{ 
           backgroundColor: 'white',
           zIndex: 9999,
           top: 0,
           left: 0
         }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-center"
      >
        <img
          src={logo}
          alt="Loading Logo"
          style={{ width: '150px', height: 'auto' }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen; 