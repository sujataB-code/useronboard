import React, { useState } from "react";
import './registration.css';
import { Link, useNavigate } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const LoanRequired = ({ mobileNumber, setLoanAmount, setShowProgressBar, setShowArrow, setAddLink }) => {
    const [loanRequired, setLoanRequired] = useState('')
    setLoanAmount(loanRequired)
    setShowProgressBar(true)
    setShowArrow(true)
    setAddLink("/")
    const navigate = useNavigate('')
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/otpverification")
    }
    return (
        <>
            <div className="registration-start">
                Tell us Your requirement
            </div>
            <div>
                Your Mobile no: {mobileNumber}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="registration-details">
                    <label className="loan-amount-label">Loan amount required</label>
                    <input
                        type="number"
                        className="input-styles"
                        placeholder="Enter the amount you need foreg 10,000"
                        value={loanRequired}
                        onChange={(e) => setLoanRequired(e.target.value)}
                        required />
                </div>
                <div className="registration-details ">
                    <label >Enter Promo Code {" "}(if you have any) ?</label>
                    <input type="text" className="input-styles" />
                </div>
                <div className="display-flex padding-top-5">
                    <input type="checkbox" />
                    <div className="padding-left-5">
                        I agree with
                        <Link className="padding-left-5">
                            Terms & Condition</Link>
                        {" "}and{" "}
                        <Link className="padding-left-5">
                            PrivacyPolicy
                        </Link>
                    </div>
                </div>
                <div className="display-flex padding-top-5">
                    <input type="checkbox" />
                    <div className="padding-left-5 display-flex-center">Whatsapp Consent <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', marginLeft: '7px', borderRadius: '50%' }} /></div>
                </div>
                <div className="display-flex padding-top-5">
                    <input type="checkbox" />
                    <div className="padding-left-5">I hereby, consent to Aspire being appointed as your authorised representative to receive your credit information from Experian CRIF for the purpose of Credit Facility Assessment("End Use Purpose")</div>
                </div>
                <div className="padding-top-15"><button type="submit" className="next-button">Get OTP</button></div>
            </form>
        </>
    );
}
export default LoanRequired;