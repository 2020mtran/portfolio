import React from 'react';
import './Roles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';
import firebaseIcon from '../assets/firebase-svgrepo-com.svg';

const Roles = ({ children }) => {
    return (
        <div className="roles">
            <p>Roles</p>
            <div className="roles-list">
                <div className="role1">
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
                    <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                    <p>Python</p>
                </div>
                <div className="role1">
                    <FontAwesomeIcon icon={faTerminal} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>C++</p>
                </div>
                <div className="role1">
                    <img src={mongodbIcon} alt="MongoDB Icon" className="react-icon" />
                    <p>mongoDB</p>
                </div>
                <div className="role1">
                    <img src={firebaseIcon} alt="MongoDB Icon" className="react-icon" />
                    <p>Firebase</p>
                </div>
                <div className="role1">
                    <FontAwesomeIcon icon={faDownload} style={{color: "#086fac",}} className="react-icon"/>
                    <p>API Integration</p>
                </div>
                <div className="role1">
                    <FontAwesomeIcon icon={faAws} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>AWS Cloud Services</p>
                </div>
            </div>
        </div>
    );
};

export default Roles;