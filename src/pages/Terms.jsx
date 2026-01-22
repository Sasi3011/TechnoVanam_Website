import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail, Clock } from "lucide-react";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center pt-40 pb-32 px-4 sm:px-6 lg:px-16">
            <SEO
                title="Terms & Conditions"
                description="Terms and Conditions page for Techno Vanam. Content is currently being prepared."
                keywords="Techno Vanam Terms, Service Agreement, Digital Studio Terms"
            />
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <span className="text-brand-500 text-sm font-bold uppercase tracking-widest">Legal</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                        Our Terms and Conditions are currently being prepared and will be available soon.
                    </p>
                </motion.div>

                {/* Temporary Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sm:p-12 text-center"
                >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500">
                        <Clock size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Content Coming Soon</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
                        We are currently working on our comprehensive Terms and Conditions. This page will be updated with detailed information about the rules and regulations for using our website and services.
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                        For any questions regarding our terms, please contact us:
                    </p>
                    <a
                        href="mailto:official@technovanam.in"
                        className="inline-flex items-center gap-3 text-brand-500 font-bold hover:text-brand-400 transition-colors"
                    >
                        <Mail size={18} />
                        official@technovanam.in
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
