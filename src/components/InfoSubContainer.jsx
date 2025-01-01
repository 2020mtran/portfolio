import React from 'react';
import './InfoSubContainer.css';
import AboutMe from './AboutMe.jsx';
import Roles from './Roles.jsx';
import Education from './Education.jsx'
import Connections from './Connections.jsx'
import Projects from './Projects.jsx';

const InfoSubContainer = ({ activeTab }) => {
    const renderContent = () => {
        switch (activeTab) {
            case "aboutMe":
                return (
                    <>
                        <AboutMe></AboutMe>
                        <Roles></Roles>
                        <Education></Education>
                        <Connections></Connections>
                    </>
                );
            case "activity":
                return (
                    <>
                        <Projects></Projects>
                    </>
                );
        };
    };

    return (
        <div className="info-sub-container">
            {renderContent()}
        </div>
    );
};

export default InfoSubContainer;