import googleIcon from '../assets/googleIcon.png';
import mandalaIcon from '../assets/mandalaIcon.png';
import blobIcon from '../assets/blobIcon.png';
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
                        continue with Google
                    </button>
                </article>
                 <img  src={mandalaIcon} alt="alt"  className='mandalalogo'/>
            </section>
           <Footer />
        </main>
    )
}
export default LandingPage;