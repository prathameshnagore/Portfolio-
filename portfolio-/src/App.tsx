import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen text-[var(--color-text-primary)] selection:bg-blue-200/50 font-sans">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Experience />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
