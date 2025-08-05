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
            <div onClick={gotoLanding} style={{ cursor: 'pointer', fontSize: '24px' }}>
              <img src={backlogo} alt="alt" />
            </div>
            <section className='container'>
                <h1 className='userline'>Hey vikram,</h1>
                <p>know about your love. Education.
                    Health. Career. and much more.
                </p>
            </section>
            <div className="carousel-container">
                <Slider {...settings} ref={sliderRef}>
                    <div className="carousel-slide"><GenderSection /></div>
                    <div className="carousel-slide"><Calendar /></div>
                    <div className="carousel-slide"><TimePicker /></div>
                </Slider>
            </div>
            <div>
              <img src={mandalaIcon} alt="alt" className='mandala' />
            </div>
           

            <Footer />
        </main>
    )
}
export default Dashboard