import React from 'react';
import './MainContainer.css';

const MainContainer = ({ children }) => {
    return (
        <div className="main-container">
            <div className='main-container-layer'></div> 
            {children}
        </div>
    );
};

export default MainContainer;