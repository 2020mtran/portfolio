import React from 'react';
import ProfileImage from "../assets/me.jpg";
import "./ProfilePicture.css";

const ProfilePicture = () => {
    return (
        <div className="profile-picture">
            <div className="profile-picture-background">
                <img src={ProfileImage} alt="Profile Picture"></img>
                <span className='online-icon'></span>
            </div>
        </div>
    )
}

export default ProfilePicture;