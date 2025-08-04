import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BirthLocation from '../components/BirthLocation';
import './BirthLocationPage.css'


const BirthLocationPage = () => {
  return (
    <main className="birth-location-page">
      <Navbar />
      <div className='birth-location-wrapper'>
         <BirthLocation />
        </div>
     <div className='Birthfooter'>
          <Footer />
     </div>
    
    </main>
  );
};

export default BirthLocationPage;