import React from 'react';
import './SubMainContainer.css';

const SubMainContainer = ({ children }) => {
    return (
        <div className="sub-main-container">
            <svg viewBox="0 0 672 600" className="svg" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="sharedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1d3d64', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#d4c6aa85', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M 0 600 L 0 120 L 24 120 Q 24 43.5 102 38.5 Q 178 43.5 178 120 L 672 120 L 672 600 L 250 600" 
                    fill="hsla(0, 0%, 0%, 0.75)"
                />
                <path d="M 0 600 L 0 120 L 24 120 Q 24 43.5 102 38.5 Q 178 43.5 178 120 L 672 120 L 672 600 L 250 600"
                    fill="url(#sharedGradient)"
                />
                <foreignObject x="0" y="0" width="100%" height="100%">
                    <div className="svg-children-container">
                        {children}
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
};

export default SubMainContainer;