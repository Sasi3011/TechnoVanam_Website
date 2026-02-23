import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Rocket, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const LaunchingSoonModal = ({ isOpen, onClose, productName, productImage, isEarlyAccess = false, demoLink = null }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className={`relative w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl ${
                        isEarlyAccess 
                            ? "bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-brand-500/30" 
                            : "bg-[#0a0a0a] border border-white/10 card-glow"
                    } flex flex-col md:flex-row`}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors backdrop-blur-md border border-white/10"
                    >
                        <X size={16} />
                    </button>

                    {/* Early Access Badge */}
                    {isEarlyAccess && (
                        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center gap-1.5">
                            <Zap size={12} className="text-brand-500" />
                            <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">Live Demo</span>
                        </div>
                    )}

                    {/* Left Side - Image */}
                    <div className="w-full md:w-1/2 bg-[#111] relative flex items-center justify-center min-h-[280px] md:min-h-full overflow-hidden">
                        {/* Premium Glow Effects */}
                        {isEarlyAccess && (
                            <>
                                <div className="absolute inset-0 bg-brand-500/5 blur-[80px]" />
                                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] opacity-50" />
                            </>
                        )}
                        <div className="absolute inset-0 bg-brand-500/10 blur-[60px]" />

                        {/* Image or Fallback Icon */}
                        {productImage ? (
                            <img
                                src={productImage}
                                alt={productName}
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity relative z-10"
                            />
                        ) : (
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-xl">
                                <Rocket size={40} className="text-brand-500" />
                            </div>
                        )}
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-[#0a0a0a]">
                        <div className="flex items-center gap-2 mb-5">
                            <span className={`w-2 h-2 rounded-full ${isEarlyAccess ? "bg-brand-500 shadow-[0_0_8px_rgba(113,211,0,0.5)]" : "bg-brand-500"}`} />
                            <span className={`font-bold text-xs uppercase tracking-widest ${isEarlyAccess ? "text-brand-500" : "text-brand-500"}`}>
                                {isEarlyAccess ? "Early Access – In Development" : "Coming Soon"}
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                            {productName}
                        </h3>

                        {isEarlyAccess && (
                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="inline-block px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-semibold text-brand-500">
                                    Active Development
                                </span>
                                <span className="inline-block px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-semibold text-brand-500">
                                    Next Generation
                                </span>
                            </div>
                        )}

                        <p className={`${isEarlyAccess ? "text-gray-300" : "text-gray-400"} text-sm md:text-base leading-relaxed mb-8 font-medium`}>
                            {isEarlyAccess 
                                ? "Get an exclusive first look at the platform. Experience how it will transform athlete performance tracking, injury intelligence, and talent recognition."
                                : "We're crafting an extraordinary experience. Join the waitlist to be the first to know when we launch."
                            }
                        </p>

                        {isEarlyAccess && demoLink ? (
                            <div className="flex flex-col gap-3">
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={onClose}
                                    className="px-6 py-3 bg-brand-500 text-black font-bold rounded-lg hover:bg-brand-400 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center gap-2">
                                        Access Live Demo
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                                <p className="text-xs text-gray-500 text-center mt-1">
                                    Early access • In development
                                </p>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    onClose();
                                    setTimeout(() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}
                                className="px-6 py-3 bg-brand-500 text-black font-bold rounded-lg hover:bg-brand-400 transition-all duration-300 flex items-center justify-center gap-2 w-fit shadow-lg hover:shadow-xl"
                            >
                                <Sparkles size={18} />
                                Get Early Access
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LaunchingSoonModal;
