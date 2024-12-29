import React from 'react';
import './SubMainContainer.css';

const SubMainContainer = ({ children }) => {
    return (
        <div className="sub-main-container">
            {children}
        </div>
    );
};

export default SubMainContainer;