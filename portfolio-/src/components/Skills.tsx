import { motion } from 'framer-motion'
import { CheckCircle2, Star, Lightbulb } from 'lucide-react'

const skills = [
  { 
    name: 'React.js', 
    status: 'Advanced', 
    icon: Star, 
    emoji: '⚡',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  { 
    name: 'Spring Boot', 
    status: 'Strong', 
    icon: CheckCircle2, 
    emoji: '🚀',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  { 
    name: 'REST APIs', 
    status: 'Built multiple', 
    icon: Lightbulb, 
    emoji: '💡',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  // { 
  //   name: 'Authentication', 
  //   status: 'JWT Expert', 
  //   icon: ShieldCheck, 
  //   emoji: '🔐',
  //   color: 'text-emerald-500',
  //   bg: 'bg-emerald-50'
  // }
]

export default function Skills() {
  return (
    <section id="skills-summary" className="section-container">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Specialized Skills
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="glass-card p-6 flex flex-col items-center text-center group"
          >
            <div className={`w-16 h-16 rounded-2xl ${skill.bg} ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <skill.icon size={32} />
            </div>
            <h3 className="text-xl font-extrabold mb-2">{skill.name} {skill.emoji}</h3>
            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${skill.bg} ${skill.color}`}>
              {skill.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
