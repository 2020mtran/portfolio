import React from 'react';
import "./FrontEndDevHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FrontEndDevHeader = () => {
    return (
        <div className="fed-project-page-header">
            <div className="fed-project-page-header-info">
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
            <Link to="/" className='fed-back-icon-container'>
                <FontAwesomeIcon icon={faCircleLeft} className='fed-back-icon'/>
            </Link>
        </div>
    )
}

export default FrontEndDevHeader;