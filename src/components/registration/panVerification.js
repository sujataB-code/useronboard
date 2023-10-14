import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import './registration.css';

const PanVerification = ({setPercentage,setShowProgressBar,setShowArrow,setAddLink}) => {
    setPercentage(25)
    setShowProgressBar(true)
    setShowArrow(true)
    setAddLink('/otpverification')
    const [panNumber, setPanNumber] = useState('')
    const [isCorrectPan, setIsCorrectPan] = useState(false);
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const handlePanChange = (e) => {
        const enteredPan = e.target.value
        setPanNumber(enteredPan)
        setIsCorrectPan(enteredPan === '123456')
    }
    const handleGender = (genderName) => {
        setGender(genderName)
    }
    return (
        <>
            <div className="registration-start">Create an account</div>
           <div className="registration-details ">
                <label>PAN</label>
                <input type="text" className="input-styles" value={panNumber} onChange={(e) => handlePanChange(e)} placeholder="Enter your PAN number" required />
            </div>
            {
                isCorrectPan && <div className="display-flex-center">
                    <DoneIcon sx={{color:'green'}} /> <div className="loan-amount-label">Aspire</div>
                </div>
            }
            <div className={!isCorrectPan ? 'disabled-style registration-details ' :'registration-details '}>
                <label >Date of birth</label>
                <input type="date" value={isCorrectPan ? date: ''} onChange={(e) => setDate(e.target.value)} disabled={!isCorrectPan} required />
            </div>
            <div className={!isCorrectPan ? 'disabled-style display-flex-center' :'display-flex-center'}>
                <div className="display-gender">Gender</div>
                <button disabled={!isCorrectPan} className={isCorrectPan && gender==='Male'?'selected-gender':'notselected-gender'} onClick={()=>handleGender(isCorrectPan ? 'Male' :'')}>Male</button>
                <button disabled={!isCorrectPan} className={ isCorrectPan && gender==='Female'?'selected-gender':'notselected-gender'} onClick={()=>handleGender(isCorrectPan ? 'Female' :'')}>Female</button>
                <button disabled={!isCorrectPan} className={isCorrectPan && gender==='Other'?'selected-gender':'notselected-gender'} onClick={()=>handleGender(isCorrectPan ? 'Other' :'')}>Other</button>
            </div>
            {
                isCorrectPan && <Link to={isCorrectPan ? "/occupationdetails" :'' }><button type="submit" className="next-button">Next</button></Link>
            }
        </>
    )
}
export default PanVerification;