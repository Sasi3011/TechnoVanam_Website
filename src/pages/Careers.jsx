import React, { useState } from "react";
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
    Users
} from "lucide-react";
import HomeContact from "../components/HomeContact";
import JobApplicationModal from "../components/JobApplicationModal";

const rolesData = [
    {
        id: 1,
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Remote",
        category: "Design",
        description: "We are looking for a creative UI/UX Designer to craft beautiful, intuitive, and user-centered digital experiences.",
        perks: ["Remote Work", "Creative Freedom", "Growth Opportunity"],
    },
    {
        id: 2,
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote / Hybrid",
        category: "Development",
        description: "Join our tech team to build high-performance, responsive websites and web applications using modern frameworks.",
        perks: ["Latest Tech Stack", "Modern Workflow", "Collaborative Team"],
    },
    {
        id: 3,
        title: "Graphic Design Intern",
        type: "Internship",
        location: "Remote",
        category: "Intern",
        description: "A 3-month internship for aspiring graphic designers to work on real-world branding and social media projects.",
        perks: ["Mentorship", "Portfolio Building", "Stipend Provided"],
    },
    {
        id: 4,
        title: "Social Media Intern",
        type: "Internship",
        location: "Remote",
        category: "Intern",
        description: "Help us manage and grow our brand presence across social platforms through creative content and strategy.",
        perks: ["Creative Projects", "Brand Exposure", "Skill Development"],
    },
    {
        id: 5,
        title: "Backend Development Intern",
        type: "Internship",
        location: "Remote",
        category: "Intern",
        description: "Work with our engineering team on server-side logic, database management, and API integrations.",
        perks: ["Real-world Experience", "Backend Mastery", "Mentorship"],
    }
];

const Careers = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRole, setSelectedRole] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categories = ["All", "Design", "Development", "Intern"];

    const filteredRoles = rolesData.filter(role => {
        const matchesCategory = activeCategory === "All" || role.category === activeCategory;
        const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleApplyClick = (role) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Hero Section */}
            <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 text-brand-500 text-sm font-bold rounded-full mb-6 tracking-wide border border-brand-500/20">
                            <Sparkles size={16} />
                            JOIN OUR MISSION
                        </span>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
                            Grow Your Career at <br />
                            <span className="text-brand-500">Techno Vanam</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We're a team of designers, developers, and creators on a mission to build the digital future. Join us and make an impact.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Culture Section */}
            <section className="px-6 py-20 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/10 card-glow">
                            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                                <CheckCircle2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We push the boundaries of what's possible, encouraging our team to experiment with new ideas and technologies.
                            </p>
                        </div>
                        <div className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/10 card-glow">
                            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Collaborative Spirit</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We believe the best work happens when different perspectives come together in a supportive environment.
                            </p>
                        </div>
                        <div className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/10 card-glow">
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
            <section className="px-6 py-20 lg:py-32 w-full" id="open-roles">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                                Open <span className="text-brand-500">Positions</span>
                            </h2>
                            <p className="text-gray-400 text-lg">Find the role that fits your passion.</p>
                        </div>

                        {/* Filter & Search */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search roles..."
                                    className="bg-white/5 border border-white/10 rounded-full px-12 py-3 outline-none focus:border-brand-500 transition-all text-white w-full sm:w-64"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
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
                                    className="bg-[#0a0a0a] rounded-[2.5rem] p-8 sm:p-10 border border-white/10 hover:border-brand-500/40 transition-colors group card-glow card-glow-hover"
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
                                                {role.perks.map(perk => (
                                                    <span key={perk} className="text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                                        • {perk}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                onClick={() => handleApplyClick(role)}
                                                className="btn-primary flex items-center justify-center px-10"
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

                        {filteredRoles.length === 0 && (
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
            <section className="px-6 py-20 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0a0a0a] rounded-[3rem] p-10 sm:p-20 border border-white/10 relative overflow-hidden card-glow">
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
            </section>

            <HomeContact />

            {selectedRole && (
                <JobApplicationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    role={selectedRole}
                />
            )}
        </div>
    );
};

export default Careers;
