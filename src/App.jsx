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

function App() {

  return (
    <Background>
      <MainContainer>
        <ProfileBanner></ProfileBanner>
        <ProfilePicture></ProfilePicture>
        <Header></Header>
        <InfoContainer>
          <InfoHeader></InfoHeader>
          <AboutMe></AboutMe>
          <Roles></Roles>
        </InfoContainer>
      </MainContainer>
    </Background>
  )
}

export default App;
