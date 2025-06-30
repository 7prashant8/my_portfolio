"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function About() {
  const timeline = [
    {
      year: "2018",
      title: "SSC",
      institution: "Kendriya Vidyalaya",
      description: "Completed Secondary School Certificate with strong foundation in science and mathematics.",
    },
    {
      year: "2020",
      title: "HSC",
      institution: "Walchand College of Arts & Science",
      description: "Higher Secondary Certificate focusing on science stream, preparing for engineering studies.",
    },
    {
      year: "2025",
      title: "B.Tech CSE",
      institution: "GH Raisoni College of Engineering",
      description:
        "Bachelor of Technology in Computer Science Engineering with 8.98 CGPA, specializing in full-stack development and project management.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey & Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Dynamic and ambitious Computer Science graduate with hands-on experience in sales, technical project
                management, and client communication. I aim to bring a unique mix of technical expertise and
                customer-first mindset into high-impact roles.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My goal is to blend deep technical knowledge with exceptional customer interaction skills to create
                meaningful impact in tech-sales and project leadership roles. I'm passionate about understanding
                customer needs, building trust, and delivering tailored solutions that drive business growth.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With experience across multiple domains including cybersecurity, database management, and sales
                strategy, I bring a holistic approach to problem-solving and business development.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Educational Timeline</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                  {/* Content Card */}
                  <div className="ml-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
