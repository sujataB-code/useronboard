import React, { useState } from "react";
import './registration.css'
import { useNavigate } from "react-router-dom";

const Registration = ({ setMobileNumber, setPercentage, setShowProgressBar }) => {
    const [mobile, setMobile] = useState('')
    setMobileNumber(mobile)
    setPercentage(0)
    setShowProgressBar(true)
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/loanrequired")
    }
  
    return (
        <>
            <div className="registration-start">
                Let's get started
            </div>
            <div className="registration-details padding-top-15">
                <form onSubmit={handleSubmit}>
                    <label>Enter Your Mobile Number</label>
                    <input
                    className="input-styles"
                        type="tel"
                        maxLength={10}
                        minLength={10}
                        value={mobile}
                        onChange={(e) =>  setMobile(e.target.value)}
                        required
                    />
                    <div className="padding-top-15"><button type="submit" className="next-button">Next</button>
                    </div>
                </form>
            </div>

        </>
    );
}
export default Registration;