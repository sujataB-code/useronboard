import React from "react";
import './progressbar.css'

const style = {
    backgroundColor: '#f5be43',
    transition: '0.5s'
}
const ProgressBar = ({ percentage }) => {
    return (
        <>
            <div className="progress-container"
            >
                <div className="circle"
                    style={percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>
                    <div className="insidecircle"
                        style={percentage === 0 || percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>
                    </div>
                </div>
                <div className="line" style={percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>
                </div>
                <div className="circle" style={percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>
                    <div className="insidecircle"
                        style={percentage === 0 || percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>

                    </div>
                </div>
                <div className="line" style={percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}></div>
                <div className="circle" style={percentage === 75 || percentage === 100 ? style : {}}>
                    <div className="insidecircle"
                        style={percentage === 0 || percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>

                    </div>
                </div>
                <div className="line" style={percentage === 75 || percentage === 100 ? style : {}}></div>
                <div className="circle" style={percentage === 100 ? style : {}}>
                    <div className="insidecircle"
                        style={percentage === 0 || percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100 ? style : {}}>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProgressBar