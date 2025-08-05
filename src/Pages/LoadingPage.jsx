import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LoadingPage.css';
import foot from '../assets/foot.png'
const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API Call / AI Chart Generation Delay
    const timer = setTimeout(() => {
      navigate('/chatbot');  
    }, 3000);  // 3 seconds loading

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main>
      <Navbar />
      <div className="loading-container">
        <div className="mandala-animation">
        </div>
        <div className="loading">
          <p className='loading-msg'>Sit Back While Aura AI generate your Birth Chart</p>
         <img src={foot} alt="alt" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LoadingPage;
