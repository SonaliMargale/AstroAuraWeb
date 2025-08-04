import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LoadingPage.css';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API Call / AI Chart Generation Delay
    const timer = setTimeout(() => {
      navigate('/chatbot');  // Navigate to final dashboard/chatbot page
    }, 3000);  // 3 seconds loading

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main>
      <Navbar />
      <div className="loading-container">
        <div className="mandala-animation"></div>
        <p>Sit Back While Aura AI generate your Birth Chart</p>
        <div className="dots-loading">
          <span>.</span><span>.</span><span>.</span>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LoadingPage;
