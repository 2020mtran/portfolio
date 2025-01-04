import React from 'react';
import "./FrontEndDevHeader.css";
import FrontEndDev from '../assets/CombinationProjects.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';
import firebaseIcon from '../assets/firebase-svgrepo-com.svg';
import expoGoIcon from '../assets/expo-go-app.svg';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FrontEndDevHeader = () => {
    return (
        <div className="project-page-header">
            <div className="project-page-header-info">
                <p className='fed-project-title'>Front End <br />Development Projects</p>
                <div className="roles-list">
                    <div className="project-page-header-role">
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#086fac",}} className="react-icon"/>
                        <p>CSS</p>
                    </div>
                    <div className="project-page-header-role">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>HTML</p>
                    </div>
                </div>
            </div>
            <Link to="/" className='back-icon-container'>
                <FontAwesomeIcon icon={faCircleLeft} className='back-icon'/>
            </Link>
        </div>
    )
}

export default FrontEndDevHeader;