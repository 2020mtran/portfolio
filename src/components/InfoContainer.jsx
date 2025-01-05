import React, {useState} from 'react';
import './InfoContainer.css';
import InfoHeader from './InfoHeader.jsx';
import InfoSubContainer from './InfoSubContainer.jsx';

const InfoContainer = ({children}) => {
    const [activeTab, setActiveTab] = useState('aboutMe');

    const handleAboutMeClick = () => {
        setActiveTab('aboutMe');
    }

    const handleActivityClick = () => {
        setActiveTab('activity');
    }
return (
    <div className="info-container"> 
        <InfoHeader
            onAboutMeClick={handleAboutMeClick}
            onActivityClick={handleActivityClick}
            activeTab={activeTab} />
        <InfoSubContainer activeTab={activeTab}>
        </InfoSubContainer>
    </div>
);
};

export default InfoContainer;