import { useState } from 'react'
import './App.css'
import Background from './components/Background.jsx'
import MainContainer from './components/MainContainer.jsx'
import ProfileBanner from './components/ProfileBanner.jsx'
import Header from './components/Header.jsx'
import InfoContainer from './components/InfoContainer.jsx'
import InfoHeader from './components/InfoHeader.jsx'
import AboutMe from './components/AboutMe.jsx'
import Roles from './components/Roles.jsx'
import ProfilePicture from './components/ProfilePicture.jsx'
import SubMainContainer from './components/SubMainContainer.jsx'
import InfoSubContainer from './components/InfoSubContainer.jsx'
import Education from './components/Education.jsx'
import Connections from './components/Connections.jsx'

function App() {

  return (
    <Background>
      <MainContainer>
        <ProfileBanner></ProfileBanner>
        <SubMainContainer>
          <ProfilePicture></ProfilePicture>
          <Header></Header>
          <InfoContainer>
            <InfoHeader></InfoHeader>
            <InfoSubContainer>
              <AboutMe></AboutMe>
              <Roles></Roles>
              <Education></Education>
              <Connections></Connections>
            </InfoSubContainer>
          </InfoContainer>
        </SubMainContainer>
      </MainContainer>
    </Background>
  )
}

export default App;
