import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Assuming we create a utils file, or I can inline it for now. Actually, I should install clsx tailwind-merge first if I used them. I did install them.

// Simple utility for now in case lib/utils doesn't exist yet
const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Button = ({ children, className, variant = 'primary', icon: Icon, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={classNames(
                "relative px-6 py-3 flex items-center justify-center gap-2",
                "font-bold uppercase tracking-[0.2em] text-[10px]",
                "transition-all duration-300",
                variant === 'primary' && "bg-white/5 border border-white/10 hover:border-lime-400 hover:text-lime-400 hover:shadow-[0_0_20px_-10px_#A3E635]",
                variant === 'secondary' && "bg-transparent border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white",
                className
            )}
            {...props}
        >
            {children}
            {Icon && <Icon size={14} className="group-hover:translate-x-1 transition-transform" />}
        </motion.button>
    );
};

export default Button;
