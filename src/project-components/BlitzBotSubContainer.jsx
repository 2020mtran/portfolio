import React from 'react';
import "./BlitzBotSubContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BlitzBotSubContainer = ({ children }) => {
    return (
        <div className="bb-sub-container">
            <Link to="/" className='bb-back-icon-container'>
                <FontAwesomeIcon icon={faCircleLeft} className='bb-back-icon'/>
            </Link>
            {children}
        </div>
    )
}

export default BlitzBotSubContainer;