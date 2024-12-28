import React from 'react';
import ProfileImage from "../assets/me.jpg";
import "./ProfilePicture.css";

const ProfilePicture = () => {
    return (
        <div className="profile-picture">
            <img src={ProfileImage} alt="Profile Picture"></img>
        </div>
    )
}

export default ProfilePicture;