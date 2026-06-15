import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench } from 'lucide-react'

const stack = [
  {
    category: 'Frontend',
    icon: Layout,
    techs: ['React.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    category: 'Backend',
    icon: Server,
    techs: ['Java', 'Spring Boot'],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    category: 'Database',
    icon: Database,
    techs: ['PostgreSQL', 'MySQL'],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    category: 'Tools',
    icon: Wrench,
    techs: ['Git', 'GitHub', 'Postman', 'VS Code'],
    color: 'from-slate-400 to-slate-600'
  }
]

export default function TechStack() {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Tech Stack
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stack.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-8 group relative overflow-hidden active:scale-95"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
            
            <div className="flex flex-col items-center text-center">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">{item.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {item.techs.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-1.5 rounded-full bg-slate-100 text-[var(--color-text-secondary)] text-sm font-semibold border border-[var(--color-border-main)] group-hover:bg-white group-hover:border-blue-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Glow */}
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
