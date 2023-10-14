import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './registration.css';

const OccupationDetails = ({setOccupationDetails,setPercentage,setShowProgressBar,setShowArrow,setAddLink}) => {
    setPercentage(50)
    setShowProgressBar(true)
    setShowArrow=(true)
    setAddLink('/panverification')
    const [occupation, setOccupation] = useState('')
    const navigate=useNavigate()
    const handleChangeOccupatipn = (occupationM) => {
        setOccupation(occupationM)
        navigate("/documentverification")
        setOccupationDetails(occupationM)
    }
    return (
        <>
            <div className="registration-start">Tell us about your occupation</div>
          <div className="padding-top-15">
          <button className={occupation==='businessOwner' ? 'selected-occupation':'notselected-occupation'} onClick={()=>handleChangeOccupatipn('businessOwner')}>
                Business Owner
            </button>
            <button className={occupation==='Salaried' ? 'selected-occupation':'notselected-occupation'} onClick={()=>handleChangeOccupatipn('Salaried')}>
                Salaried
            </button>
            <button className={occupation==='Self-employed' ? 'selected-occupation':'notselected-occupation'} onClick={()=>handleChangeOccupatipn('Self-employed')}>
                Self-employed
            </button>
            <button className={occupation==='Student' ? 'selected-occupation':'notselected-occupation'} onClick={()=>handleChangeOccupatipn('Student')}>
                Student
            </button>
          </div>
        </>
    )
}
export default OccupationDetails;