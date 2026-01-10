import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const servicesList = [
    { name: "Web Design", color: "border-red-500", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825592/Web_Design_Service_Contact_lbyojo.png" },
    { name: "UI/UX Design", color: "border-green-500", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825592/UX_Design_Service_Contact_pxltn3.png" },
    { name: "Development", color: "border-brand-500", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825593/Development_Service_Contact_f3lrum.png" },
    { name: "Branding", color: "border-yellow-400", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825592/Branding_Service_Contact_y7thya.png" },
];

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
    const location = useLocation();

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

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("company", company);
        formData.append("website", website);
        formData.append("services", selectedServices.join(", "));
        formData.append("projectType", projectType);
        formData.append("deadline", deadline);
        formData.append("message", message);

        try {
            const response = await fetch("https://formspree.io/f/xkgbdaen", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSubmissionStatus("success");
                setName("");
                setEmail("");
                setCompany("");
                setWebsite("");
                setSelectedServices([]);
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#f7fff0] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-brand-50/50 overflow-hidden"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/3">
                            <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-500 text-sm font-bold rounded-full mb-6 tracking-wide">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
                                Ready to start <br />
                                <span className="text-brand-500">a project?</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                Fill out the form and our team will get back to you within 24 business hours to schedule a discovery call.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 shadow-sm border border-brand-100/50">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Expert Team</h4>
                                        <p className="text-sm text-gray-500">Dedicated professionals for your project.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 shadow-sm border border-brand-100/50">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fast Response</h4>
                                        <p className="text-sm text-gray-500">We value your time and respond quickly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Right */}
                        <div className="w-full lg:w-2/3">
                            <form onSubmit={handleSubmit} className="space-y-8">
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
                                    <div className="space-y-2">
                                        <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                            What's your name? <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none text-gray-800 placeholder-gray-400 ${formSubmitted && !name.trim()
                                                ? "border-red-500 bg-red-50/10"
                                                : "border-gray-50 bg-gray-50 focus:bg-white focus:border-brand-500"
                                                }`}
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                            What's your email? <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none text-gray-800 placeholder-gray-400 ${formSubmitted && !email.trim()
                                                ? "border-red-500 bg-red-50/10"
                                                : "border-gray-50 bg-gray-50 focus:bg-white focus:border-brand-500"
                                                }`}
                                        />
                                    </div>

                                    {/* Company Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                            What's your company?
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Company name"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-brand-500 transition-all outline-none text-gray-800 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Website Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                            Current website URL
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="https://example.com"
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)}
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-brand-500 transition-all outline-none text-gray-800 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Services Section */}
                                <div className="space-y-4">
                                    <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                        What services are you looking for? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {servicesList.map((service, index) => {
                                            const isSelected = selectedServices.includes(service.name);
                                            return (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => toggleService(service.name)}
                                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                                        ? "bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-200 scale-105"
                                                        : "bg-white border-gray-100 text-gray-600 hover:border-brand-200"
                                                        }`}
                                                >
                                                    <img
                                                        src={service.image}
                                                        alt={service.name}
                                                        className={`w-12 h-12 mb-3 object-contain rounded-lg transition-all ${isSelected ? "brightness-0 invert" : ""}`}
                                                    />
                                                    <span className="text-xs sm:text-sm font-bold text-center">
                                                        {service.name}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {formSubmitted && selectedServices.length === 0 && (
                                        <p className="text-red-500 text-xs mt-1 ml-1 font-medium">Please select at least one service.</p>
                                    )}
                                </div>

                                {/* Project Type Section */}
                                <div className="space-y-4">
                                    <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                        What kind of project is this?
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        {["One-time project", "Ongoing maintenance", "Both"].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setProjectType(type)}
                                                className={`px-6 py-3 rounded-full border-2 text-sm font-bold transition-all ${projectType === type
                                                    ? "bg-brand-500 border-brand-500 text-white shadow-md"
                                                    : "bg-white border-gray-100 text-gray-600 hover:border-brand-200"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Deadline Section */}
                                <div className="space-y-4">
                                    <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                        What is your project deadline?
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        {["ASAP", "1 month", "2 – 3 months", "3+ months"].map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setDeadline(option)}
                                                className={`px-6 py-3 rounded-full border-2 text-sm font-bold transition-all ${deadline === option
                                                    ? "bg-brand-500 border-brand-500 text-white shadow-md"
                                                    : "bg-white border-gray-100 text-gray-600 hover:border-brand-200"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="space-y-2">
                                    <label className="text-sm sm:text-base font-bold text-gray-800 ml-1">
                                        Project Details <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us a little more about your project goals and requirements..."
                                        value={message}
                                        onChange={handleTextareaChange}
                                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none resize-none text-gray-800 placeholder-gray-400 ${formSubmitted && message.trim() === ""
                                            ? "border-red-500 bg-red-50/10"
                                            : "border-gray-50 bg-gray-50 focus:bg-white focus:border-brand-500"
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
                                        className="group relative w-full sm:w-auto px-12 py-5 bg-brand-500 text-white rounded-2xl font-black text-lg overflow-hidden transition-all duration-300 hover:bg-brand-600 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand-100 flex items-center justify-center gap-3"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                                        <span className="relative z-10 flex items-center gap-2">
                                            Send Message
                                            <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </span>
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
