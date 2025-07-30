
import { useState } from 'react';
import './GenderSection.css'

const GenderSection = () => {
    const[gender,setGender]=useState('');
    return (
        <div className="genderSection">
            <h2>Select your Gender</h2>
            <div className="genderButtons">
                <button className="btn" onClick={setGender('male')}>Male</button>
                <button className="btn"  onClick={setGender('female')}>Female</button>
                <button className="btn" onClick={setGender('others')} >Others</button>
            </div>
        </div>
    )
}
export default GenderSection;