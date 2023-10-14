import React, { useState } from "react";
import './layout.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProgressBar from "./progressbar/progressbar";
import Registration from "./registration";
import LoanRequired from "./loanRequired";
import OtpVerification from "./otpVerification";
import PanVerification from "./panVerification";
import OccupationDetails from "./occupationDetails";
import DocumentVerification from "./documentVerification";
import PersonalInformation from "./personalInformation";
import RegistrationSuccessError from "./registrationsuccesserror";

const RegistrationLayout = () => {
    const [showArrow, setShowArrow] = useState(false)
    const [addLink, setAddLink] = useState('/')
    const [mobileNumber, setMobileNumber] = useState('')
    const [occupationDetail, setOccupationDetails] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [percentage, setPercentage] = useState(0)
    const [showProgressBar, setShowProgressBar] = useState(true)

    return (
        <>
            <BrowserRouter>
                <div className="registration-background">
                    <Grid container justifyContent="center">
                        <Grid item container justifyContent="center" xs={12} sm={9} md={9} lg={9}>
                            <div className="registration-content">
                                <Grid item container padding={3} justifyContent="center" alignItems="center">
                                    <Grid item xs={4.5} sm={4.5} md={5} lg={5}> {
                                        showArrow &&
                                        <Link to={addLink}><ArrowBackIcon /></Link>
                                    }</Grid>
                                    <Grid item xs={7.5} sm={7.5} md={6} lg={6}>
                                        <div className="aspire">
                                            Aspire
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item justifyContent="center" paddingBottom={3} container xs={10} sm={10} md={12} lg={12}>
                                    {
                                        showProgressBar &&
                                        <ProgressBar percentage={percentage} />
                                    } </Grid>
                                <Grid item container style={{ height: '550px' }} justifyContent="center">
                                    <Grid item xs={11} sm={11} md={5} lg={5}>
                                        <Routes>
                                            <Route path="/" element={<Registration setMobileNumber={setMobileNumber} setPercentage={setPercentage} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/loanrequired" element={<LoanRequired setShowArrow={setShowArrow} setAddLink={setAddLink} mobileNumber={mobileNumber} setLoanAmount={setLoanAmount} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/otpverification" element={<OtpVerification setShowArrow={setShowArrow} setAddLink={setAddLink} mobileNumber={mobileNumber} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/panverification" element={<PanVerification setShowArrow={setShowArrow} setAddLink={setAddLink} setPercentage={setPercentage} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/occupationdetails" element={<OccupationDetails setShowArrow={setShowArrow} setAddLink={setAddLink} setOccupationDetails={setOccupationDetails} setPercentage={setPercentage} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/documentverification" element={<DocumentVerification setShowArrow={setShowArrow} setAddLink={setAddLink} occupationDetail={occupationDetail} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/personalinformation" element={<PersonalInformation setShowArrow={setShowArrow} setAddLink={setAddLink} setPercentage={setPercentage} setShowProgressBar={setShowProgressBar} />} />
                                            <Route path="/registrationpage8" element={<RegistrationSuccessError setShowArrow={setShowArrow} loanAmount={loanAmount} setShowProgressBar={setShowProgressBar} />} />
                                        </Routes>
                                    </Grid>
                                </Grid>

                                <Grid item container padding={5} alignItems="end" xs={12} sm={12} md={12} lg={12}>
                                    <div>Ask for help? <Link className="ask-for-help">here</Link></div>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </BrowserRouter>
        </>
    );
}
export default RegistrationLayout;