import { motion, AnimatePresence } from 'framer-motion'
import { FileDown, Github, Linkedin, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const typewriterTexts = [
  "I build scalable apps ⚡",
  "I solve real-world problems 🚀",
  "I design performant systems 🔥"
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % typewriterTexts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-widest">
              Available for New Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
              Hi, I'm <span className="gradient-text">Prathamesh Nagore</span>
            </h1>
          </div>

          <div className="h-16 md:h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold text-[var(--color-text-secondary)]"
              >
                {typewriterTexts[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-primary-blue)]">
            Full Stack Developer | React & Spring Boot
          </h3>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            I help startups and businesses build fast, scalable, and real-time web applications with a focus on performance and clean code.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Prathamesh_Nagore_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <FileDown size={20} />
              Resume
            </motion.a>
            <div className="flex gap-4 ml-2">
              <motion.a
                href="https://github.com/prathamesh-nagore20"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#3B82F6' }}
                className="p-3 bg-white rounded-full shadow-sm border border-[var(--color-border-main)] text-[var(--color-text-secondary)]"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/prathamesh-nagore20"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#6366F1' }}
                className="p-3 bg-white rounded-full shadow-sm border border-[var(--color-border-main)] text-[var(--color-text-secondary)]"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 pt-10 border-t border-[var(--color-border-main)]/50"
          >
            {[
              "3+ Projects",
              "2+ Deployments",
              "Real-world Applications"
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--color-text-secondary)]">
                <CheckCircle2 size={20} className="text-[var(--color-accent-success)]" />
                <span>{stat}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
