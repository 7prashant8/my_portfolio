"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Instagram, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import Image from "next/image"

interface HomePageProps {
  darkMode?: boolean
}

export default function HomePage({ darkMode = true }: HomePageProps) {
  const { t } = useLanguage()

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Prashant_Kamale_Resume.pdf"
    link.click()
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/prashant-kamale-218647242/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/7prashant8",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/im.prashant07?igsh=bXliYmJqbmh4d2M4",
      color: "hover:text-pink-600",
    },
  ]

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-colors duration-300 ${
        darkMode ? "bg-white dark:bg-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
              className="relative group"
            >
              <div
                className={`w-80 h-80 mx-auto rounded-full overflow-hidden border-8 shadow-2xl backdrop-blur-sm ${
                  darkMode ? "border-white/20 dark:border-gray-700/20" : "border-gray-200/50"
                }`}
              >
                <Image
                  src="/images/prashant-profile.jpg"
                  alt="Prashant Kamale"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 border-2 border-dashed border-blue-400/30"
              />
            </motion.div>
          </motion.div>

          {/* Hero Content with Enhanced Animations */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" whileHover={{ scale: 1.05 }}>
                <motion.span
                  className={`block mb-2 ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {t("heroTitle")}
                </motion.span>
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  className="inline-block text-4xl md:text-6xl ml-4"
                >
                  👋
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-xl md:text-2xl mb-8 leading-relaxed ${
                  darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"
                }`}
              >
                {t("heroSubtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleDownloadResume}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t("downloadResume")}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://www.linkedin.com/in/prashant-kamale-218647242/", "_blank")}
                    className="px-8 py-3 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    {t("connectLinkedIn")}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex justify-center lg:justify-start space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      y: -8,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 ${
                      darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"
                    } ${social.color}`}
                  >
                    <social.icon className="h-8 w-8" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className={`flex flex-col items-center ${darkMode ? "text-gray-600 dark:text-white/70" : "text-gray-600"}`}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
