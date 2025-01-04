import './App.css'
import Background from './components/Background.jsx'
import MainContainer from './components/MainContainer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx'
import ProjectMentalMe from './pages/ProjectMentalMe'
import ProjectFrontEndDev from './pages/ProjectFrontEndDev.jsx';

function App() {

  return (
    <Background>
      <MainContainer>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pages/ProjectMentalMe" element={<ProjectMentalMe />} />
            <Route path="/pages/ProjectFrontEndDev" element={<ProjectFrontEndDev />} />
            {/* <Route path="/ProjectOutriderAmber" element={<ProjectOutriderAmber />} />
            <Route path="/ProjectBlitzBot" element={<ProjectBlitzBot />} /> */}
          </Routes>
      </MainContainer>
    </Background>
  )
}

export default App;
