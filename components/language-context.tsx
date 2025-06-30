"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LanguageContextType {
  language: "en" | "hi"
  setLanguage: (lang: "en" | "hi") => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",

    // Home Page
    heroTitle: "Hi, I'm Prashant Kamale",
    heroSubtitle: "Tech-savvy Sales Enthusiast | Project Manager | Growth-Driven Professional",
    downloadResume: "Download Resume",
    connectLinkedIn: "Connect on LinkedIn",

    // About Page
    aboutTitle: "About Me",
    aboutDescription:
      "Dynamic and ambitious Computer Science graduate with hands-on experience in sales, technical project management, and client communication.",

    // Experience Page
    experienceTitle: "Professional Experience",

    // Projects Page
    projectsTitle: "Featured Projects",

    // Contact Page
    contactTitle: "Get In Touch",

    // Footer
    madeWith: "Made with",
    builtWith: "Built with Next.js & Tailwind CSS",
  },
  hi: {
    // Navigation
    home: "होम",
    about: "परिचय",
    experience: "अनुभव",
    projects: "प्रोजेक्ट्स",
    contact: "संपर्क",

    // Home Page
    heroTitle: "नमस्ते, मैं प्रशांत कमले हूँ",
    heroSubtitle: "तकनीक-प्रेमी बिक्री विशेषज्ञ | प्रोजेक्ट मैनेजर | विकास-उन्मुख पेशेवर",
    downloadResume: "रिज्यूमे डाउनलोड करें",
    connectLinkedIn: "लिंक्डइन पर जुड़ें",

    // About Page
    aboutTitle: "मेरे बारे में",
    aboutDescription:
      "बिक्री, तकनीकी प्रोजेक्ट प्रबंधन और ग्राहक संचार में व्यावहारिक अनुभव के साथ गतिशील और महत्वाकांक्षी कंप्यूटर साइंस स्नातक।",

    // Experience Page
    experienceTitle: "व्यावसायिक अनुभव",

    // Projects Page
    projectsTitle: "चुनिंदा प्रोजेक्ट्स",

    // Contact Page
    contactTitle: "संपर्क में रहें",

    // Footer
    madeWith: "के साथ बनाया गया",
    builtWith: "Next.js और Tailwind CSS के साथ निर्मित",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "hi">("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
