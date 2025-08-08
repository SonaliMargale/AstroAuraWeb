import './ChatNavbar.css';
import { FaGlobe } from 'react-icons/fa';

const ChatNavbar = () => {
  return (
    <nav className="Chatnavbar">
      <div className="navbar-left">
        <span className="logo-text">AstroAura</span>
        <span className="ai-label">AURA AI</span>
      </div>
      <div className="navbar-center">
        <a href="#">Free Vedic Birth Chart</a>
        <a href="#">Pricing</a>
        <a href="#">How does it work?</a>
        <a href="#">More</a>
      </div>
      <div className="navbar-right">
        <button className="lang-icon"><FaGlobe /></button>
      </div>
    </nav>
  );
};

export default ChatNavbar;
