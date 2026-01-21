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
    Lock,
    Users,
    Mail,
    ArrowRight,
    ExternalLink,
    Calendar,
    MessageSquare,
    Globe
} from 'lucide-react';
import { db, auth } from '../firebase';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    setDoc,
    getDoc,
    query,
    orderBy
} from 'firebase/firestore';

const CareerAdmin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('official@technovanam.in');
    const [password, setPassword] = useState('TechnoVanam@123!@#');
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('jobs'); // 'jobs', 'applications', 'inquiries'
    const [isNoOpenings, setIsNoOpenings] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [applications, setApplications] = useState([]);
    const [inquiries, setInquiries] = useState([]);
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Load jobs and settings from Firestore
    useEffect(() => {
        if (!isAuthenticated) return;

        // Real-time listener for jobs
        const unsubscribeJobs = onSnapshot(collection(db, 'jobs'), (snapshot) => {
            const jobsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setJobs(jobsList);
        });

        // Real-time listener for settings
        const unsubscribeSettings = onSnapshot(doc(db, 'settings', 'careers'), (doc) => {
            if (doc.exists()) {
                setIsNoOpenings(doc.data().isNoOpenings);
            } else {
                setDoc(doc.ref, { isNoOpenings: false });
            }
        });

        // Real-time listener for applications
        const qApps = query(collection(db, 'applications'), orderBy('submittedAt', 'desc'));
        const unsubscribeApplications = onSnapshot(qApps, (snapshot) => {
            const appsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setApplications(appsList);
        });

        // Real-time listener for inquiries
        const qInquiries = query(collection(db, 'inquiries'), orderBy('submittedAt', 'desc'));
        const unsubscribeInquiries = onSnapshot(qInquiries, (snapshot) => {
            const inquiriesList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setInquiries(inquiriesList);
        });

        return () => {
            unsubscribeJobs();
            unsubscribeSettings();
            unsubscribeApplications();
            unsubscribeInquiries();
        };
    }, [isAuthenticated]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Login error:", error);
            let errorMessage = 'Invalid credentials';
            
            // Provide more specific error messages
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'User not found. Please create the admin user in Firebase Console first.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password. Please check your password.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Please try again later.';
            } else if (error.code === 'auth/network-request-failed') {
                errorMessage = 'Network error. Please check your internet connection.';
            }
            
            alert(errorMessage);
        }
    };

    const toggleNoOpenings = async () => {
        try {
            const newState = !isNoOpenings;
            await setDoc(doc(db, 'settings', 'careers'), { isNoOpenings: newState });
        } catch (error) {
            console.error("Error toggling no openings state:", error);
            alert("Failed to update status");
        }
    };

    const handleAddJob = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'jobs'), newJob);
            setIsAddingMode(false);
            setNewJob({
                title: '',
                type: 'Full-time',
                location: 'Remote',
                category: 'Design',
                description: '',
                perks: []
            });
        } catch (error) {
            console.error("Error adding job:", error);
            alert("Failed to add job");
        }
    };

    const handleDeleteJob = async (id) => {
        if (window.confirm('Are you sure you want to delete this job opening?')) {
            try {
                await deleteDoc(doc(db, 'jobs', id));
            } catch (error) {
                console.error("Error deleting job:", error);
                alert("Failed to delete job");
            }
        }
    };

    const handleDeleteSubmission = async (collectionName, id) => {
        if (window.confirm('Are you sure you want to delete this submission?')) {
            try {
                await deleteDoc(doc(db, collectionName, id));
            } catch (error) {
                console.error("Error deleting submission:", error);
                alert("Failed to delete submission");
            }
        }
    };

    const handleUpdateJob = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'jobs', editingId), newJob);
            setEditingId(null);
            setNewJob({
                title: '',
                type: 'Full-time',
                location: 'Remote',
                category: 'Design',
                description: '',
                perks: []
            });
            setIsAddingMode(false);
        } catch (error) {
            console.error("Error updating job:", error);
            alert("Failed to update job");
        }
    };

    const startEditing = (job) => {
        setEditingId(job.id);
        const { id, ...jobData } = job;
        setNewJob(jobData);
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

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-16">
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
                        <p className="text-gray-500 text-center mt-2">Manage Techno Vanam Submissions</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2 px-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-500 outline-none transition-all text-white"
                                placeholder="official@technovanam.in"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2 px-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-500 outline-none transition-all text-white"
                                placeholder="••••••••"
                                required
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

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate();
        return date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-brand-500 font-bold mb-2">
                            <LayoutDashboard size={18} />
                            ADMIN DASHBOARD
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-white">
                            {activeTab === 'jobs' ? 'Career Management' : activeTab === 'applications' ? 'Job Applications' : 'Contact Inquiries'}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {activeTab === 'jobs' && (
                            <>
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
                            </>
                        )}

                        <button
                            onClick={() => signOut(auth)}
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                        onClick={() => setActiveTab('jobs')}
                        className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 border ${activeTab === 'jobs'
                            ? "bg-brand-500 text-black border-brand-500 shadow-lg shadow-brand-500/20"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-brand-500/50"
                            }`}
                    >
                        <Briefcase size={18} />
                        Job Roles
                        <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{jobs.length}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('applications')}
                        className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 border ${activeTab === 'applications'
                            ? "bg-brand-500 text-black border-brand-500 shadow-lg shadow-brand-500/20"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-brand-500/50"
                            }`}
                    >
                        <Users size={18} />
                        Applications
                        <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{applications.length}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('inquiries')}
                        className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 border ${activeTab === 'inquiries'
                            ? "bg-brand-500 text-black border-brand-500 shadow-lg shadow-brand-500/20"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-brand-500/50"
                            }`}
                    >
                        <Mail size={18} />
                        Inquiries
                        <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{inquiries.length}</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {activeTab === 'jobs' ? (
                        <>
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
                                        <div className="bg-red-500/10 border border-red-500/20 rounded-[2rem] p-6 flex items-center gap-4 text-red-500 text-sm">
                                            <AlertCircle size={20} />
                                            <p>Hiring is disabled. "No openings" message is active.</p>
                                        </div>
                                    )}

                                    {jobs.length === 0 ? (
                                        <div className="text-center py-20 bg-[#0a0a0a] border border-dashed border-white/10 rounded-[2.5rem]">
                                            <Briefcase size={40} className="mx-auto mb-4 text-gray-700" />
                                            <h3 className="text-xl font-bold text-gray-500">No jobs posted yet</h3>
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
                                                        <p className="text-gray-400 text-sm line-clamp-2 mb-6">{job.description}</p>
                                                    </div>

                                                    <div className="flex flex-row lg:flex-col gap-3 justify-end lg:justify-start">
                                                        <button
                                                            onClick={() => startEditing(job)}
                                                            className="p-3 bg-white/5 rounded-xl text-blue-400 hover:bg-blue-400/10 transition-colors"
                                                        >
                                                            <Edit2 size={20} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteJob(job.id)}
                                                            className="p-3 bg-white/5 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors"
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
                        </>
                    ) : activeTab === 'applications' ? (
                        <div className="lg:col-span-3 space-y-6">
                            {applications.length === 0 ? (
                                <div className="text-center py-20 bg-[#0a0a0a] border border-dashed border-white/10 rounded-[2.5rem]">
                                    <Users size={40} className="mx-auto mb-4 text-gray-700" />
                                    <h3 className="text-xl font-bold text-gray-500">No applications received yet</h3>
                                </div>
                            ) : (
                                applications.map((app) => (
                                    <div key={app.id} className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 hover:border-brand-500/30 transition-all">
                                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                                    <span className="bg-brand-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase">
                                                        {app.role}
                                                    </span>
                                                    <span className="text-gray-500 text-xs flex items-center gap-1.5">
                                                        <Calendar size={14} />
                                                        {formatDate(app.submittedAt)}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-black text-white mb-2">{app.name}</h3>
                                                <div className="flex flex-wrap gap-6 mb-6">
                                                    <a href={`mailto:${app.email}`} className="text-gray-400 hover:text-brand-500 text-sm flex items-center gap-2">
                                                        <Mail size={16} /> {app.email}
                                                    </a>
                                                    <a href={`tel:${app.phone}`} className="text-gray-400 hover:text-brand-500 text-sm flex items-center gap-2">
                                                        <MessageSquare size={16} /> {app.phone}
                                                    </a>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                                        <p className="text-xs text-brand-500 font-bold uppercase tracking-wider mb-2">Resume / CV</p>
                                                        <a href={app.resume_link} target="_blank" rel="noopener noreferrer" className="text-white text-sm flex items-center gap-2 hover:underline">
                                                            <ExternalLink size={14} /> Open Document
                                                        </a>
                                                    </div>
                                                    {app.portfolio && (
                                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                                            <p className="text-xs text-brand-500 font-bold uppercase tracking-wider mb-2">Portfolio</p>
                                                            <a href={app.portfolio} target="_blank" rel="noopener noreferrer" className="text-white text-sm flex items-center gap-2 hover:underline">
                                                                <Globe size={14} /> View Portfolio
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                                    <p className="text-xs text-brand-500 font-bold uppercase tracking-wider mb-2">Cover Note</p>
                                                    <p className="text-gray-300 text-sm leading-relaxed">{app.note || "No note provided."}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    onClick={() => handleDeleteSubmission('applications', app.id)}
                                                    className="p-3 bg-white/5 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <div className="lg:col-span-3 space-y-6">
                            {inquiries.length === 0 ? (
                                <div className="text-center py-20 bg-[#0a0a0a] border border-dashed border-white/10 rounded-[2.5rem]">
                                    <Mail size={40} className="mx-auto mb-4 text-gray-700" />
                                    <h3 className="text-xl font-bold text-gray-500">No contact inquiries yet</h3>
                                </div>
                            ) : (
                                inquiries.map((inq) => (
                                    <div key={inq.id} className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 hover:border-brand-500/30 transition-all">
                                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                                    <span className="bg-brand-500/10 text-brand-500 border border-brand-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                                                        {inq.source || "Inquiry"}
                                                    </span>
                                                    <span className="text-gray-500 text-xs flex items-center gap-1.5">
                                                        <Calendar size={14} />
                                                        {formatDate(inq.submittedAt)}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-black text-white mb-2">{inq.name}</h3>
                                                <div className="flex flex-wrap gap-6 mb-6">
                                                    <a href={`mailto:${inq.email}`} className="text-gray-400 hover:text-brand-500 text-sm flex items-center gap-2">
                                                        <Mail size={16} /> {inq.email}
                                                    </a>
                                                    {inq.company && (
                                                        <span className="text-gray-400 text-sm flex items-center gap-2">
                                                            <Briefcase size={16} /> {inq.company}
                                                        </span>
                                                    )}
                                                    {inq.website && (
                                                        <a href={inq.website.startsWith('http') ? inq.website : `https://${inq.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-500 text-sm flex items-center gap-2">
                                                            <Globe size={16} /> Website
                                                        </a>
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap gap-3 mb-6">
                                                    {inq.services && inq.services.split(',').map((s, i) => (
                                                        <span key={i} className="bg-white/5 border border-white/5 px-3 py-1 rounded-lg text-[10px] text-gray-400">
                                                            {s.trim()}
                                                        </span>
                                                    ))}
                                                    {inq.projectType && (
                                                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-lg text-[10px] font-bold">
                                                            {inq.projectType}
                                                        </span>
                                                    )}
                                                    {inq.deadline && (
                                                        <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-lg text-[10px] font-bold">
                                                            Deadline: {inq.deadline}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                                    <p className="text-xs text-brand-500 font-bold uppercase tracking-wider mb-2">Message</p>
                                                    <p className="text-gray-300 text-sm leading-relaxed">{inq.message}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    onClick={() => handleDeleteSubmission('inquiries', inq.id)}
                                                    className="p-3 bg-white/5 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// SVG Icon Helper for Job Category (Tag)
const Tag = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
);

export default CareerAdmin;
