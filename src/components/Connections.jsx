import React from 'react';
import './Connections.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import verifiedIcon from "../assets/verified-svgrepo-com.svg";

const Connections = () => {
    return (
        <div className="connections">
            <p className="connections-title">Connections</p>
            <div className="connections-list">
                <a href="https://github.com/2020mtran" target="_blank" rel="noopener norefferer" className="connections-button">
                    <FontAwesomeIcon icon={faGithub} className="connections-icon"/>
                    <p>GitHub</p>
                    <img src={verifiedIcon} alt="Verified Icon" className="verified-icon" />
                    <FontAwesomeIcon icon={faLink} className="link-icon" style={{color: "rgba(255, 255, 255, 0.508)",}}/>
                </a>
                <a href="https://www.linkedin.com/in/2020mtran" target="_blank" rel="noopener norefferer" className="connections-button">
                    <FontAwesomeIcon icon={faLinkedin} className="connections-icon"/>
                    <p>Linkedin</p>
                    <img src={verifiedIcon} alt="Verified Icon" className="verified-icon" />
                    <FontAwesomeIcon icon={faLink} className="link-icon" style={{color: "rgba(255, 255, 255, 0.508)",}}/>
                </a>
            </div>
        </div>
    );
};

export default Connections;