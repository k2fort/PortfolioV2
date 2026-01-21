import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "BUDGET APP",
        category: "FINANCE",
        year: "2025",
        description: "A budgeting app keeps track of your spending and delivers insights that help improve your financial awareness. Convenience. Offering automated tracking, easy access from your mobile device and other features, budgeting apps simplify your finances.",
        alignment: "left", // Image left, text right
        link: "#", // User to update
        image: "" // User to update path, e.g., "/projects/budget.jpg"
    },
    {
        id: 2,
        title: "SOON",
        category: "SOON",
        year: "2026",
        description: "SOON.",
        alignment: "right", // Text left, image right
        link: "#", // User to update
        image: "" // User to update path
    }
];

const ProjectCard = ({ project }) => {
    const isLeft = project.alignment === 'left';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${!isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Image Container */}
            <div className="w-full md:w-3/5 group relative">
                <a href={project.link} className="block relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video hover:border-lime-400/50 transition-colors duration-500">
                    {/* Mock Window Dots */}
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>

                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    ) : (
                        /* Placeholder if no image provided */
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="font-mono text-xs text-white/20 group-hover:text-lime-400 transition-colors">
                                PROJECT IMAGE PLACEHOLDER
                            </span>
                        </div>
                    )}
                </a>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/5">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-lime-400 font-mono text-xs tracking-widest uppercase">
                        {project.category}
                    </span>
                    <span className="w-8 h-px bg-white/10" />
                    <span className="text-neutral-500 font-mono text-xs tracking-widest uppercase">
                        BUILD {project.year}
                    </span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                    {project.title}
                </h3>

                <p className="text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                </p>

                <a href={project.link} className="inline-flex items-center gap-2 text-white hover:text-lime-400 transition-colors group">
                    <span className="font-bold tracking-widest text-xs uppercase border-b border-transparent group-hover:border-lime-400 pb-1">
                        DEMO THE PAGE
                    </span>
                    <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
};

const Work = () => {
    return (
        <section id="work" className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-24">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
                        WORK <br /> SHOWCASE
                    </h2>
                </div>

                <div className="flex flex-col">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
