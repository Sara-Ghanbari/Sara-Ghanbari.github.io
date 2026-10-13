import { useState } from 'react'
import './App.css'
import useSectionScroll from './hooks/useSectionScroll'
import { projects } from './data/portfolio'
import useActiveSection from './hooks/useActiveSection'
import Landscape from './components/visuals/Landscape'
import Sidebar from './components/layout/Sidebar'
import SectionRail from './components/layout/SectionRail'
import ProjectDialog from './components/projects/ProjectDialog'
import HeroSection from './components/sections/HeroSection'
import WebSection from './components/sections/WebSection'
import MachineLearningSection from './components/sections/MachineLearningSection'
import ExperienceSection from './components/sections/ExperienceSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  useSectionScroll()
  const activeSection = useActiveSection()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <div className="scene">
        <Landscape />
        <div className="scene-shade" />
      </div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SectionRail active={activeSection} />

      <Sidebar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <WebSection onSelectProject={setSelectedProject} />
        <MachineLearningSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <ProjectDialog
        project={projects[selectedProject]}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
