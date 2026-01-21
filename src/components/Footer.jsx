import React from 'react';
import { Instagram, Twitter, Linkedin, Heart } from 'lucide-react';
import Button from './ui/Button';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <a href="#" className="font-display text-2xl font-bold tracking-widest text-white mb-6 block">
                            TONY SMOSH
                        </a>
                        <p className="text-neutral-500 max-w-sm leading-relaxed mb-8">
                            Quality Work with No Limits. Responsibility Made Simple & Successful.
                        </p>
                    </div>

                    {/* Spacer */}
                    <div className="md:col-span-2"></div>

                    {/* Services Column */}
                    <div className="md:col-span-3">
                        <h4 className="font-display text-white font-bold mb-8">Site Map</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-neutral-500 hover:text-lime-400 transition-colors">Main Website</a></li>
                            <li><a href="#services" className="text-neutral-500 hover:text-lime-400 transition-colors">Services</a></li>
                            <li><a href="#work" className="text-neutral-500 hover:text-lime-400 transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-neutral-500 hover:text-lime-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-3">
                        <h4 className="font-display text-white font-bold mb-8">Newsletter</h4>
                        <div className="flex gap-2 mb-8">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:border-lime-400 transition-colors"
                            />
                            <button className="bg-lime-400 text-black font-bold uppercase text-xs px-4 py-2 rounded-lg hover:bg-lime-500 transition-colors">
                                Join
                            </button>
                        </div>

                        <div className="flex gap-6">
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-600 text-sm">
                        Copyright © 2025. All Rights Reserved.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-neutral-500">
                        <span>+972 (50) 000-0000</span>
                        <span className="hidden md:inline">•</span>
                        <span>hello@tonysmosh.com</span>
                        <span className="hidden md:inline">•</span>
                        <span>Israel</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
