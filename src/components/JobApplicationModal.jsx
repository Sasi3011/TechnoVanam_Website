import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Upload, Link as LinkIcon } from "lucide-react";

const JobApplicationModal = ({ role, isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [resume, setResume] = useState(""); // URL or Link
    const [note, setNote] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !resume) {
            setSubmissionStatus("error");
            return;
        }

        setIsSubmitting(true);
        const formData = {
            subject: `Job Application: ${role.title}`,
            name,
            email,
            phone,
            role: role.title,
            type: role.type,
            portfolio,
            resume_link: resume,
            note
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/official@technovanam.in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus("success");
                setTimeout(() => {
                    onClose();
                    setSubmissionStatus(null);
                }, 3000);
            } else {
                setSubmissionStatus("error");
            }
        } catch (error) {
            setSubmissionStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden card-glow"
                    >
                        <div className="p-8 sm:p-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-500 text-[10px] font-bold rounded-full mb-3 tracking-wider border border-brand-500/20 uppercase">
                                        APPLYING FOR
                                    </span>
                                    <h2 className="text-3xl font-black text-white">{role.title}</h2>
                                    <p className="text-gray-400 text-sm mt-1">{role.type} • {role.location}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <AnimatePresence mode="wait">
                                    {submissionStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-brand-500/10 text-brand-500 p-4 rounded-2xl flex items-center gap-3 border border-brand-500/20"
                                        >
                                            <CheckCircle2 size={20} />
                                            <p className="font-bold text-sm">Application sent successfully!</p>
                                        </motion.div>
                                    )}
                                    {submissionStatus === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-red-500/10 text-red-500 p-4 rounded-2xl flex items-center gap-3 border border-red-500/20"
                                        >
                                            <AlertCircle size={20} />
                                            <p className="font-bold text-sm">Please fill the required fields correctly.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 ml-1">Full Name *</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-brand-500/50 transition-all text-sm"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 ml-1">Email Address *</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-brand-500/50 transition-all text-sm"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 ml-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-brand-500/50 transition-all text-sm"
                                            placeholder="+91 00000 00000"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 ml-1">Portfolio Link</label>
                                        <input
                                            type="url"
                                            value={portfolio}
                                            onChange={(e) => setPortfolio(e.target.value)}
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-brand-500/50 transition-all text-sm"
                                            placeholder="https://behance.net/..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 ml-1">Resume Link (G-Drive/DropBox/Link) *</label>
                                    <div className="relative">
                                        <input
                                            type="url"
                                            value={resume}
                                            onChange={(e) => setResume(e.target.value)}
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 pl-12 text-white outline-none focus:border-brand-500/50 transition-all text-sm"
                                            placeholder="Link to your CV"
                                            required
                                        />
                                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 ml-1">Add a note</label>
                                    <textarea
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-brand-500/50 transition-all text-sm resize-none h-24"
                                        placeholder="Tell us why you're a great fit..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn-primary w-full py-4 flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
                                >
                                    <span className="relative z-10 flex items-center gap-2 justify-center">
                                        {isSubmitting ? "Sending..." : "Submit Application"}
                                        <Send size={18} />
                                    </span>
                                    <div className="btn-primary-shine"></div>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JobApplicationModal;
