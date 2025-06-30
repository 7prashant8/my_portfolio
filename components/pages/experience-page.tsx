"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar, Award, TrendingUp, Users, Target } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface ExperiencePageProps {
  darkMode?: boolean
}

export default function ExperiencePage({ darkMode = true }: ExperiencePageProps) {
  const { t } = useLanguage()

  const experiences = [
    {
      title: "Inside Sales Strategist",
      company: "Rinex.ai",
      location: "Bangalore, India",
      period: "June 2025 – Present",
      type: "Full-time",
      description:
        "Leading sales initiatives by connecting with potential learners and managing comprehensive end-to-end sales cycles. Developed and executed strategic outreach campaigns that contributed to a significant 20% increase in enrollment rates. Utilized advanced CRM tools to track key performance indicators and optimize sales processes.",
      achievements: [
        "Achieved 20% increase in enrollment through strategic outreach campaigns",
        "Managed end-to-end sales cycles from prospecting to post-sales engagement",
        "Implemented CRM optimization strategies to improve lead tracking",
        "Developed customer relationship management protocols",
      ],
      skills: ["Sales Strategy", "CRM Management", "Lead Generation", "Customer Engagement", "Data Analysis"],
      color: "from-green-500 to-emerald-600",
      icon: TrendingUp,
    },
    {
      title: "Project Management Intern",
      company: "GBJ BUZZ PVT LTD",
      location: "Nagpur, India",
      period: "Dec 2024 – June 2025",
      type: "Internship",
      description:
        "Spearheaded the planning and delivery of multiple live IT projects, demonstrating exceptional organizational and leadership skills. Created comprehensive project timelines, managed resource allocation effectively, and successfully implemented Agile methodologies to ensure timely project completion and stakeholder satisfaction.",
      achievements: [
        "Successfully managed 5+ live IT projects simultaneously",
        "Implemented Agile methodologies resulting in 30% faster delivery",
        "Created comprehensive project documentation and timelines",
        "Coordinated cross-functional teams of 8-12 members",
      ],
      skills: [
        "Project Management",
        "Agile Methodology",
        "Resource Planning",
        "Timeline Management",
        "Team Leadership",
      ],
      color: "from-blue-500 to-cyan-600",
      icon: Target,
    },
    {
      title: "Database Administrator Intern",
      company: "GBJ BUZZ PVT LTD",
      location: "Nagpur, India",
      period: "June 2024 – Nov 2024",
      type: "Internship",
      description:
        "Managed and optimized SQL and Firebase databases, focusing on performance enhancement and security protocols. Implemented comprehensive access control systems and developed database optimization strategies that significantly improved query performance and system reliability.",
      achievements: [
        "Optimized database queries resulting in 40% performance improvement",
        "Implemented robust access control and security protocols",
        "Managed data migration projects with zero data loss",
        "Created automated backup and recovery systems",
      ],
      skills: ["SQL", "Firebase", "Database Optimization", "Access Control", "Data Security", "Performance Tuning"],
      color: "from-purple-500 to-violet-600",
      icon: Users,
    },
    {
      title: "Cyber Security & Ethical Hacking Intern",
      company: "Supraja Technologies",
      location: "Hyderabad, India",
      period: "May 2023 – Nov 2023",
      type: "Internship",
      description:
        "Gained comprehensive hands-on experience in network security and penetration testing. Actively participated in real-time threat identification processes and conducted thorough security audits. Developed expertise in vulnerability assessment and ethical hacking methodologies.",
      achievements: [
        "Conducted 15+ penetration testing assessments",
        "Identified and documented 50+ security vulnerabilities",
        "Assisted in developing security protocols for client systems",
        "Completed comprehensive security audit reports",
      ],
      skills: [
        "Penetration Testing",
        "Network Security",
        "Threat Analysis",
        "Security Audits",
        "Vulnerability Assessment",
      ],
      color: "from-red-500 to-pink-600",
      icon: Award,
    },
  ]

  const certifications = [
    {
      title: "TCS iON Career Edge",
      issuer: "Tata Consultancy Services",
      description:
        "Comprehensive certification covering soft skills, workplace readiness, and professional development",
      date: "2024",
      skills: ["Soft Skills", "Workplace Readiness", "Professional Communication"],
      icon: "🎓",
    },
    {
      title: "Ethical Hacking Certification",
      issuer: "Supraja Technologies",
      description: "Advanced certification in ethical hacking, penetration testing, and cybersecurity fundamentals",
      date: "2023",
      skills: ["Ethical Hacking", "Penetration Testing", "Network Security"],
      icon: "🔒",
    },
    {
      title: "CRM Optimization Workshop",
      issuer: "Industry Expert",
      description: "Specialized training in customer relationship management and sales optimization strategies",
      date: "2024",
      skills: ["CRM Management", "Sales Optimization", "Customer Analytics"],
      icon: "📊",
    },
  ]

  return (
    <div
      className={`min-h-screen pt-20 pb-10 transition-colors duration-300 ${
        darkMode ? "bg-white dark:bg-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
          >
            {t("experienceTitle")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p
            className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive journey through diverse roles that shaped my expertise in sales, project management, and
            technical leadership across multiple industries and technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative mb-16 last:mb-0"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`absolute left-4 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 shadow-lg flex items-center justify-center z-10 ${
                  darkMode ? "border-white/20 dark:border-gray-700/20" : "border-gray-200/50"
                }`}
              >
                <exp.icon className="h-4 w-4 text-white" />
              </motion.div>

              <div
                className={`ml-20 backdrop-blur-md rounded-3xl p-8 border transition-all duration-300 ${
                  darkMode
                    ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-gray-800/80"
                    : "bg-white/60 border-gray-200/50 hover:bg-white/80 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} mr-3`}
                      />
                      <h3
                        className={`text-3xl font-bold transition-colors duration-300 ${
                          darkMode
                            ? "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                            : "text-gray-900 hover:text-blue-600"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <span className="ml-3 px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center text-blue-400">
                        <Briefcase className="h-5 w-5 mr-2" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                      <div
                        className={`flex items-center ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div
                        className={`flex items-center ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className={`leading-relaxed mb-6 text-lg ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
                >
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4
                    className={`text-xl font-bold mb-4 flex items-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                  >
                    <Award className="h-5 w-5 mr-2 text-yellow-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + achIndex * 0.1 }}
                        className={`flex items-start ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
                      >
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${exp.color} text-white shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2
            className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
          >
            Certifications & Professional Development
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 text-center ${
                  darkMode
                    ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-gray-800/80"
                    : "bg-white/60 border-gray-200/50 hover:bg-white/80 shadow-lg hover:shadow-xl"
                }`}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className="text-6xl mb-4">
                  {cert.icon}
                </motion.div>
                <h3
                  className={`text-xl font-bold mb-2 ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                >
                  {cert.title}
                </h3>
                <p className="text-blue-400 font-medium mb-3">{cert.issuer}</p>
                <p
                  className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
                >
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className={`text-sm ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500"}`}>
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={`backdrop-blur-md rounded-3xl p-8 border ${
            darkMode
              ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20"
              : "bg-white/60 border-gray-200/50 shadow-lg"
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 text-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
          >
            Professional Summary
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-4xl font-bold text-blue-400 mb-2">
                4+
              </motion.div>
              <p className={darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}>
                Professional Experiences
              </p>
            </div>
            <div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="text-4xl font-bold text-purple-400 mb-2">
                3
              </motion.div>
              <p className={darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}>Industry Certifications</p>
            </div>
            <div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-4xl font-bold text-pink-400 mb-2">
                15+
              </motion.div>
              <p className={darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}>Technical Skills</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
