import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const links = [
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#work' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="font-display text-2xl font-bold tracking-widest text-white hover:text-lime-400 transition-colors">
                        TONYSMOSH<span className="text-lime-400">.</span>COM
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-lime-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <Button variant="primary" onClick={scrollToContact}>CONTACT</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden flex flex-col gap-8"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-display text-3xl text-white hover:text-lime-400"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button onClick={scrollToContact} className="w-full">
                            CONTACT
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
