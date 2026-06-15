import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../utils/style'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 inset-x-0 z-[60] transition-all duration-300",
            isScrolled ? "bg-white/70 backdrop-blur-md border-b border-[var(--color-border-main)] py-3 shadow-sm" : "bg-transparent py-5"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] hover:scale-105 transition-transform">
                    Prathamesh<span className="gradient-text">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary-blue)] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary-blue)] to-[var(--color-primary-indigo)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary py-2 px-6 text-sm ml-4">
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-[var(--color-text-primary)] hover:text-[var(--color-primary-blue)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full inset-x-0 bg-white/95 backdrop-blur-xl border-b border-[var(--color-border-main)] overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 gap-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className="text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary-blue)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a 
                                href="#contact" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary text-center mt-2 py-3"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
