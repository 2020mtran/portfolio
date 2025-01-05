import React from 'react';
import "./FrontEndDevSubContainer.css";

const FrontEndDevSubContainer = ({ children }) => {
    return (
        <div className="project-page-sub-container">
            {children}
        </div>
    )
}

export default FrontEndDevSubContainer;