import React from 'react';
import ProfileImage from "../assets/me.webp";
import "./ProfilePicture.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProfilePicture = () => {
    return (
        <div className="profile-picture">
            <div className="profile-picture-background">
                <img src={ProfileImage} alt="Profile Picture"></img>
                <span className='online-icon'></span>
            </div>
            <Link to="./pages/ContactMePage" className='contact-me-container'>
                <button className='contact-me-button'>
                    <FontAwesomeIcon icon={faEnvelope} className='contact-me-icon'></FontAwesomeIcon>
                    <p>Contact Me!</p>
                </button>
            </Link>
        </div>
    )
}

export default ProfilePicture;