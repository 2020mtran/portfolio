import React from 'react';
import ProfileBackground from "../assets/ProfileBackground1.webp";
import "./ProfileBanner.css";

const ProfileBanner = () => {
    return (
        <div className="profile-banner">
            <img src={ProfileBackground} alt="Profile Banner"></img>
        </div>
    )
}

export default ProfileBanner;