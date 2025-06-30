"use client"

import { useState, useEffect } from "react"
import SplashScreen from "@/components/splash-screen"
import Navbar from "@/components/navbar"
import HomePage from "@/components/pages/home-page"
import AboutPage from "@/components/pages/about-page"
import ExperiencePage from "@/components/pages/experience-page"
import ProjectsPage from "@/components/pages/projects-page"
import ContactPage from "@/components/pages/contact-page"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [darkMode, setDarkMode] = useState(true) // Dark mode as default
  const [currentPage, setCurrentPage] = useState("home")

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 6000) // Increased time for slower splash screen animation

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage darkMode={darkMode} />
      case "about":
        return <AboutPage darkMode={darkMode} />
      case "experience":
        return <ExperiencePage darkMode={darkMode} />
      case "projects":
        return <ProjectsPage darkMode={darkMode} />
      case "contact":
        return <ContactPage darkMode={darkMode} />
      default:
        return <HomePage darkMode={darkMode} />
    }
  }

  return (
    <LanguageProvider>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {renderPage()}
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </LanguageProvider>
  )
}
