import googleIcon from '../assets/GoogleLogo.svg';
import mandalaIcon from '../assets/Mandala.svg';
import blobIcon from '../assets/blobIcon.svg';
import './LandingPage.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const LandingPage = () => {
    const navigate = useNavigate()

    const handleGoogle = () => {
        navigate('/dashboard')
    }

    return (
        <main className="signin-container">
            <Navbar />
            <section className="main-content">
                <div className='aura-blob'>
                    <img src={blobIcon} alt="alt" />
                </div>
                <article className='content-box'>
                    <h2 className='headline'>
                         Unlock the transformative
                        wisdom into Positive AURA 
                        Astrology offers for your journey.
                    </h2>
                    <p className='headline-subtext'>Let's start by signing in</p>
                    <button className='google-button' onClick={handleGoogle}>
                        <img src={googleIcon} alt="alt" />
                        Continue with Google
                    </button>
                </article>
                 <img  src={mandalaIcon} alt="alt"  className='mandalalogo'/>
            </section>
           <Footer />
        </main>
    )
}
export default LandingPage;