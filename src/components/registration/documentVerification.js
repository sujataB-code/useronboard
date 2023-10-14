import React, { useState } from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from "react-router-dom";
import './registration.css';

const DocumentVerification = ({occupationDetail,setShowProgressBar,setShowArrow,setAddLink}) => {
    setShowProgressBar(true)
    setShowArrow(true)
    setAddLink('/occupationdetails')
    const [documentType, setDocumentType] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const handleDocuments = (document) => {
        setDocumentType(document)
        setSelectedValue(document)
    }
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/personalinformation")
    }
    return (
        <>
            <div className="registration-start">{occupationDetail} document type<QuestionMarkIcon /> </div>
            <div className="padding-top-15">Select a business document type</div>

            {
                documentType ?
                   <form onSubmit={handleSubmit}>
                        <select className="document-select" defaultValue={selectedValue}>
                        <option className="document-select-option"> 
                             <div className="display-flex-center" value={"aadhar"}>Udyam Aadhar
                            <div className="aadhar-approval">5-min-approval</div>
                        </div>
                        </option >
                        <option value={"gstcert"}>GST Certificate</option>
                        <option value={"fssai"}>FSSAI</option>
                        <option value={"other"}>Other (if your business is not listed above)</option>
                        </select>
                        <div className="padding-top-15">
                            <label>
                                Enter {" "}
                                {
                                 documentType ==='aadhar' ||  selectedValue==='aadhar' ? 'Udyam Aadhar' :
                                 documentType ==='gstcert' ||    selectedValue==='gstcert' ? 'GST Certificate' :
                                 documentType ==='fssai' || selectedValue==='fssai' ? 
                                    'FSSAI' : 'Other'
                                }
                                 {" "}
                                no.
                                </label>
                            <input className="document-detail input-styles"  type="text" required/>
                        </div>
                        <div  className="padding-top-15">
                        <button type="submit" className="next-button">Next</button>
                        </div>
                   </form>
                    :
                    <div className="register-business-document-type">
                        <div
                            className={`business-document-button`}
                            onClick={() => handleDocuments('aadhar')}
                        >
                            <div className="display-flex-center">Udyam Aadhar
                                <div className="aadhar-approval">5-min-approval</div></div>
                        </div>
                        <div
                            className={`business-document-button`}
                            onClick={() => handleDocuments('gstcert')}>GST Certificate</div>
                        <div
                            className={`business-document-button`}
                            onClick={() => handleDocuments('fssai')}
                        >FSSAI </div>
                        <div
                            className={`business-document-button`}
                            onClick={() => handleDocuments('other')}
                        >Other (if your business is not listed above)</div>
                    </div>
            }
        </>
    )
}
export default DocumentVerification;