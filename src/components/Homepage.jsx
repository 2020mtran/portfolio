import React from 'react';
import ProfileBanner from '../components/ProfileBanner.jsx';
import SubMainContainer from '../components/SubMainContainer.jsx';
import ProfilePicture from '../components/ProfilePicture.jsx';
import Header from '../components/Header.jsx';
import InfoContainer from '../components/InfoContainer.jsx';
import InfoHeader from '../components/InfoHeader.jsx';
import InfoSubContainer from '../components/InfoSubContainer.jsx';

const HomePage = () => (
  <>
    <ProfileBanner />
    <SubMainContainer>
      <ProfilePicture />
      <Header />
      <InfoContainer>
        <InfoHeader />
        <InfoSubContainer />
      </InfoContainer>
    </SubMainContainer>
  </>
);

export default HomePage;
