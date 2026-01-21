import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, Mail } from "lucide-react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Data Collection",
            icon: Eye,
            content: "We collect information you provide directly to us, such as when you request a quote, subscribe to our newsletter, or communicate with us. This includes names, emails, and project context."
        },
        {
            title: "Cookies & Tracking",
            icon: Bell,
            content: "We use essential cookies to ensure our website functions correctly. We also use analytics tools (Firebase) to understand how you interact with our studio, helping us improve your experience."
        },
        {
            title: "GDPR Compliance",
            icon: Shield,
            content: "For users in the EU/EEA, we adhere to GDPR standards. You have the right to data portability, the right to be forgotten, and the right to object to processing of your personal data."
        },
        {
            title: "Data Security",
            icon: Lock,
            content: "All data is encrypted and stored securely within Firebase's enterprise-grade infrastructure. We implement strict access controls and regular security audits."
        },
        {
            title: "Your Rights",
            icon: FileText,
            content: "You can request a copy of your data or its deletion at any time by contacting us. We believe in complete transparency regarding your digital footprint."
        }
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center pt-40 pb-32 px-4 sm:px-6 lg:px-16">
            <SEO
                title="Privacy Policy"
                description="Your privacy is our priority. Learn how Techno Vanam handles your data with the highest level of care and security."
                keywords="Techno Vanam Privacy, Data Protection, Privacy Policy Studio"
            />
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <span className="text-brand-500 text-sm font-bold uppercase tracking-widest">Privacy Policy</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Your privacy is <br /> our priority.
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                        At Techno Vanam, we value your trust. This policy outlines how we collect, use, and protect your information to ensure a secure digital experience.
                    </p>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col sm:flex-row gap-6 sm:gap-10"
                        >
                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-brand-500 shadow-sm">
                                <section.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    {section.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact/Update Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-500">
                                <Bell size={20} />
                            </div>
                            <p className="text-sm text-gray-400 font-medium">
                                Last updated: January 2026
                            </p>
                        </div>

                        <a
                            href="mailto:official@technovanam.com"
                            className="flex items-center gap-3 text-white font-bold hover:text-brand-500 transition-colors"
                        >
                            <Mail size={18} />
                            official@technovanam.com
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-gray-400 text-center sm:text-left leading-relaxed">
                        We may update this policy periodically. Please check back for any updates to how we protect your information.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
