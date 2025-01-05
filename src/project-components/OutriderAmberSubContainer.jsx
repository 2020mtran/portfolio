import React from 'react';
import "./OutriderAmberSubContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OutriderAmberSubContainer = ({ children }) => {
    return (
        <div className="oa-sub-container">
            <Link to="/" className='oa-back-icon-container'>
                <FontAwesomeIcon icon={faCircleLeft} className='oa-back-icon'/>
            </Link>
            {children}
        </div>
    )
}

export default OutriderAmberSubContainer;