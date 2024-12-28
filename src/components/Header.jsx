import React from 'react';
import './Header.css';

const Header = ({ children }) => {
    return (
        <div className="header"> 
            <p className="name">Matthew Tran</p>
            <p className="subname">LF Work • Placeholder</p>
        </div>
    );
};

export default Header;