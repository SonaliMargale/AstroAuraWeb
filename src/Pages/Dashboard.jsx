import Footer from '../components/Footer';
import GenderSection from '../components/GenderSection';
import Navbar from '../components/Navbar';
import './Dashboard.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Calendar from '../components/Calendar';
import TimePicker from '../components/TimePicker';
import { useNavigate } from 'react-router-dom';
import { useState,useRef } from 'react';
import backlogo from '../assets/backlogo.svg';
import prevArrow from '../assets/prevarrow.svg'
import nextarrow from '../assets/nextarrow.svg';
import mandalaIcon from '../assets/Mandala.svg';
import atom from '../assets/atom.svg'
import card from '../assets/Card.svg'
import heartIcon from '../assets/HeartIcon.svg';
import gift from '../assets/gift.png'
import BagIcon from '../assets/BagIcon.svg';
import BudhaIcon from '../assets/BuddhaIcon.svg';
import wheel from '../assets/wheelIcon.svg'




const Dashboard = () => {

  const navigate = useNavigate()
  const sliderRef = useRef(null)
  const[currentSlide, setCurrentSlide] = useState(0)

  const gotoLanding = () => {
    navigate('/')
  }

  const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className='prevArrow' onClick={onClick}>
      <img src={prevArrow} alt="alt" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;

  const handleClick = () => {
    if(currentSlide === 2){
      navigate('/birth-location')
    } else {
      onClick()
    }
  }
  return (
    <button className='nextArrow' onClick={handleClick}>
      <img src={nextarrow} alt="alt" />
    </button>
  );
};

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (
        <main>
            <Navbar />
            <div onClick={gotoLanding} >
              <img src={backlogo} alt="alt" className='backlogo'/>
            </div>
            <section className='container'>
                <h1 className='userline'>Hey vikram,</h1>
                <p>know about your love. Education.
                    Health. Career. and much more.
                </p>
            </section>
            <div className='combine-wrapper'>
              <div className="carousel-container">
                <Slider {...settings} ref={sliderRef}>
                    <div className="carousel-slide"><GenderSection /></div>
                    <div className="carousel-slide"><Calendar /></div>
                    <div className="carousel-slide"><TimePicker /></div>
                </Slider>
            </div>
              <div className='image-Bounce'>
              <div className="floating-item">
                  <img src={atom} alt="alt" className='halfAtom' />
                   <div className="shadow"></div>
              </div>
              <div className="floating-item">
                 <img src={card} alt="alt" className='card' />
                   <div className="shadow"></div>
              </div>
              <div className="floating-item">
                  <img src={heartIcon} alt="alt" className='heartIcon' />
                <div className="shadow"></div>
              </div>
              <div className="floating-item">
                   <img src={gift} alt="gift" className='gift'/>
                <div className="shadow"></div>
              </div>
               <div className="floating-item">
                  <img src={atom} alt="alt" className='atom' />
                   <div className="shadow"></div>
              </div>
              <div className="floating-item">
                   <img src={BagIcon} alt="alt" className='BagIcon' />
                <div className="shadow"></div>
              </div>
                <div className="floating-item">
                 <img src={BudhaIcon} alt="alt" className='BudhaIcon' />
                <div className="shadow"></div>
              </div>
                <div className="floating-item">
                  <img src={wheel} alt="alt" className='wheel' />
                <div className="shadow"></div>
              </div>
            </div>
            </div>
            
           
            <div>
              <img src={mandalaIcon} alt="alt" className='mandala' />
            </div>
           <div className='dashboard-footer'>
                <Footer />
           </div>

           
        </main>
    )
}
export default Dashboard