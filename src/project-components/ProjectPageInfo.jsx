import React from 'react';
import "./ProjectPageInfo.css";
import MentalMeFirstPreview from "../assets/MentalMeFirstPreview.png";

const ProjectPageInfo = ({ children }) => {
    return (
        <div className="project-page-info">
            <div className='left-info-right-image'>
                <div className='left-info'>
                    <p>Placeholder Info</p>
                </div>
                <div className='right-image'>
                    <img src={MentalMeFirstPreview} alt="Image of something"/>
                    <p>From Left to Right: Loading Page, Home Screen, Daily Tasks</p>
                </div>
            </div>
            <div className='right-info-left-image'></div>
        </div>
    )
}

export default ProjectPageInfo;