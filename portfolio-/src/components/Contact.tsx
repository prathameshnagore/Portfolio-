import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-container relative">
      <div className="text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for opportunities
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading block"
        >
          Get In Touch
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Let's build something <span className="gradient-text">extraordinary</span> together.</h3>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <a href="mailto:prathameshnagore8@gmail.com" className="text-lg font-bold hover:text-blue-600 transition-colors">
                  prathameshnagore8@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold">Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com/prathamesh-nagore20" 
              target="_blank" 
              className="w-12 h-12 rounded-xl border border-[var(--color-border-main)] flex items-center justify-center hover:bg-slate-50 hover:border-blue-200 transition-all text-slate-600 hover:text-blue-600"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/prathamesh-nagore20" 
              target="_blank" 
              className="w-12 h-12 rounded-xl border border-[var(--color-border-main)] flex items-center justify-center hover:bg-slate-50 hover:border-blue-200 transition-all text-slate-600 hover:text-blue-600"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 border border-[var(--color-border-main)]/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-[var(--color-text-primary)] font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-[var(--color-text-primary)] font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="How can I help you today?"
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-[var(--color-text-primary)] font-medium resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full btn-primary flex items-center justify-center gap-3 py-4 shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending Message...' : 'Send Message'}
              <Send size={18} className={status === 'loading' ? 'hidden' : ''} />
            </button>

            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-emerald-600 font-bold text-sm bg-emerald-50 py-3 rounded-lg border border-emerald-100"
              >
                ✓ Message sent! I'll get back to you within 24 hours.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
