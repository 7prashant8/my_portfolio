"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Inside Sales Strategist",
      company: "Rinex.ai",
      location: "Bangalore, India",
      period: "June 2025 – Present",
      description:
        "Drove sales by connecting with potential learners and handling end-to-end sales cycles including prospecting, pitching, and post-sales engagement. Contributed to 20% rise in enrollment through strategic outreach campaigns and worked with CRM tools to track KPIs.",
      skills: ["Sales Strategy", "CRM Management", "Lead Generation", "Customer Engagement"],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Project Management Intern",
      company: "GBJ BUZZ PVT LTD",
      location: "Nagpur, India",
      period: "Dec 2024 – June 2025",
      description:
        "Oversaw planning and delivery of live IT projects, created comprehensive timelines, managed resources effectively, and implemented Agile practices to ensure successful project completion.",
      skills: ["Project Management", "Agile Methodology", "Resource Planning", "Timeline Management"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Database Administrator Intern",
      company: "GBJ BUZZ PVT LTD",
      location: "Nagpur, India",
      period: "June 2024 – Nov 2024",
      description:
        "Managed SQL and Firebase databases, improved query performance through optimization techniques, and handled comprehensive access control and security protocols.",
      skills: ["SQL", "Firebase", "Database Optimization", "Access Control"],
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Cyber Security & Ethical Hacking Intern",
      company: "Supraja Technologies",
      location: "Hyderabad, India",
      period: "May 2023 – Nov 2023",
      description:
        "Gained hands-on exposure to network vulnerabilities and penetration testing. Assisted in real-time threat identification and comprehensive security audits.",
      skills: ["Penetration Testing", "Network Security", "Threat Analysis", "Security Audits"],
      color: "from-red-500 to-pink-600",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through diverse roles that shaped my expertise in sales, project management, and technical
            leadership
          </p>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} mr-3`}></div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center text-blue-600 dark:text-blue-400">
                        <Briefcase className="h-5 w-5 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${exp.color} text-white shadow-md`}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Training
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "TCS iON Career Edge",
                description: "Soft Skills & Workplace Readiness",
                icon: "🎓",
              },
              {
                title: "Ethical Hacking Certification",
                description: "Supraja Technologies",
                icon: "🔒",
              },
              {
                title: "CRM Optimization Workshop",
                description: "Product Marketing & Sales",
                icon: "📊",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 text-center"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
