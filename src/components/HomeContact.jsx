import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Monitor, Smartphone, Code2, Palette, Layout, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const servicesList = [
    { name: "UI/UX Design", color: "text-brand-500", icon: Layout },
    { name: "Web Development", color: "text-brand-500", icon: Code2 },
    { name: "App Development", color: "text-brand-500", icon: Smartphone },
    { name: "Others", color: "text-brand-500", icon: MoreHorizontal },
];

import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const HomeContact = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [projectType, setProjectType] = useState("");
    const [deadline, setDeadline] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [otherServiceText, setOtherServiceText] = useState("");
    const [isSecret, setIsSecret] = useState(window.isSecretEnabled || (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'));
    const location = useLocation();

    useEffect(() => {
        const handleSecretChange = (e) => {
            setIsSecret(e.detail || (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'));
        };
        window.addEventListener('secretModeChanged', handleSecretChange);
        return () => window.removeEventListener('secretModeChanged', handleSecretChange);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailFromURL = params.get("email");
        if (emailFromURL) {
            setEmail(emailFromURL);
        }
    }, [location]);

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const countWords = (text) =>
        text.trim().split(/\s+/).filter(Boolean).length;

    const handleTextareaChange = (e) => {
        const text = e.target.value;
        if (countWords(text) <= 1000) {
            setMessage(text);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (
            !name.trim() ||
            !email.trim() ||
            selectedServices.length === 0 ||
            message.trim() === ""
        ) {
            setSubmissionStatus("error");
            return;
        }

        const formData = {
            name,
            email,
            company,
            website,
            services: selectedServices.map(s => s === "Others" ? `Others: ${otherServiceText}` : s).join(", "),
            projectType,
            deadline,
            message,
            submittedAt: serverTimestamp()
        };

        try {
            // Save to Firebase Firestore
            await addDoc(collection(db, "inquiries"), formData);

            // Send via FormSubmit
            const response = await fetch("https://formsubmit.co/ajax/official@technovanam.in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setSubmissionStatus("success");
                setName("");
                setEmail("");
                setCompany("");
                setWebsite("");
                setSelectedServices([]);
                setOtherServiceText("");
                setProjectType("");
                setDeadline("");
                setMessage("");
                setFormSubmitted(false);

                setTimeout(() => setSubmissionStatus(null), 3000);
            } else {
                setSubmissionStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmissionStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-8 sm:py-10 px-4 sm:px-6 lg:px-16 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#0a0a0a] rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-brand-500/30 overflow-hidden card-glow"
                >

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/3">
                            <span className="inline-block px-4 py-1.5 bg-brand-500/10 text-brand-500 text-sm font-bold rounded-full mb-6 tracking-wide">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                                Ready to start <br />
                                <span className="text-brand-500">a project?</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Fill out the form and our team will get back to you within 24 business hours to schedule a discovery call.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-500 shadow-sm border border-white/10">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Expert Team</h4>
                                        <p className="text-sm text-gray-400">Dedicated professionals for your project.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-500 shadow-sm border border-white/10">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Fast Response</h4>
                                        <p className="text-sm text-gray-400">We value your time and respond quickly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Right */}
                        <div className="w-full lg:w-2/3">
                            <form onSubmit={handleSubmit} className="space-y-10" autoComplete="off">
                                {/* Decoy inputs for browsers */}
                                <input type="text" style={{ display: "none" }} tabIndex="-1" />
                                <input type="email" style={{ display: "none" }} tabIndex="-1" />

                                {/* Form Status Messages */}
                                <AnimatePresence mode="wait">
                                    {submissionStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 border border-green-100"
                                        >
                                            <CheckCircle2 className="shrink-0" />
                                            <p className="font-medium text-sm sm:text-base">Message sent successfully! Our team will contact you soon.</p>
                                        </motion.div>
                                    )}
                                    {submissionStatus === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 border border-red-100"
                                        >
                                            <AlertCircle className="shrink-0" />
                                            <p className="font-medium text-sm sm:text-base">Please fill out all required fields or try again later.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-3">
                                        <label className="text-sm sm:text-base font-bold text-white ml-1">
                                            What's your name? <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onPaste={(e) => !isSecret && e.preventDefault()}
                                            onCopy={(e) => !isSecret && e.preventDefault()}
                                            onCut={(e) => !isSecret && e.preventDefault()}
                                            autoComplete={isSecret ? "on" : "new-password"}
                                            data-lpignore={isSecret ? "false" : "true"}
                                            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none text-white placeholder-gray-600 mt-2 ${formSubmitted && !name.trim()
                                                ? "border-red-500 bg-red-500/10"
                                                : "border-white/5 bg-white/5 focus:bg-white/10 focus:border-brand-500"
                                                }`}
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-3">
                                        <label className="text-sm sm:text-base font-bold text-white ml-1">
                                            What's your email? <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onPaste={(e) => !isSecret && e.preventDefault()}
                                            onCopy={(e) => !isSecret && e.preventDefault()}
                                            onCut={(e) => !isSecret && e.preventDefault()}
                                            autoComplete={isSecret ? "on" : "new-password"}
                                            data-lpignore={isSecret ? "false" : "true"}
                                            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none text-white placeholder-gray-600 mt-2 ${formSubmitted && !email.trim()
                                                ? "border-red-500 bg-red-500/10"
                                                : "border-white/5 bg-white/5 focus:bg-white/10 focus:border-brand-500"
                                                }`}
                                        />
                                    </div>

                                    {/* Company Input */}
                                    <div className="space-y-3">
                                        <label className="text-sm sm:text-base font-bold text-white ml-1">
                                            What's your company?
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Company name"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            onPaste={(e) => !isSecret && e.preventDefault()}
                                            onCopy={(e) => !isSecret && e.preventDefault()}
                                            onCut={(e) => !isSecret && e.preventDefault()}
                                            autoComplete={isSecret ? "on" : "new-password"}
                                            data-lpignore={isSecret ? "false" : "true"}
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-white/5 bg-white/5 focus:bg-white/10 focus:border-brand-500 transition-all outline-none text-white placeholder-gray-600 mt-2"
                                        />
                                    </div>

                                    {/* Website Input */}
                                    <div className="space-y-3">
                                        <label className="text-sm sm:text-base font-bold text-white ml-1">
                                            Current website URL
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="https://example.com"
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)}
                                            onPaste={(e) => !isSecret && e.preventDefault()}
                                            onCopy={(e) => !isSecret && e.preventDefault()}
                                            onCut={(e) => !isSecret && e.preventDefault()}
                                            autoComplete={isSecret ? "on" : "new-password"}
                                            data-lpignore={isSecret ? "false" : "true"}
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-white/5 bg-white/5 focus:bg-white/10 focus:border-brand-500 transition-all outline-none text-white placeholder-gray-600 mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Services Section */}
                                <div className="space-y-3">
                                    <label className="text-sm sm:text-base font-bold text-white ml-1">
                                        What services are you looking for? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                                        {servicesList.map((service, index) => {
                                            const isSelected = selectedServices.includes(service.name);
                                            return (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => toggleService(service.name)}
                                                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                                        ? "bg-brand-500 border-brand-500 text-black shadow-lg shadow-brand-500/20 scale-105 card-glow"
                                                        : "bg-white/5 border-white/5 text-gray-400 hover:border-brand-500/50 card-glow-hover"
                                                        }`}
                                                >
                                                    <div className={`mb-3 transition-all ${isSelected ? "text-black scale-110" : service.color}`}>
                                                        <service.icon size={32} strokeWidth={2.5} />
                                                    </div>
                                                    <span className={`text-xs sm:text-sm font-bold text-center ${isSelected ? 'text-black' : 'text-gray-400'}`}>
                                                        {service.name}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <AnimatePresence>
                                        {selectedServices.includes("Others") && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-4"
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Specify the service you're looking for..."
                                                    value={otherServiceText}
                                                    onChange={(e) => setOtherServiceText(e.target.value)}
                                                    className="w-full px-6 py-4 rounded-2xl border-2 border-brand-500/30 bg-white/5 focus:bg-white/10 focus:border-brand-500 transition-all outline-none text-white placeholder-gray-600"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {formSubmitted && selectedServices.length === 0 && (
                                        <p className="text-red-500 text-xs mt-1 ml-1 font-medium">Please select at least one service.</p>
                                    )}
                                </div>

                                {/* Project Type Section */}
                                <div className="space-y-3">
                                    <label className="text-sm sm:text-base font-bold text-white ml-1">
                                        What's the nature of your project?
                                    </label>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {["Full Project", "Design & UI/UX", "Development", "Strategic Retainer"].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setProjectType(type)}
                                                className={`px-4 sm:px-6 py-3 rounded-full border-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${projectType === type
                                                    ? "bg-brand-500 border-brand-500 text-black shadow-md"
                                                    : "bg-white/5 border-white/5 text-gray-400 hover:border-brand-500/50"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Deadline Section */}
                                <div className="space-y-3">
                                    <label className="text-sm sm:text-base font-bold text-white ml-1">
                                        What's your preferred timeline?
                                    </label>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {["Immediate", "1 – 2 Months", "3 – 6 Months", "Flexible"].map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setDeadline(option)}
                                                className={`px-4 sm:px-6 py-3 rounded-full border-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${deadline === option
                                                    ? "bg-brand-500 border-brand-500 text-black shadow-md"
                                                    : "bg-white/5 border-white/5 text-gray-400 hover:border-brand-500/50"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="space-y-3">
                                    <label className="text-sm sm:text-base font-bold text-white ml-1">
                                        Project Details <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us a little more about your project goals and requirements..."
                                        value={message}
                                        onChange={handleTextareaChange}
                                        onPaste={(e) => !isSecret && e.preventDefault()}
                                        onCopy={(e) => !isSecret && e.preventDefault()}
                                        onCut={(e) => !isSecret && e.preventDefault()}
                                        autoComplete={isSecret ? "on" : "new-password"}
                                        data-lpignore={isSecret ? "false" : "true"}
                                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none resize-none text-white placeholder-gray-600 mt-2 ${formSubmitted && message.trim() === ""
                                            ? "border-red-500 bg-red-500/10"
                                            : "border-white/5 bg-white/5 focus:bg-white/10 focus:border-brand-500"
                                            }`}
                                    />
                                    <div className="flex justify-end pr-2">
                                        <span className="text-xs text-gray-400 font-medium">
                                            {countWords(message)} / 1000 words
                                        </span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Send Message
                                            <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </span>
                                        <div className="btn-primary-shine"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeContact;
