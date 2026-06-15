import { motion } from 'framer-motion'
import { Zap, Brain, Rocket, TrendingUp } from 'lucide-react'
import profileImg from '../assets/profile.png'

const highlights = [
  { 
    icon: Zap, 
    title: 'Real-time Systems', 
    desc: 'Building responsive, low-latency apps with instant data sync.',
    color: 'bg-blue-500' 
  },
  { 
    icon: Brain, 
    title: 'Clean Architecture', 
    desc: 'Writing maintainable, decoupled code using design patterns.',
    color: 'bg-indigo-500' 
  },
  { 
    icon: Rocket, 
    title: 'Scalable Backend', 
    desc: 'Designing high-performance systems that scale with growth.',
    color: 'bg-indigo-600' 
  },
  { 
    icon: TrendingUp, 
    title: 'Performance', 
    desc: 'Optimizing for speed and efficiency across the full stack.',
    color: 'bg-blue-600' 
  }
]

const timeline = [
  { 
    company: 'Leadows Tech', 
    role: 'Software Dev Intern', 
    period: 'Sep 2025 – Present' 
  },
  { 
    company: 'CodeElevate Tech', 
    role: 'Java & Web Intern', 
    period: 'Jan 2024 – Nov 2024' 
  }
]

export default function About() {
  return (
    <section id="about" className="section-container relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          About Me
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Image & Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 space-y-8"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-blue)] to-[var(--color-primary-indigo)] rounded-[24px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <img 
              src={profileImg}
              alt="Prathamesh Nagore" 
              className="relative w-full rounded-[20px] shadow-2xl border-4 border-white transition-all duration-500 active:scale-95"
            />
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-bold">Experience Trail</h3>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <div>
                    <p className="font-bold text-[var(--color-text-primary)] leading-tight">{item.company}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.role}</p>
                    <p className="text-xs text-blue-500 font-medium">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Content Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 grid md:grid-cols-2 gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="glass-card p-8 group"
            >
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          <div className="md:col-span-2 glass-card p-8 bg-gradient-to-br from-white/90 to-blue-50/50">
            <h3 className="text-2xl font-bold mb-4">The Focus</h3>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I am a results-driven Full Stack Developer with 1+ years of internship experience. 
              I specialize in designing scalable <span className="font-bold text-[var(--color-text-primary)]">Java & Spring Boot</span> applications 
              with responsive <span className="font-bold text-[var(--color-text-primary)]">React.js</span> frontends. 
              My goal is to help businesses build performance-first, real-time systems that solve actual problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
