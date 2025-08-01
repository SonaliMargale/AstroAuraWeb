import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import './BirthLocation.css'

const BirthLocation = () => {
    const [location, setLocation] = useState('')

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    return (
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

            />
        </div>
    )
}
export default BirthLocation;