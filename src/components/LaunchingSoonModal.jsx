import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const LaunchingSoonModal = ({ isOpen, onClose, productName, productImage }) => {
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

                {/* Modal Content - Horizontal Layout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl card-glow flex flex-col md:flex-row"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors backdrop-blur-md border border-white/10"
                    >
                        <X size={16} />
                    </button>

                    {/* Left Side - Visual */}
                    <div className="w-full md:w-2/5 bg-[#111] relative flex items-center justify-center min-h-[200px] md:min-h-full overflow-hidden">
                        {/* Glow Effects */}
                        <div className="absolute inset-0 bg-brand-500/10 blur-[60px]" />

                        {/* Image or Fallback Icon */}
                        {productImage ? (
                            <img
                                src={productImage}
                                alt={productName}
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity relative z-10"
                            />
                        ) : (
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-xl transform md:rotate-6">
                                <Rocket size={40} className="text-brand-500" />
                            </div>
                        )}

                        {/* Overlay gradient - REMOVED */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r pointer-events-none z-20" /> */}
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative bg-[#0a0a0a]">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-brand-500" />
                            <span className="text-brand-500 font-bold text-xs uppercase tracking-widest">Coming Soon</span>
                        </div>

                        <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                            {productName}
                        </h3>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
                            We're crafting an extraordinary experience. Join the waitlist to be the first to know when we launch.
                        </p>

                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="btn-primary w-fit !rounded-md"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles size={18} />
                                Get Early Access
                            </span>
                            <div className="btn-primary-shine"></div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LaunchingSoonModal;
