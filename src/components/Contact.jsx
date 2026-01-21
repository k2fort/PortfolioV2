import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/xzddkdqk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-32 bg-black relative">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                {/* Left Side: Headline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-lime-400 text-lg">★★★★★</span>
                        <span className="font-mono text-neutral-500 text-xs tracking-widest uppercase">
                            Top Rated Partner
                        </span>
                    </div>

                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-none">
                        READY TO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                            UPGRADE?
                        </span>
                    </h2>

                    <p className="text-neutral-400 text-lg max-w-md mb-12 leading-relaxed">
                        Currently accepting new projects for Q1 2026. Secure your slot in the production queue.
                    </p>

                    <a href="mailto:hello@tonysmosh.com" className="inline-flex items-center gap-4 text-white hover:text-lime-400 transition-colors group">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-lime-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <span className="text-xl font-display">hello@tonysmosh.com</span>
                    </a>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
                >
                    <h3 className="text-2xl font-display text-white mb-8">Initialize Uplink</h3>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-lime-400/10 border border-lime-400/20 rounded-xl p-6 text-center"
                        >
                            <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-4 text-lime-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <h4 className="text-white font-bold mb-2">Transmission Received</h4>
                            <p className="text-neutral-400 text-sm">Standby for response.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Identity</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-lime-400 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Coordinates</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email Address"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-lime-400 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <Button
                                className="w-full"
                                variant="primary"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT INQUIRY'}
                            </Button>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">
                                    Transmission failed. Please use email uplink directly.
                                </p>
                            )}
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
