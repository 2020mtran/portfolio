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
                    <span className='red-circle'></span>
                    <FontAwesomeIcon icon={faReact} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>React</p>
                </div>
                <div className="role1">
                    <span className='blue-circle'></span>
                    <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>JavaScript</p>
                </div>
                <div className="role1">
                    <span className='yellow-circle'></span>
                    <FontAwesomeIcon icon={faCss3Alt} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>CSS</p>
                </div>
                <div className="role1">
                    <span className='red-circle'></span>
                    <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>HTML</p>
                </div>
                <div className="role1">
                    <span className='blue-circle'></span>
                    <FontAwesomeIcon icon={faPython} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>Python</p>
                </div>
                <div className="role1">
                    <span className='yellow-circle'></span>
                    <FontAwesomeIcon icon={faTerminal} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>C++</p>
                </div>
                <div className="role1">
                    <span className='red-circle'></span>
                    <img src={mongodbIcon} alt="MongoDB Icon" className="react-icon" />
                    <p>mongoDB</p>
                </div>
                <div className="role1">
                    <span className='blue-circle'></span>
                    <img src={firebaseIcon} alt="MongoDB Icon" className="react-icon" />
                    <p>Firebase</p>
                </div>
                <div className="role1">
                    <span className='yellow-circle'></span>
                    <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>API Integration</p>
                </div>
                <div className="role1">
                    <span className='red-circle'></span>
                    <FontAwesomeIcon icon={faAws} style={{color: "#FFD43B",}} className="react-icon"/>
                    <p>AWS Cloud Services</p>
                </div>
            </div>
        </div>
    );
};

export default Roles;