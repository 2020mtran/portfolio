import React from 'react';
import './TestSVG.css';

const TestSVG = ({ children, strokeColor = "black", width = "200", height = "200" }) => {
    return (
        <div className="test-svg">
            <svg viewBox="0 0 672 600" className="svg">
                <defs>
                    <linearGradient id="sharedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#71839e', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#c5b7a6', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M 0 600 L 0 120 L 65 120 Q 65 47 132 47 Q 200 47 200 120 L 672 120 L 672 600 L 250 600" 
                    fill="url(#sharedGradient)" 
                    stroke="black" 
                />
            </svg>
            {/* <div className="children-container">{children}</div> */}
        </div>
    );
};

export default TestSVG;