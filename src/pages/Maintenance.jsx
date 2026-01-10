import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Cpu, Layers, Monitor, Smartphone, Globe, Zap } from 'lucide-react';

const Maintenance = () => {
    // Generate random positions for floating particles
    const particles = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 15 + 10,
        }));
    }, []);

    // Icons for the "running" background
    const bgIcons = [
        { Icon: Code, top: '15%', left: '10%', delay: 0 },
        { Icon: Cpu, top: '45%', left: '80%', delay: 2 },
        { Icon: Layers, top: '75%', left: '20%', delay: 4 },
        { Icon: Monitor, top: '25%', left: '70%', delay: 1 },
        { Icon: Smartphone, top: '65%', left: '85%', delay: 3 },
        { Icon: Globe, top: '85%', left: '40%', delay: 5 },
        { Icon: Zap, top: '5%', left: '60%', delay: 6 },
    ];

    // Light beams for "running" animation
    const beams = [
        { id: 1, top: '10%', delay: 0, duration: 8 },
        { id: 2, top: '40%', delay: 2, duration: 12 },
        { id: 3, top: '70%', delay: 5, duration: 10 },
    ];

    return (
        <div className="fixed inset-0 w-full h-full bg-[#020202] flex flex-col items-center justify-between py-10 px-6 sm:p-12 overflow-hidden selection:bg-brand-500/30 font-archivo">

            {/* --- PREMIUM BACKDROPS --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Deep Gradient Glows */}
                <div className="absolute top-[-10%] right-[-5%] w-[70%] h-[70%] bg-brand-900/10 rounded-full blur-[160px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[70%] h-[70%] bg-brand-900/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* --- RUNNING ICONS --- */}
                {bgIcons.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: [0, -100, 0],
                            x: [0, 50, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: 12 + Math.random() * 8,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "linear"
                        }}
                        className="absolute text-brand-400/40 z-0 drop-shadow-[0_0_15px_rgba(113,211,0,0.2)]"
                        style={{ top: item.top, left: item.left }}
                    >
                        <item.Icon size={32 + Math.random() * 20} className="sm:w-16 sm:h-16" />
                    </motion.div>
                ))}

                {/* --- MOVING RUNNING BEAMS --- */}
                {beams.map((beam) => (
                    <motion.div
                        key={beam.id}
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: '200%', opacity: [0, 0.2, 0] }}
                        transition={{
                            duration: beam.duration,
                            repeat: Infinity,
                            delay: beam.delay,
                            ease: "linear"
                        }}
                        className="absolute h-[1px] w-[40%] bg-gradient-to-r from-transparent via-brand-500 to-transparent z-0"
                        style={{ top: beam.top, transform: 'rotate(-25deg)' }}
                    />
                ))}

                {/* Floating Particles */}
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, x: `${p.x}%`, y: `${p.y}%` }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            y: [`${p.y}%`, `${p.y - 15}%`, `${p.y}%`],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute rounded-full bg-brand-400/30 blur-[1px]"
                        style={{ width: p.size, height: p.size }}
                    />
                ))}

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none brightness-150 contrast-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

                {/* Mesh Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #2f5600 0.5px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* --- TOP: STATUS --- */}
            <div className="w-full flex flex-col items-center space-y-6 relative z-10 flex-shrink-0 pt-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-3"
                >
                    <img
                        src="/Logo.png"
                        alt="Techno Vanam Logo"
                        className="h-10 sm:h-12 w-auto object-contain"
                    />
                    <span className="text-2xl sm:text-3xl font-bold text-white font-archivo tracking-tight">
                        Techno Vanam
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-[0_0_20px_rgba(113,211,0,0.05)]"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
                    <span className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em]">
                        Digital Evolution in Progress
                    </span>
                </motion.div>
            </div>

            {/* --- CENTER: TYPOGRAPHY --- */}
            <div className="w-full text-center space-y-6 sm:space-y-8 relative z-10 flex-grow flex flex-col justify-center max-w-7xl px-2 sm:px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="relative"
                >
                    {/* Subtle Glow Behind Text */}
                    <div className="absolute inset-0 bg-brand-600/5 blur-[100px] rounded-full scale-110 sm:scale-150 pointer-events-none"></div>

                    <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-bold text-white leading-[1.1] sm:leading-[0.8] tracking-[-0.04em] font-archivo">
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="block"
                        >
                            Maintenance
                        </motion.span>
                        <motion.span
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-transparent bg-clip-text bg-gradient-to-br from-brand-300 via-brand-500 to-brand-900 inline-block drop-shadow-[0_0_30px_rgba(113,211,0,0.1)]"
                        >
                            InProgress
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-white text-sm sm:text-lg md:text-xl max-w-[280px] sm:max-w-2xl mx-auto leading-relaxed font-light px-2 font-archivo"
                >
                    Techno Vanam is being meticulously rebuilt to deliver an unparalleled
                    state-of-the-art digital experience.
                </motion.p>
            </div>

            {/* --- BOTTOM: MINIMALIST FOOTER --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="w-full flex flex-col items-center space-y-6 relative z-10 flex-shrink-0 pb-6 sm:pb-4"
            >
                <a
                    href="mailto:official@technovanam.com"
                    className="group flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-all duration-500"
                >
                    <Mail size={14} className="text-brand-500 sm:w-4 sm:h-4" />
                    <span className="text-white text-xs sm:text-sm font-light group-hover:text-brand-400 transition-colors uppercase tracking-wider">official@technovanam.com</span>
                </a>

                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2 text-[12px] text-white tracking-[0.4em] uppercase font-bold font-archivo">
                        <img src="/Logo.png" alt="" className="h-[12px] w-auto object-contain opacity-80" />
                        Techno Vanam
                    </div>
                    <p className="text-[9px] text-white tracking-[0.1em] font-medium uppercase opacity-50">
                        2026 all rights reserved
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Maintenance;
