import React from 'react';
import "./FrontEndDevInfo.css";
import FrontEndDevFirstPreview from "../assets/FrontEndDevFirstPreview.png";
import FrontEndDevSecondPreview from "../assets/FrontEndDevSecondPreview.png";
import FrontEndDevThirdPreview from "../assets/FrontEndDevThirdPreview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FrontEndDevInfo = () => {
    return (
        <div className="fed-project-page-info">
            <img src={FrontEndDevFirstPreview} alt="First preview image" className='fed-project-image'></img>
            <div className='fed-project-display-info'>
                <p className='fed-display-title'>Landing Page</p>
                <div className='icon-row'>
                    <a href="https://2020mtran.github.io/odin-landing/" target="_blank" rel="noopener norefferer" className='fed-button'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='out-icon'/>
                    </a>
                    <a href="https://github.com/2020mtran/odin-landing" target="_blank" rel="noopener norefferer" className='fed-button'>
                        <FontAwesomeIcon icon={faGithub} className="fed-github-icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FrontEndDevInfo;