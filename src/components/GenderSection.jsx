
// import './GenderSection.css'

// const GenderSection = () => {
    
//     return (
//         <div className="genderSection">
//             <h2>Select your Gender</h2>
//             <div className="genderButtons">
//                 <button className="btn">Male</button>
//                 <button className="btn" >Female</button>
//                 <button className="btn" >Others</button>
//             </div>
//         </div>
//     )
// }
// export default GenderSection;

import { useState } from 'react';
import './GenderSection.css';

const GenderSection = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleSelectGender = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <div className="genderSection">
            <h2>Select your Gender</h2>
            <div className="genderButtons">
                <button
                    className={`btn ${selectedGender === 'Male' ? 'selected' : ''}`}
                    onClick={() => handleSelectGender('Male')}
                >
                    Male
                </button>
                <button
                    className={`btn ${selectedGender === 'Female' ? 'selected' : ''}`}
                    onClick={() => handleSelectGender('Female')}
                >
                    Female
                </button>
                <button
                    className={`btn ${selectedGender === 'Others' ? 'selected' : ''}`}
                    onClick={() => handleSelectGender('Others')}
                >
                    Others
                </button>
            </div>
        </div>
    );
};

export default GenderSection;
