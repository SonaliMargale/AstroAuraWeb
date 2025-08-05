import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BirthLocation from '../components/BirthLocation';
import './BirthLocationPage.css'
import mandalaIcon from '../assets/Mandala.svg'


const BirthLocationPage = () => {
  return (
    <main className="birth-location-page">
      <Navbar />
      <div className='birth-location-wrapper'>
         <BirthLocation />
        </div>
         <img  src={mandalaIcon} alt="alt"  className='mandalalogo'/>
     <div className='Birthfooter'>
          <Footer />
     </div>
    
    </main>
  );
};

export default BirthLocationPage;