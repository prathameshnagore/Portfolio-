import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  // {
  //   title: 'Real-Time Chat App',
  //   description: 'A robust one-to-one messaging platform. Solved real-time sync issues using Firebase & Spring Boot.',
  //   tags: ['React', 'Spring Boot', 'PostgreSQL', 'Firebase'],
  //   image: '/chat-app.png',
  //   demo: '#',
  //   github: 'https://github.com/prathamesh-nagore20/chat-app'
  // },
  {
    title: 'Word Guessing Game',
    description: 'An interactive browser game with responsive design. Built to test complex state management and animations.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Animations'],
    image: '/word-game.png',
    demo: 'https://word-guessing-game-uxio.vercel.app',
    github: 'https://github.com/prathamesh-nagore20/word-game'
  },
  {
    title: 'Premium E-commerce',
    description: 'High-performance shopping site. Integrated complex filtering and a seamless checkout experience.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    demo: 'http://premium-ui-prathamesh.s3-website.eu-north-1.amazonaws.com',
    github: 'https://github.com/prathameshnagore/e-commarce-site'
  },
  {
    title: 'Employee Group Management',
    description: 'Full-stack organization tool. Implemented secure RBAC and dynamic dashboard updates.',
    tags: ['Spring Boot', 'React', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Featured Projects
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -12 }}
            className="glass-card overflow-hidden group border border-[var(--color-border-main)]/50 active:scale-[0.98]"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Click to view details</p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-primary-blue)] transition-colors">
                {project.title}
              </h3>

              <p className="text-[var(--color-text-secondary)] mb-8 line-clamp-2 text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                <a 
                  href={project.demo} 
                  className="flex-1 flex items-center justify-center gap-2 btn-primary py-2.5 text-sm"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="flex-1 flex items-center justify-center gap-2 btn-secondary py-2.5 text-sm"
                >
                  <Github size={18} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
