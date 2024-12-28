import React from 'react';
import './InfoHeader.css';

const InfoHeader = ({ children }) => {
    return (
        <div className="info-header"> 
            <button className="aboutme-button">About Me</button>
            <button>Activity</button>
        </div>
    );
};

export default InfoHeader;