import React from "react";
import { motion } from "framer-motion";
import { FileText, Gavel, Scale, ShieldAlert, Clock, RefreshCw } from "lucide-react";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
    const sections = [
        {
            title: "Agreement to Terms",
            icon: FileText,
            content: "By accessing and using Techno Vanam's services, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website and services."
        },
        {
            title: "Intellectual Property",
            icon: Scale,
            content: "All content, designs, code, and trademarks produced by Techno Vanam are the exclusive property of Techno Vanam unless otherwise specified in a separate project agreement."
        },
        {
            title: "Project Delivery",
            icon: Clock,
            content: "Estimates provided are based on project scope. While we strive for timely delivery, milestones depend on clear communication and timely feedback from the client."
        },
        {
            title: "User Obligations",
            icon: ShieldAlert,
            content: "Users agree not to use our services for any unlawful purposes, transmit harmful code, or attempt unauthorized access to our systems."
        },
        {
            title: "Dispute Resolution",
            icon: Gavel,
            content: "Any disputes arising from our services shall be governed by the laws of India, with jurisdiction in Coimbatore/Chennai courts."
        },
        {
            title: "Updates to Terms",
            icon: RefreshCw,
            content: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms."
        }
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center pt-40 pb-32 px-4 sm:px-6 lg:px-16">
            <SEO
                title="Terms & Conditions"
                description="Read Techno Vanam's Terms and Conditions. Understand your rights and obligations when working with our premium digital studio."
                keywords="Techno Vanam Terms, Service Agreement, Digital Studio Terms"
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
                        <span className="text-brand-500 text-sm font-bold uppercase tracking-widest">Legal</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Terms & <br /> Conditions.
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                        Welcome to Techno Vanam. These terms outline the rules and regulations for the use of our website and services.
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

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <p className="text-sm text-gray-400 text-center sm:text-left leading-relaxed">
                        Last updated: January 2026. For any questions regarding our terms, please contact us at <a href="mailto:official@technovanam.in" className="text-brand-500 underline">official@technovanam.in</a>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
