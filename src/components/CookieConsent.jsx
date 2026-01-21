import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[9999]"
                >
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Privacy Context</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    We use essential cookies and focus on privacy-first analytics to build premium digital experiences. By continuing, you agree to our <Link to="/privacy" className="text-white underline hover:text-brand-500 transition-colors">Privacy Policy</Link>.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-white text-black text-xs font-bold py-3 rounded-2xl hover:bg-brand-500 transition-all duration-300"
                            >
                                I Understand
                            </button>
                            <Link
                                to="/terms"
                                className="flex-1 bg-white/5 text-white text-xs font-bold py-3 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                Studio Terms
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
