import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import Button from './ui/Button';
import bgImage from '../assets/bg.png';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[80vh] relative flex items-center pt-20 pb-20 overflow-hidden bg-black">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src={bgImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
                    }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Status Kicker */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                        </span>
                        <span className="text-neutral-400 font-mono text-xs uppercase tracking-widest">
                            Available for new projects
                        </span>
                    </motion.div>

                    {/* Name Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display font-bold text-7xl md:text-9xl tracking-tighter text-white mb-6 leading-[1.1]"
                    >
                        <span className="bg-lime-400 text-black px-4 box-decoration-clone">
                            TONY <br className="md:hidden" /> SMOSH
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans"
                    >
                        Helping founders launch faster, convert better, and automate smarter through premium web design and custom AI workflows.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        {/* Scroll Down Arrow */}
                        <button
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:border-lime-400 hover:text-lime-400 hover:shadow-[0_0_20px_-10px_#A3E635] transition-all duration-300 group"
                            aria-label="View Portfolio"
                        >
                            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </button>

                        <Button
                            variant="secondary"
                            icon={Mail}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            CONTACT ME
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
