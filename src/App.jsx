import './App.css'
import Background from './components/Background.jsx'
import MainContainer from './components/MainContainer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx'
import ProjectMentalMe from './pages/ProjectMentalMe'

function App() {

  return (
    <Background>
      <MainContainer>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pages/ProjectMentalMe" element={<ProjectMentalMe />} />
            {/* <Route path="/ProjectFrontEnd" element={<ProjectFrontEnd />} />
            <Route path="/ProjectOutriderAmber" element={<ProjectOutriderAmber />} />
            <Route path="/ProjectBlitzBot" element={<ProjectBlitzBot />} /> */}
          </Routes>
      </MainContainer>
    </Background>
  )
}

export default App;
