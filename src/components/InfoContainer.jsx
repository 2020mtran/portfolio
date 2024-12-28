import React from 'react';
import './InfoContainer.css';

const InfoContainer = ({ children }) => {
    return (
        <div className="info-container"> 
            {children}
        </div>
    );
};

export default InfoContainer;