import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import './registration.css';

const PersonalInformation = ({setPercentage, setShowProgressBar,setShowArrow,setAddLink}) => {
    setShowArrow(true)
    setAddLink('/documentverification')
    setShowProgressBar(true)
    const [pincode, setPincode] = useState('')
    const [isPincodeValid, setIsPincodeValid] = useState(false)
    const [address, setAddress] = useState('')
    setPercentage(isPincodeValid?100:75)
    const handleChangepincode = (e) => {
        const newPinCode = e.target.value;
        setPincode(newPinCode)
        setIsPincodeValid(newPinCode === '123456')
    }
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(isPincodeValid?"/registrationpage8":'')
    }
    return (
        <>
            <div className="registration-start">Personal Information</div>
            <form onSubmit={handleSubmit}>
            <div className="padding-top-15">
                <label>Email ID</label>
                <input
                    className="document-detail input-styles"
                    type="email"
                    placeholder="Enter your Email"
                />
            </div>
            <div className="padding-top-15">
                <label>Adress</label>
                <input
                    className="document-detail "
                    type="text"
                    value={pincode}
                    placeholder="Pincode"
                    onChange={(e) => handleChangepincode(e)}
                />
                 {
                isPincodeValid && <div className="display-flex-center">
                    <DoneIcon sx={{color:'green'}} /> <div className="loan-amount-label">New Delhi</div>
                </div>
            }
              <div  className=" padding-top-15">
              <input
                    className="document-detail"
                    type="text"
                    value={isPincodeValid ? address : ''}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Flat/House/Apartment"
                    disabled={!isPincodeValid}
                />
              </div>
            </div>
            <div className="padding-top-15">
                <button type="submit" disabled={!isPincodeValid} className={isPincodeValid ? "next-button" : "next-button disabled-next"}>Next</button>
            </div>
            </form>
        </>
    )
}
export default PersonalInformation;