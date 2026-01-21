import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { PenTool, Layout, Bot } from 'lucide-react';

const services = [
    {
        title: "Visual Identity & Design",
        description: "Comprehensive branding solutions including logo design, visual systems, and brand guidelines.",
        icon: PenTool,
        id: "01"
    },
    {
        title: "Websites & Stores",
        description: "High-performance websites and e-commerce stores designed for optimal user experience and conversion.",
        icon: Layout,
        id: "02"
    },
    {
        title: "SEO Optimization",
        description: "Strategic SEO optimization to improve visibility, search rankings, and drive organic traffic growth.",
        icon: Bot,
        id: "03"
    }
];

const ServiceCard = ({ service }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct * 20); // Rotate Y axis based on X position
        y.set(yPct * -20); // Rotate X axis based on Y position
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useMotionTemplate`${mouseY}deg`;
    const rotateY = useMotionTemplate`${mouseX}deg`;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                perspective: "1000px"
            }}
            className="relative group w-full h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden"
        >
            {/* Corner Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full transform-gpu transition-transform duration-300 group-hover:translate-z-8" style={{ transform: "translateZ(20px)" }}>
                {/* Header: Icon + Number */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black/50 border border-white/10 rounded-xl text-lime-400 group-hover:scale-110 transition-transform duration-300">
                        <service.icon size={24} />
                    </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-lime-400 transition-colors">
                    {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">WHAT I DO</h2>
                    <p className="text-neutral-400 max-w-xl">
                        Specialized services tailored to elevate your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
