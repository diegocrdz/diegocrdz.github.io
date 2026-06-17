import './App.css'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '@/components/theme-provider'
import { Routes, Route } from 'react-router-dom'
import { TooltipProvider } from '@/components/ui/tooltip'

import Navbar from '@/components/Navbar'
import Footer2 from '@/components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ResumeButton from '@/components/ResumeButton'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Navbar />
        <ResumeButton />
        {/* Top fade effect */}
        <div className="fixed top-0 left-0 right-0 h-30 bg-linear-to-b from-background to-transparent z-40 pointer-events-none" />
        <main className="pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer2 
          copyright={`© ${new Date().getFullYear()} ${t('profile.name')}. All rights reserved.`}
        />
        {/* Bottom fade effect */}
        <div className="fixed bottom-0 left-0 right-0 h-10 bg-linear-to-t from-background to-transparent z-40 pointer-events-none" />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
