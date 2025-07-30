import Footer from '../components/Footer';
import GenderSection from '../components/GenderSection';
import Navbar from '../components/Navbar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <main>
           <Navbar />
            <section className='container'>
                <h1>hey vikram</h1>
                <p>know about your love. Education.
                    Health. Career. and much more.
                </p>
            </section>
            <GenderSection />
            
            <Footer />
        </main>
    )
}
export default Dashboard