import React from 'react';
import './InfoHeader.css';

const InfoHeader = ({ onAboutMeClick, onActivityClick, activeTab }) => {
    return (
        <div className="info-header"> 
            <button className={activeTab === 'aboutMe' ? 'aboutme-button-on' : ''} onClick={onAboutMeClick}>About Me</button>
            <button className={activeTab === 'activity' ? 'activity-button-on' : ''} onClick={onActivityClick}>Activity</button>
        </div>
    );
};

export default InfoHeader;