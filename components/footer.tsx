"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  darkMode?: boolean
}

export default function Footer({ darkMode = true }: FooterProps) {
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
    {
      name: "Email",
      icon: Mail,
      url: "mailto:prashant07unknown@gmail.com",
      color: "hover:text-red-600",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <footer
      className={`transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Prashant Kamale
            </h3>
            <p className={`leading-relaxed mb-6 max-w-md ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Tech-savvy Sales Enthusiast & Project Manager passionate about bridging technology and business to create
              meaningful impact. Always ready for new challenges and opportunities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>+91 7263049920</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span>prashant07unknown@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                <span>Nagpur, Maharashtra, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5, color: "#3b82f6" }}
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-colors duration-300 ${
                      darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Connect With Me</h4>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`flex items-center transition-all duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } ${social.color}`}
                >
                  <social.icon className="h-5 w-5 mr-3" />
                  <span>{social.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills Highlight */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-3 text-blue-400">Core Expertise</h5>
              <div className="flex flex-wrap gap-2">
                {["Sales", "Project Management", "Full Stack", "Python", "React"].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-md border border-blue-600/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`border-t ${darkMode ? "border-gray-800" : "border-gray-300"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`flex items-center mb-4 md:mb-0 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <span>© 2025 Prashant Kamale. Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Built with Next.js & Tailwind CSS
              </span>
              <div className="flex space-x-4">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`transition-colors duration-300 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
