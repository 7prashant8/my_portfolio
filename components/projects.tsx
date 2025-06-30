"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(5)

  const projects = [
    {
      title: "Fraud Detection System",
      description:
        "Advanced machine learning system for detecting fraudulent transactions using Python and various ML algorithms. Features real-time analysis, pattern recognition, and comprehensive reporting dashboard.",
      techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Flask"],
      githubUrl: "https://github.com/7prashant8/fraud-detection-project",
      category: "Machine Learning",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "ERP System (Vishal Paints)",
      description:
        "Comprehensive Enterprise Resource Planning system for inventory management, product rate calculations, raw material tracking, and invoice generation with user-friendly interface.",
      techStack: ["HTML", "CSS", "React.js", "Node.js", "MySQL"],
      githubUrl: "https://github.com/7prashant8/Erp_system",
      category: "Full Stack",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Food Reuse Platform",
      description:
        "Sustainable food management platform connecting food donors with recipients to reduce waste. Features real-time matching, location-based services, and impact tracking.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Google Maps API"],
      githubUrl: "https://github.com/7prashant8/Food_reuse",
      category: "Social Impact",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Plant Disease Recognition",
      description:
        "AI-powered system for identifying plant diseases through image analysis. Uses deep learning models to provide accurate diagnosis and treatment recommendations for farmers.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "Deep Learning"],
      githubUrl: "https://github.com/7prashant8/plant_diseases_recognize",
      category: "AI/ML",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Hackathon Management System",
      description:
        "Complete platform for managing hackathon events with registration, team formation, project submission, judging system, and real-time leaderboards.",
      techStack: ["HTML", "CSS", "React.js", "Node.js", "MySQL"],
      githubUrl: "https://github.com/7prashant8/hackathon_management",
      category: "Event Management",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "YouTube Sentiment Analysis",
      description:
        "Python-based application that analyzes YouTube video comments to determine sentiment (positive, negative, neutral) and provides insights into audience reactions.",
      techStack: ["Python", "Natural Language Processing", "YouTube API", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/7prashant8/Sentimental_Analysis",
      category: "Data Analysis",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Image Dataset Creation Tool",
      description:
        "Automated tool for creating and managing image datasets for machine learning projects. Features image preprocessing, augmentation, and annotation capabilities.",
      techStack: ["Python", "OpenCV", "PIL", "NumPy", "Data Processing"],
      githubUrl: "https://github.com/7prashant8/Dataset_Creation-Image-",
      category: "Data Processing",
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive web interface for hospital administration with separate modules for doctors, patients, and clinic management. Includes inventory tracking and appointment scheduling.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/7prashant8/Hospital_Management_System",
      category: "Healthcare",
      color: "from-rose-500 to-pink-600",
    },
    {
      title: "Shoes Landing Page",
      description:
        "Modern, responsive landing page for a shoe brand featuring interactive product showcase, smooth animations, and optimized user experience across all devices.",
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Animation"],
      githubUrl: "https://github.com/7prashant8/Shoe_landing_page",
      category: "Frontend",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "IQ Test Application",
      description:
        "Interactive IQ testing platform with multiple question types, time tracking, detailed scoring system, and comprehensive result analysis with performance insights.",
      techStack: ["JavaScript", "HTML", "CSS", "Local Storage", "Interactive UI"],
      githubUrl: "https://github.com/7prashant8/iq_test",
      category: "Educational",
      color: "from-violet-500 to-purple-600",
    },
  ]

  const handleViewMore = () => {
    if (visibleProjects === 5) {
      setVisibleProjects(8)
    } else if (visibleProjects === 8) {
      setVisibleProjects(10)
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning machine learning, full-stack development, and social impact
            applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Eye className="h-6 w-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {visibleProjects < projects.length && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-12">
            <Button
              onClick={handleViewMore}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View More Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Showing {visibleProjects} of {projects.length} projects
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
