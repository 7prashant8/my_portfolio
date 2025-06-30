"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const greetings = [
  "Hello",
  "नमस्ते", // Hindi
  "Hola", // Spanish
  "வணக்கம்", // Tamil
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "નમસ્તે", // Gujarati
  "ನಮಸ್ಕಾರ", // Kannada
  "നമസ്കാരം", // Malayalam
  "আসসালামু আলাইকুম", // Bengali
  "नमस्कार", // Marathi
]

export default function SplashScreen() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showArrow, setShowArrow] = useState(false)
  const [viewportWidth, setViewportWidth] = useState<number>(1280) // default for SSR

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth)
    }

    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(greetingInterval)
          setTimeout(() => setShowArrow(true), 800) // Increased delay
          return prev
        }
        return prev + 1
      })
    }, 800) // Increased from 400ms to 800ms for slower animation

    return () => clearInterval(greetingInterval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center">
        {!showArrow ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGreeting}
              initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.3, rotateY: 90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }} // Increased duration
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
                {greetings[currentGreeting]}
              </h1>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center">
            <motion.div
              initial={{ x: -viewportWidth }}
              animate={{ x: viewportWidth }}
              transition={{
                duration: 2.5, // Slightly increased duration
                ease: "easeInOut",
                repeat: 0,
              }}
              className="flex items-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-full shadow-2xl"
              >
                <ArrowRight className="h-12 w-12 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * viewportWidth],
              y: [0, Math.random() * viewportWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * viewportWidth,
              top: Math.random() * viewportWidth,
            }}
          />
        ))}
      </div>
    </div>
  )
}
