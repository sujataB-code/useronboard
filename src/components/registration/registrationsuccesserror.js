import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './registration.css';

const RegistrationSuccessError = ({loanAmount, setShowProgressBar,setShowArrow}) => {
    setShowProgressBar(false)
    setShowArrow(false)
    const [isSuccess, setIsSuccess] = useState('');
    useEffect(()=>{
        loanAmount>20000 ? setIsSuccess(false) : setIsSuccess(true)
    },[loanAmount])
    return (
        <>
            <div className="registration-success-main">
                <div className="registration-success text-align">
                    <div>
                        <div className="registration-start"> {isSuccess ? "Congrulations!" : 'We are Sorry!'} </div>
                        <div className="padding-top-15">{isSuccess ? "You have been approved a Total Credit Limit of" :
                            `At this time, we're unable to approve yuor request based on the criteria we have in place `}</div>
                        <div className="registration-start padding-top-5">{isSuccess ?  JSON.stringify(loanAmount) : ''}</div></div>
                </div>
            </div>
            <div className="registration-success-main">
                {
                    isSuccess ? <Link to="/"><button className="next-button button-width">
                        Download Aspire App
                    </button></Link> : <Link to="/"><button className="next-button button-width">
                        Chat with us on WhatsApp
                    </button></Link>
                }

            </div>
        </>
    )
}
export default RegistrationSuccessError;