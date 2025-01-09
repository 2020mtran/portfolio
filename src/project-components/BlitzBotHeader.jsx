import React from 'react';
import "./BlitzBotHeader.css";
import BlitzBot from '../assets/BlitzBotIcon.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';

const BlitzBotHeader = () => {
    return (
        <div className="bb-project-page-header">
            <img src={BlitzBot} alt="Icon of my app, BlitzBot" />
            <div className="bb-project-page-header-info">
                <p className='bb-project-title'>BlitzBot
                    <a
                        href="https://github.com/2020mtran/blitz_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='bb-github-button'>
                            <FontAwesomeIcon icon={faGithub} className='bb-github-icon'></FontAwesomeIcon>
                    </a>
                </p>
                <div className="roles-list">
                    <div className="project-role">
                        <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                        <p>Python</p>
                    </div>
                    <div className="project-role">
                        <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>Discord & Riot Games API</p>
                    </div>
                    <div className="project-role">
                        <img src={mongodbIcon} alt="MongoDB Icon" className="react-icon" />
                        <p>mongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlitzBotHeader;