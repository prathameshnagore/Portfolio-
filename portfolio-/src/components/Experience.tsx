import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Leadows Technologies Pvt. Ltd.',
    duration: 'Sep 2025 – Present',
    achievements: [
      'Designed and maintained Java and React.js web applications using Spring Boot and REST APIs.',
      'Delivered 3+ production-grade UI modules with cross-browser compatibility.',
      'Integrated React components with backend Spring Boot services for seamless data flow.',
      'Optimized code to reduce reported UI inconsistencies by ~15%.'
    ]
  },
  {
    role: 'Java & Web Developer Intern',
    company: 'CodeElevate Technology Pvt. Ltd.',
    duration: 'Jan 2024 – Nov 2024',
    achievements: [
      'Developed scalable Java applications and responsive web interfaces.',
      'Reduced page load time by up to 20% through frontend performance optimization.',
      'Integrated REST APIs and third-party libraries for seamless functionality.',
      'Created technical documentation and reusable UI components.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Professional Journey
        </motion.h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-blue)] via-[var(--color-primary-indigo)] to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-4 border-[var(--color-primary-blue)] rounded-full -translate-x-1/2 z-10 hidden md:block" />

              <div className="w-full md:w-1/2 px-0 md:px-12">
                <div className="glass-card p-8 hover:shadow-xl transition-shadow group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[var(--color-primary-indigo)] font-semibold mb-6 text-sm">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
