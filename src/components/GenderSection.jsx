
import './GenderSection.css'

const GenderSection = () => {
    
    return (
        <div className="genderSection">
            <h2>Select your Gender</h2>
            <div className="genderButtons">
                <button className="btn">Male</button>
                <button className="btn" >Female</button>
                <button className="btn" >Others</button>
            </div>
        </div>
    )
}
export default GenderSection;