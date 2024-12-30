import React from 'react';
import './InfoSubContainer.css';

const InfoSubContainer = ({ children }) => {
    return (
        <div className="info-sub-container"> 
            {children}
        </div>
    );
};

export default InfoSubContainer;