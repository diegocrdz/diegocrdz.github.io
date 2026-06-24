import './App.css'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '@/components/theme-provider'
import { useLocation, Routes, Route } from 'react-router-dom'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AnimatePresence } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Footer2 from '@/components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from '@/components/ScrollToTop'

function App() {
  const { t } = useTranslation();
  const location = useLocation()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Navbar />          
        {/* Top fade effect */}
        <div className="fixed top-0 left-0 right-0 h-30 bg-linear-to-b from-background to-transparent z-40 pointer-events-none" />
        <main>
          <AnimatePresence mode="wait">
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
          </AnimatePresence>
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
