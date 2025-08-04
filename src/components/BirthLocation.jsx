import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import './BirthLocation.css'
import { useNavigate } from "react-router-dom";

const BirthLocation = () => {
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

      const handleKeyDown = (e) => {
         if(e.key === 'Enter' && location.trim() !== ''){
            navigate('/loading')
         }
      }
    return (
        <div className="main-Search-Container">
        <div className="Search-Container">
            <div className="icon">
                 <FiSearch className="search-icon" />
            </div>
           
            <input
                className="search-input"
                type="text"
                placeholder="Enter Your Birth Location"
                value={location}
                onChange={handleChange}
                onKeyDown={handleKeyDown}

            />
        </div>
        </div>
    )
}
export default BirthLocation;