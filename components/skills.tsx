"use client"

import { motion } from "framer-motion"
import { Code, Database, Palette, Settings, Users, Globe } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      title: "Full Stack Development",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Canva", level: 90 },
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Graphic Design", level: 85 },
      ],
    },
    {
      title: "Database Management",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "SQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Firebase", level: 85 },
        { name: "Database Optimization", level: 80 },
      ],
    },
    {
      title: "Project Management",
      icon: Settings,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "Trello", level: 90 },
        { name: "Jira", level: 80 },
        { name: "Notion", level: 88 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Leadership", level: 88 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Management", level: 85 },
      ],
    },
  ]

  const languages = [
    { name: "English", level: "Professional", flag: "🇺🇸" },
    { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
    { name: "Marathi", level: "Native", flag: "🇮🇳" },
    { name: "Kannada", level: "Conversational", flag: "🇮🇳" },
    { name: "Spanish", level: "Basic", flag: "🇪🇸" },
  ]

  const hobbies = [
    { name: "Cricket", icon: "🏏" },
    { name: "Public Speaking", icon: "🎤" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Volunteering", icon: "🤝" },
    { name: "Football", icon: "⚽" },
    { name: "Business Blogs", icon: "📚" },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning technical development, design, project management, and interpersonal skills
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Hobbies */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Languages</h3>
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{lang.name}</span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Hobbies & Interests</h3>
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-3xl mb-2">{hobby.icon}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
