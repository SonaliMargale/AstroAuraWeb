import Footer from '../components/Footer';
import GenderSection from '../components/GenderSection';
import Navbar from '../components/Navbar';
import './Dashboard.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FiArrowLeft,FiArrowRight } from 'react-icons/fi';
import Calendar from '../components/Calendar';
import TimePicker from '../components/TimePicker';
import { useNavigate } from 'react-router-dom';
import BirthLocation from '../BirthLocation';


const Dashboard = () => {

  const navigate = useNavigate()

  const gotoLanding = () => {
    navigate('/')
  }

  const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <FiArrowLeft size={24} />
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <FiArrowRight size={24} />
    </button>
  );
};

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (
        <main>
            <Navbar />
            <div onClick={gotoLanding} style={{ cursor: 'pointer', fontSize: '24px' }}>⬅️</div>
            <section className='container'>
                <h1 className='userline'>Hey vikram,</h1>
                <p>know about your love. Education.
                    Health. Career. and much more.
                </p>
            </section>
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="carousel-slide"><GenderSection /></div>
                    <div className="carousel-slide"><Calendar /></div>
                    <div className="carousel-slide"><TimePicker /></div>
                    <div className="carousel-slide"><BirthLocation/></div>

                </Slider>
            </div>

            <Footer />
        </main>
    )
}
export default Dashboard