import { Routes, Route } from 'react-router-dom'
import ParticleBackground from './Components/ParticleBackground'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutPage from './Components/AboutPage'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import ProjectDetailPage from './Components/ProjectDetailPage'

function MainPage() {
  return (
    <>
      <Home />
      <AboutPage />
      <Skill />
      <Project />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  )
}

export default App