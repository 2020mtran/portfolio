import React from 'react';
import "./OutriderAmberHeader.css";
import OutriderAmber from '../assets/OutriderAmber.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';
import firebaseIcon from '../assets/firebase-svgrepo-com.svg';
import expoGoIcon from '../assets/expo-go-app.svg';

const OutriderAmberHeader = () => {
    return (
        <div className="oa-project-page-header">
            <img src={OutriderAmber} alt="Icon of my app, OutriderAmber" />
            <div className="oa-project-page-header-info">
                <p className='oa-project-title'>OutriderAmber</p>
                <div className="roles-list">
                    <div className="project-role">
                        <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                        <p>Python</p>
                    </div>
                    <div className="project-role">
                        <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>Discord API</p>
                    </div>
                    <div className="project-role">
                        <FontAwesomeIcon icon={faAws} style={{color: "#086fac",}} className="react-icon"/>
                        <p>AWS Cloud Services</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutriderAmberHeader;