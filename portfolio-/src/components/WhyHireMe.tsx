import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Code2, Lightbulb } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Production-Ready Apps',
    desc: 'I build scalable, performant applications that are ready for real-world traffic.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    icon: ShieldCheck,
    title: 'Strong Full-Stack Knowledge',
    desc: 'Expertise in both frontend (React) and backend (Spring Boot) ecosystems.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    icon: Code2,
    title: 'Clean & Maintainable Code',
    desc: 'Focus on design patterns and best practices for long-term codebase health.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving Mindset',
    desc: 'Passionate about solving complex business logic with elegant technical solutions.',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  }
]

export default function WhyHireMe() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Why Hire Me?
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ x: 10 }}
            className="glass-card p-8 flex gap-6 items-start group"
          >
            <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform shrink-0 shadow-sm`}>
              <item.icon size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 glass-card p-10 bg-gradient-to-r from-[var(--color-primary-blue)] to-[var(--color-primary-indigo)] text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Ready to bring value to your team?</h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
          I'm currently looking for full-time opportunities where I can apply my full-stack skills and internship experience.
        </p>
        <a href="#contact" className="bg-white text-[var(--color-primary-blue)] px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
          Let's Talk
        </a>
      </motion.div>
    </section>
  )
}
