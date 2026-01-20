import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    MapPin,
    Clock,
    Briefcase,
    GraduationCap,
    Search,
    CheckCircle2,
    Sparkles,
    Users,
    Filter
} from "lucide-react";
import HomeContact from "../components/HomeContact";
import JobApplicationModal from "../components/JobApplicationModal";

import { db } from "../firebase";
import { collection, onSnapshot, doc } from "firebase/firestore";

const DEFAULT_ROLES = [
    {
        id: 1,
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Remote",
        category: "Design",
        description: "We are looking for a creative UI/UX Designer to craft beautiful, intuitive, and user-centered digital experiences.",
        perks: ["Remote Work", "Creative Freedom", "Growth Opportunity"],
    }
];



const Careers = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRole, setSelectedRole] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const [isNoOpenings, setIsNoOpenings] = useState(false);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    useEffect(() => {
        // Real-time listener for jobs
        const unsubscribeJobs = onSnapshot(collection(db, 'jobs'), (snapshot) => {
            const jobsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setRoles(jobsList);
        });

        // Real-time listener for settings
        const unsubscribeSettings = onSnapshot(doc(db, 'settings', 'careers'), (doc) => {
            if (doc.exists()) {
                setIsNoOpenings(doc.data().isNoOpenings);
            } else {
                setIsNoOpenings(false);
            }
        });

        return () => {
            unsubscribeJobs();
            unsubscribeSettings();
        };
    }, []);

    const categories = ["All", "Design", "Development", "Intern", "Marketing"];

    const filteredRoles = isNoOpenings ? [] : roles.filter(role => {
        const matchesCategory = activeCategory === "All" || role.category === activeCategory;
        const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleApplyClick = (role) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('culture-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-16 pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-transparent flex items-center justify-center overflow-hidden h-[100dvh] lg:h-screen">
                <div className="text-center max-w-7xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6 tracking-tight text-white text-center">
                        Grow Your Career at <span className="text-brand-500">Techno Vanam</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We're a team of designers, developers, and creators on a mission to build the digital future. Join us and make an impact.
                    </p>
                </div>

                <button
                    onClick={scrollToNextSection}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
                    aria-label="Scroll to next section"
                >
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <div className="w-10 h-10 rounded-full border-2 border-brand-500 flex items-center justify-center hover:bg-brand-500 transition-all duration-300">
                            <svg
                                className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </div>
                    </div>
                </button>
            </section>

            {/* Culture Section */}
            <section id="culture-section" className="px-4 sm:px-6 lg:px-16 py-16 md:py-20 lg:py-24 bg-transparent flex flex-col justify-center">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-[#0a0a0a] p-6 sm:p-10 rounded-[2.5rem] border border-brand-500/30 card-glow">
                            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                                <CheckCircle2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We push the boundaries of what's possible, encouraging our team to experiment with new ideas and technologies.
                            </p>
                        </div>
                        <div className="bg-[#0a0a0a] p-6 sm:p-10 rounded-[2.5rem] border border-brand-500/30 card-glow">
                            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Collaborative Spirit</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We believe the best work happens when different perspectives come together in a supportive environment.
                            </p>
                        </div>
                        <div className="bg-[#0a0a0a] p-6 sm:p-10 rounded-[2.5rem] border border-brand-500/30 card-glow">
                            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                                <ArrowRight size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Always Growing</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Continuous learning is part of our DNA. We provide opportunities for you to expand your skills and career.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section className="px-4 sm:px-6 lg:px-16 py-16 md:py-20 lg:py-24 w-full" id="open-roles">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 md:mb-16">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                                Open <span className="text-brand-500">Positions</span>
                            </h2>
                            <p className="text-gray-400 text-lg">Find the role that fits your passion.</p>
                        </div>

                        {/* Filter & Search */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative w-full sm:w-auto">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search roles..."
                                    className="bg-white/5 border border-white/10 rounded-full px-12 py-3 outline-none focus:border-brand-500 transition-all text-white w-full sm:w-64"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Desktop Filters */}
                            <div className="hidden xl:flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                            ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20"
                                            : "bg-white/5 border border-white/10 text-gray-400 hover:border-brand-500/50"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Filter Button */}
                            <div className="xl:hidden relative">
                                <button
                                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                                    className="w-full flex items-center justify-between px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 font-bold"
                                >
                                    <span className="flex items-center gap-2">
                                        <Filter size={18} />
                                        {activeCategory === "All" ? "Filter by Category" : activeCategory}
                                    </span>
                                    <div className={`transition-transform duration-300 ${isMobileFilterOpen ? "rotate-180" : ""}`}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isMobileFilterOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 right-0 mt-2 bg-[#111] border border-white/10 rounded-2xl p-2 z-50 shadow-xl overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {categories.map(cat => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => {
                                                            setActiveCategory(cat);
                                                            setIsMobileFilterOpen(false);
                                                        }}
                                                        className={`px-4 py-3 rounded-xl text-sm font-bold text-left transition-colors flex items-center justify-between ${activeCategory === cat
                                                            ? "bg-brand-500/10 text-brand-500"
                                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                                            }`}
                                                    >
                                                        {cat}
                                                        {activeCategory === cat && <CheckCircle2 size={16} />}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredRoles.map((role) => (
                                <motion.div
                                    key={role.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0a0a0a] rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-brand-500/20 hover:border-brand-500/40 transition-colors group card-glow card-glow-hover"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${role.type === "Internship" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "bg-brand-500/10 text-brand-500 border border-brand-500/20"
                                                    }`}>
                                                    {role.type}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                                                    <MapPin size={14} />
                                                    {role.location}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                                                    <Briefcase size={14} />
                                                    {role.category}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brand-500 transition-colors">
                                                {role.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                                {role.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {(role.perks || []).map(perk => (
                                                    <span key={perk} className="text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                                        • {perk}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-auto">
                                            <button
                                                onClick={() => handleApplyClick(role)}
                                                className="btn-primary w-full sm:w-auto flex items-center justify-center px-10"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    Apply Now <ArrowRight size={18} />
                                                </span>
                                                <div className="btn-primary-shine"></div>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isNoOpenings ? (
                            <div className="text-center py-20 px-6 bg-[#0a0a0a] rounded-[2.5rem] border border-dashed border-white/10">
                                <Search className="w-16 h-16 text-gray-700 mx-auto mb-6" />
                                <h3 className="text-3xl font-black text-white mb-4">No Current Openings</h3>
                                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                                    We are not actively hiring at the moment, but we are always looking for exceptional talent. Feel free to check back later!
                                </p>
                            </div>
                        ) : filteredRoles.length === 0 && (
                            <div className="text-center py-20 px-6 bg-[#0a0a0a] rounded-[2.5rem] border border-dashed border-white/10">
                                <p className="text-xl text-gray-500 font-medium">No positions found matching your criteria.</p>
                                <button
                                    onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                    className="mt-4 text-brand-500 hover:underline font-bold"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Intern Section CTA */}
            <section className="px-4 sm:px-6 lg:px-16 py-16 md:py-20 lg:py-24 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0a0a0a] rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-20 border border-brand-500/30 relative overflow-hidden card-glow">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-brand-500/10 text-brand-500 text-sm font-bold rounded-full mb-6 tracking-wide border border-brand-500/20">
                                    INTERN PROGRAM
                                </span>
                                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-8">
                                    Student? Start your <br />
                                    <span className="text-brand-500">Journey Here.</span>
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    We offer unique internship opportunities for students looking to gain hands-on experience in design, development, and social media strategy. Build your portfolio with real projects.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-black text-white">3+</span>
                                        <span className="text-gray-500 text-sm">Months duration</span>
                                    </div>
                                    <div className="w-[1px] h-12 bg-white/10" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-black text-white">100%</span>
                                        <span className="text-gray-500 text-sm">Remote possible</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-brand-500/5 p-8 rounded-[2rem] border border-brand-500/10">
                                <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                    <GraduationCap className="text-brand-500" /> What we look for:
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Passionate about design & tech",
                                        "Eager to learn and grow",
                                        "Good communication skills",
                                        "Ready to work on real-world projects"
                                    ].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Background blur */}
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full" />
                    </div>
                </div>
            </section >

            <HomeContact />

            {
                selectedRole && (
                    <JobApplicationModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        role={selectedRole}
                    />
                )
            }
        </div>
    );
};

export default Careers;
