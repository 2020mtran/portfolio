import React from 'react';
import "./MentalMeHeader.css";
import MentalMe from '../assets/MentalMeIcon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';
import firebaseIcon from '../assets/firebase-svgrepo-com.svg';
import expoGoIcon from '../assets/expo-go-app.svg';

const MentalMeHeader = () => {
    return (
        <div className="project-page-header">
            <img src={MentalMe} alt="Icon of my app, MentalMe" />
            <div className="project-page-header-info">
                <p className='project-title'>MentalMe</p>
                <div className="roles-list">
                    <div className="project-page-header-role">
                        <FontAwesomeIcon icon={faReact} style={{color: "#086fac",}} className="react-icon"/>
                        <p>React</p>
                    </div>
                    <div className="role1">
                        <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="role1">
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#086fac",}} className="react-icon"/>
                        <p>CSS</p>
                    </div>
                    <div className="role1">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>HTML</p>
                    </div>
                    <div className="role1">
                        <img src={expoGoIcon} alt="ExpoGo Icon" className="react-icon" />
                        <p>Expo Go</p>
                    </div>
                    <div className="role1">
                        <img src={firebaseIcon} alt="MongoDB Icon" className="react-icon" />
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentalMeHeader;