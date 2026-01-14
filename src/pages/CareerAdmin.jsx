import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Trash2,
    Edit2,
    Save,
    X,
    Briefcase,
    MapPin,
    Clock,
    CheckCircle2,
    AlertCircle,
    Eye,
    EyeOff,
    ChevronDown,
    ChevronUp,
    LayoutDashboard,
    LogOut,
    Lock
} from 'lucide-react';

const CareerAdmin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [isNoOpenings, setIsNoOpenings] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [isAddingMode, setIsAddingMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [newJob, setNewJob] = useState({
        title: '',
        type: 'Full-time',
        location: 'Remote',
        category: 'Design',
        description: '',
        perks: []
    });
    const [perkInput, setPerkInput] = useState('');

    // Load jobs from localStorage for persistence in this demo environment
    useEffect(() => {
        const savedJobs = localStorage.getItem('technovanam_jobs');
        const savedNoOpenings = localStorage.getItem('technovanam_no_openings');

        if (savedJobs) {
            setJobs(JSON.parse(savedJobs));
        } else {
            // Default data from your current careers page
            const defaultJobs = [
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
            setJobs(defaultJobs);
            localStorage.setItem('technovanam_jobs', JSON.stringify(defaultJobs));
        }

        if (savedNoOpenings) {
            setIsNoOpenings(JSON.parse(savedNoOpenings));
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password for demo purposes
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const saveToStorage = (updatedJobs) => {
        setJobs(updatedJobs);
        localStorage.setItem('technovanam_jobs', JSON.stringify(updatedJobs));
        // Trigger a custom event so the careers page can update
        window.dispatchEvent(new Event('jobsUpdated'));
    };

    const toggleNoOpenings = () => {
        const newState = !isNoOpenings;
        setIsNoOpenings(newState);
        localStorage.setItem('technovanam_no_openings', JSON.stringify(newState));
        window.dispatchEvent(new Event('jobsUpdated'));
    };

    const handleAddJob = (e) => {
        e.preventDefault();
        const jobToAdd = {
            ...newJob,
            id: Date.now(),
        };
        const updatedJobs = [...jobs, jobToAdd];
        saveToStorage(updatedJobs);
        setIsAddingMode(false);
        setNewJob({
            title: '',
            type: 'Full-time',
            location: 'Remote',
            category: 'Design',
            description: '',
            perks: []
        });
    };

    const handleDeleteJob = (id) => {
        if (window.confirm('Are you sure you want to delete this job opening?')) {
            const updatedJobs = jobs.filter(job => job.id !== id);
            saveToStorage(updatedJobs);
        }
    };

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const updatedJobs = jobs.map(job =>
            job.id === editingId ? { ...newJob, id: editingId } : job
        );
        saveToStorage(updatedJobs);
        setEditingId(null);
        setNewJob({
            title: '',
            type: 'Full-time',
            location: 'Remote',
            category: 'Design',
            description: '',
            perks: []
        });
    };

    const startEditing = (job) => {
        setEditingId(job.id);
        setNewJob(job);
        setIsAddingMode(true);
    };

    const addPerk = () => {
        if (perkInput.trim()) {
            setNewJob({ ...newJob, perks: [...newJob.perks, perkInput.trim()] });
            setPerkInput('');
        }
    };

    const removePerk = (index) => {
        const updatedPerks = newJob.perks.filter((_, i) => i !== index);
        setNewJob({ ...newJob, perks: updatedPerks });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-6">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 relative z-10 shadow-2xl"
                >
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-4 border border-brand-500/20">
                            <Lock size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-white text-center">Admin Access</h2>
                        <p className="text-gray-500 text-center mt-2">Manage job openings at Techno Vanam</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2 px-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-500 outline-none transition-all text-white"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-500 text-black font-black py-4 rounded-2xl hover:bg-brand-600 transition-all flex items-center justify-center gap-2"
                        >
                            Log In <ArrowRight size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-brand-500 font-bold mb-2">
                            <LayoutDashboard size={18} />
                            ADMIN DASHBOARD
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-white">Career Management</h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={toggleNoOpenings}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${isNoOpenings
                                ? "bg-red-500/10 text-red-500 border-red-500/20"
                                : "bg-brand-500/10 text-brand-500 border-brand-500/20"
                                }`}
                        >
                            {isNoOpenings ? <EyeOff size={18} /> : <Eye size={18} />}
                            {isNoOpenings ? "Showing No Openings" : "Currently Hiring"}
                        </button>

                        <button
                            onClick={() => {
                                setIsAddingMode(!isAddingMode);
                                if (editingId) {
                                    setEditingId(null);
                                    setNewJob({ title: '', type: 'Full-time', location: 'Remote', category: 'Design', description: '', perks: [] });
                                }
                            }}
                            className="flex items-center gap-2 bg-brand-500 text-black px-6 py-3 rounded-full font-bold hover:bg-brand-600 transition-all"
                        >
                            {isAddingMode ? <X size={18} /> : <Plus size={18} />}
                            {isAddingMode ? "Cancel" : "Add New Job"}
                        </button>

                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    {isAddingMode && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 sticky top-32">
                                <h2 className="text-2xl font-bold mb-6 text-white">
                                    {editingId ? "Edit Job" : "New Position"}
                                </h2>

                                <form onSubmit={editingId ? handleUpdateJob : handleAddJob} className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Job Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={newJob.title}
                                            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-500 outline-none text-white transition-all"
                                            placeholder="e.g. Senior Frontend Developer"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Type</label>
                                            <select
                                                value={newJob.type}
                                                onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-500 outline-none text-white transition-all appearance-none"
                                            >
                                                <option value="Full-time">Full-time</option>
                                                <option value="Internship">Internship</option>
                                                <option value="Part-time">Part-time</option>
                                                <option value="Contract">Contract</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
                                            <select
                                                value={newJob.category}
                                                onChange={(e) => setNewJob({ ...newJob, category: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-500 outline-none text-white transition-all appearance-none"
                                            >
                                                <option value="Design">Design</option>
                                                <option value="Development">Development</option>
                                                <option value="Intern">Intern</option>
                                                <option value="Marketing">Marketing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Location</label>
                                        <input
                                            type="text"
                                            value={newJob.location}
                                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-500 outline-none text-white transition-all"
                                            placeholder="e.g. Remote"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                        <textarea
                                            required
                                            rows="4"
                                            value={newJob.description}
                                            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-500 outline-none text-white transition-all resize-none"
                                            placeholder="Job responsibilities and requirements..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Perks</label>
                                        <div className="flex gap-2 mb-3">
                                            <input
                                                type="text"
                                                value={perkInput}
                                                onChange={(e) => setPerkInput(e.target.value)}
                                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-brand-500 outline-none text-white transition-all"
                                                placeholder="e.g. Health Insurance"
                                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPerk())}
                                            />
                                            <button
                                                type="button"
                                                onClick={addPerk}
                                                className="bg-brand-500 text-black p-2 rounded-xl"
                                            >
                                                <Plus size={20} />
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {newJob.perks.map((perk, index) => (
                                                <span key={index} className="flex items-center gap-1.5 bg-brand-500/10 text-brand-500 border border-brand-500/20 px-3 py-1 rounded-lg text-xs font-medium">
                                                    {perk}
                                                    <X size={14} className="cursor-pointer" onClick={() => removePerk(index)} />
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-brand-500 text-black font-black py-4 rounded-xl hover:bg-brand-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Save size={20} />
                                        {editingId ? "Update Job" : "Publish Job"}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}

                    {/* List Section */}
                    <div className={isAddingMode ? "lg:col-span-2" : "lg:col-span-3"}>
                        <div className="space-y-6">
                            {isNoOpenings && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-[2rem] p-6 flex items-center gap-4 text-red-500">
                                    <AlertCircle size={24} />
                                    <div>
                                        <p className="font-bold">Hiring is currently disabled.</p>
                                        <p className="text-sm opacity-80">The careers page will show "No current openings". Jobs below are hidden.</p>
                                    </div>
                                </div>
                            )}

                            {jobs.length === 0 ? (
                                <div className="text-center py-20 bg-[#0a0a0a] border border-dashed border-white/10 rounded-[2.5rem]">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
                                        <Briefcase size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-400">No jobs posted yet</h3>
                                    <p className="text-gray-600 mt-2">Click "Add New Job" to create your first opening.</p>
                                </div>
                            ) : (
                                jobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 group hover:border-brand-500/30 transition-all"
                                    >
                                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.type === "Internship"
                                                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                                        : "bg-brand-500/10 text-brand-500 border border-brand-500/20"
                                                        }`}>
                                                        {job.type}
                                                    </span>
                                                    <span className="text-gray-500 text-xs flex items-center gap-1">
                                                        <MapPin size={12} /> {job.location}
                                                    </span>
                                                    <span className="text-gray-500 text-xs flex items-center gap-1">
                                                        <Tag size={12} /> {job.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-4">{job.title}</h3>
                                                <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                                                    {job.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.perks.map((perk, i) => (
                                                        <span key={i} className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded-lg border border-white/5">
                                                            • {perk}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-row lg:flex-col gap-3 justify-end lg:justify-start">
                                                <button
                                                    onClick={() => startEditing(job)}
                                                    className="p-3 bg-white/5 rounded-xl text-blue-400 hover:bg-blue-400/10 transition-colors"
                                                    title="Edit Position"
                                                >
                                                    <Edit2 size={20} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteJob(job.id)}
                                                    className="p-3 bg-white/5 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors"
                                                    title="Delete Position"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Arrow icon helper
const ArrowRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y2="12" x2="19" y1="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const Tag = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
);

export default CareerAdmin;
