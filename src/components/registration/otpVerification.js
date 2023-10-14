import React, { useState } from "react";
import { Link } from "react-router-dom";
import './registration.css';

const OtpVerification = ({mobileNumber,setShowProgressBar,setShowArrow,setAddLink}) => {
    setShowProgressBar(true)
    setShowArrow(true)
    setAddLink('/loanrequired')
    const OTP="123456"
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [isOtpCorrect, setIsOtpCorrect] = useState(false)
    const [message, setMessage] = useState('')
    const handleOtpChange = (e, index) => {
        const updatedOtp = [...otp]
        updatedOtp[index] = e.target.value;
        setOtp(updatedOtp);
        if(updatedOtp.join('')===OTP){
            setIsOtpCorrect(true)
            setMessage('')
        }
        else{
            setIsOtpCorrect(false)
            setMessage('Please Enter Correct OTP')
        }
    }

    return (
        <>
        <div className="registration-start">Verification</div>
        <div className="padding-top-5">Your mobile no: {mobileNumber}</div>
      <form >
      <div className="padding-top-15">
       <label className=" loan-amount-label">Enter the OTP sent to your mobile no.</label>
        <div className="register-page3-input">
            {otp.map((digit,index)=>(
                <input
                className="input-styles"
                type="text"
                key={index}
                value={digit}
                maxLength={1}
                onChange={(e)=>handleOtpChange(e,index)}
                 />
            ))}
        </div>
        <div className="error-message">{message}</div>
       </div>
        <div className="padding-top-15 text-align loan-amount-label">
            Resend OTP in ({0.59})
        </div>
        <div className="padding-top-15">
        <Link to={isOtpCorrect ? "/panverification" :''}><button disabled={!isOtpCorrect} type="submit" className="next-button">Verify OTP</button></Link>
        </div>
      </form>
        </>
    )
}
export default OtpVerification;