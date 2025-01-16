import React from 'react';
import "./ContactMeSubContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ContactMeSubContainer = ({ children }) => {
    return (
        <div className="cm-sub-container">
            <Link to="/" className='cm-back-icon-container'>
                <FontAwesomeIcon icon={faCircleLeft} className='cm-back-icon'/>
            </Link>
            {children}
        </div>
    )
}

export default ContactMeSubContainer;