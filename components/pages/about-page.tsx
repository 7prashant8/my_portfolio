"use client"

import { motion } from "framer-motion"
import { Calendar, Globe, Heart, Code, Database, Palette } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface AboutPageProps {
  darkMode?: boolean
}

export default function AboutPage({ darkMode = true }: AboutPageProps) {
  const { t } = useLanguage()

  const timeline = [
    {
      year: "2018",
      title: "SSC (Secondary School Certificate)",
      institution: "Kendriya Vidyalaya, Solapur",
      description:
        "Completed secondary education with strong foundation in science and mathematics. Developed early interest in technology and problem-solving.",
      icon: "🎓",
      color: "from-green-500 to-emerald-600",
    },
    {
      year: "2020",
      title: "HSC (Higher Secondary Certificate)",
      institution: "Walchand College of Arts & Science, Solapur",
      description:
        "Specialized in science stream with focus on physics, chemistry, and mathematics. Achieved excellent grades while developing leadership skills through various extracurricular activities.",
      icon: "📚",
      color: "from-blue-500 to-cyan-600",
    },
    {
      year: "2025",
      title: "B.Tech in Computer Science Engineering",
      institution: "GH Raisoni College of Engineering, Nagpur",
      description:
        "Graduating with 8.98 CGPA, specializing in full-stack development, database management, and project leadership. Completed multiple internships and led various technical projects.",
      icon: "🎯",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      items: ["C/C++", "Python", "Java", "JavaScript"],
    },
    {
      category: "Full Stack Development",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      items: ["HTML/CSS", "React.js", "Node.js", "Next.js"],
    },
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      items: ["Canva", "Figma", "UI/UX Design"],
    },
    {
      category: "Database Management",
      icon: Database,
      color: "from-orange-500 to-red-500",
      items: ["SQL", "MongoDB", "Firebase"],
    },
  ]

  const languages = [
    { name: "English", level: "Professional", flag: "🇺🇸", proficiency: 95 },
    { name: "Hindi", level: "Fluent", flag: "🇮🇳", proficiency: 90 },
    { name: "Marathi", level: "Native", flag: "🇮🇳", proficiency: 100 },
    { name: "Kannada", level: "Conversational", flag: "🇮🇳", proficiency: 75 },
    { name: "Spanish", level: "Basic", flag: "🇪🇸", proficiency: 40 },
  ]

  const hobbies = [
    { name: "Cricket", icon: "🏏", description: "Passionate player and follower of cricket" },
    { name: "Public Speaking", icon: "🎤", description: "Love engaging with audiences and sharing ideas" },
    { name: "UI/UX Design", icon: "🎨", description: "Creating beautiful and functional user interfaces" },
    { name: "Volunteering", icon: "🤝", description: "Contributing to community and social causes" },
    { name: "Football", icon: "⚽", description: "Enjoy playing and watching football matches" },
    { name: "Business Blogs", icon: "📚", description: "Reading about business strategies and trends" },
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
            {t("aboutTitle")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p
            className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
          >
            {t("aboutDescription")} I'm passionate about bridging technology and business to create meaningful impact in
            the world.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div
            className={`backdrop-blur-md rounded-3xl p-8 border transition-colors duration-300 ${
              darkMode
                ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20"
                : "bg-white/60 border-gray-200/50 shadow-xl"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
            >
              <Heart className="h-8 w-8 text-red-400 mr-3" />
              My Journey & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`space-y-4 leading-relaxed ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
              >
                <p>
                  My journey began with a curiosity about how technology can solve real-world problems. From my early
                  days at Kendriya Vidyalaya to pursuing Computer Science Engineering, I've always been fascinated by
                  the intersection of technology and human needs.
                </p>
                <p>
                  What sets me apart is my unique blend of technical expertise and people skills. While many developers
                  focus solely on code, I've cultivated strong communication abilities and business acumen through my
                  sales and project management experiences.
                </p>
              </div>
              <div
                className={`space-y-4 leading-relaxed ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}
              >
                <p>
                  My vision is to become a bridge between technical teams and business stakeholders, helping
                  organizations leverage technology to achieve their goals while ensuring exceptional customer
                  experiences.
                </p>
                <p>
                  I believe that the future belongs to professionals who can speak both the language of technology and
                  business, and I'm committed to being one of those versatile leaders.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2
            className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
          >
            Educational Journey
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className={`absolute left-4 w-8 h-8 bg-gradient-to-r ${item.color} rounded-full border-4 shadow-lg flex items-center justify-center text-lg z-10 ${
                    darkMode ? "border-white/20 dark:border-gray-700/20" : "border-gray-200/50"
                  }`}
                >
                  {item.icon}
                </motion.div>

                <div
                  className={`ml-20 backdrop-blur-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 ${
                    darkMode
                      ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-gray-800/80"
                      : "bg-white/60 border-gray-200/50 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-bold text-lg">{item.year}</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-3">{item.institution}</p>
                  <p className={`leading-relaxed ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2
            className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
          >
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 ${
                  darkMode
                    ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-gray-800/80"
                    : "bg-white/60 border-gray-200/50 hover:bg-white/80 shadow-lg hover:shadow-xl"
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-4 w-fit`}
                >
                  <skill.icon className="h-6 w-6" />
                </motion.div>
                <h3
                  className={`text-lg font-bold mb-3 ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                >
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={`inline-block px-3 py-1 text-sm rounded-full mr-2 mb-2 ${
                        darkMode
                          ? "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Hobbies */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3
              className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
            >
              Languages
            </h3>
            <div
              className={`backdrop-blur-md rounded-2xl p-6 border ${
                darkMode
                  ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20"
                  : "bg-white/60 border-gray-200/50 shadow-lg"
              }`}
            >
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      darkMode
                        ? "bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <div>
                        <span
                          className={`font-semibold block ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                        >
                          {lang.name}
                        </span>
                        <span className={`text-sm ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"}`}>
                          {lang.level}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-24 rounded-full h-2 ${darkMode ? "bg-gray-300 dark:bg-gray-700" : "bg-gray-300"}`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3
              className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
            >
              Hobbies & Interests
            </h3>
            <div
              className={`backdrop-blur-md rounded-2xl p-6 border ${
                darkMode
                  ? "bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-white/20"
                  : "bg-white/60 border-gray-200/50 shadow-lg"
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      rotate: 5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    }}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 cursor-pointer group ${
                      darkMode
                        ? "bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {hobby.icon}
                    </span>
                    <span
                      className={`text-sm font-medium text-center mb-1 ${darkMode ? "text-gray-900 dark:text-white" : "text-gray-900"}`}
                    >
                      {hobby.name}
                    </span>
                    <span
                      className={`text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        darkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {hobby.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
