import React from 'react';
import './SubMainContainer.css';
import Background from './Background';

const SubMainContainer = ({ children }) => {
    return (
        <div className="sub-main-container">
            <svg viewBox="0 0 672 600" className="svg" style={{ borderRadius: '10px' }}>
                <defs>
                    <linearGradient id="sharedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1d3d64', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#d4c6aa85', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M 0 600 L 0 120 L 24 120 Q 24 43.5 102 40 Q 178 43.5 178 120 L 672 120 L 672 600 L 250 600" 
                    fill="hsla(0, 0%, 0%, 0.75)" 
                    // stroke="black" 
                />
                <path d="M 0 600 L 0 120 L 24 120 Q 24 43.5 102 40 Q 178 43.5 178 120 L 672 120 L 672 600 L 250 600"
                    fill="url(#sharedGradient)" 
                    // stroke="black" 
                />
                <foreignObject x="0" y="0" width="672" height="600">
                    <div className="svg-children-container">
                        {children}
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
};

export default SubMainContainer;