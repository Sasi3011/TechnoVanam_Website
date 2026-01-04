import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, Mail } from "lucide-react";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Data Collection",
            icon: Eye,
            content: "We collect information you provide directly to us, such as when you request a quote, subscribe to our newsletter, or communicate with us. This may include your name, email address, and project details."
        },
        {
            title: "How We Use Your Information",
            icon: FileText,
            content: "We use the collected information to provide, maintain, and improve our services, communicate with you about projects, and send updates that may be relevant to your business interests."
        },
        {
            title: "Data Security",
            icon: Lock,
            content: "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your data is handled with the highest level of care."
        },
        {
            title: "Your Rights",
            icon: Shield,
            content: "You have the right to access, update, or delete your personal information at any time. We believe you should have full control over your digital footprint."
        }
    ];

    return (
        <div className="min-h-screen bg-[#F0F7FF] pt-40 pb-32 px-6 sm:px-10">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Privacy Policy</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Your privacy is <br /> our priority.
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
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
                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                <section.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
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
                    className="mt-20 pt-10 border-t border-gray-200"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Bell size={20} />
                            </div>
                            <p className="text-sm text-gray-400 font-medium">
                                Last updated: January 2026
                            </p>
                        </div>

                        <a
                            href="mailto:official@technovanam.com"
                            className="flex items-center gap-3 text-gray-900 font-bold hover:text-blue-600 transition-colors"
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
