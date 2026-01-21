import React, { useEffect, useState } from "react";
import { Instagram, MessageCircle, Phone, ArrowUpRight, Linkedin, ChevronRight, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const ConnectItem = ({ icon: Icon, label, sublabel, href, onClick }) => {
    const content = (
        <>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.08]" />

            {/* Icon Container with Subtle Inset Glow */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-[#121212] border border-white/[0.05] shadow-inner text-white group-hover:border-brand-500/40 transition-all duration-500 shrink-0">
                <Icon size={24} className="relative z-10 group-hover:scale-110 group-hover:text-brand-500 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
            </div>

            <div className="flex-1 text-left ml-1">
                <h3 className="text-white font-extrabold text-base sm:text-[1.1rem] tracking-tight leading-tight mb-0.5">
                    {label}
                </h3>
                <p className="text-white/30 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] group-hover:text-brand-500/80 transition-colors duration-500">
                    {sublabel}
                </p>
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white/5 group-hover:text-brand-500 transition-all duration-700">
                <ArrowUpRight size={20} strokeWidth={3} />
            </div>

            {/* Polish Reflection Move */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-1000">
                <div className="absolute top-[-100%] left-[-100%] w-full h-[300%] bg-white/[0.02] -rotate-45 group-hover:top-[100%] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
            </div>
        </>
    );

    const cardStyle = "relative group w-full flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-[#0A0A0A] border border-white/[0.03] rounded-[28px] overflow-hidden shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer hover:bg-[#0F0F0F] hover:border-white/[0.12] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.9)]";

    if (onClick) {
        return (
            <motion.button onClick={onClick} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} className={cardStyle} style={{ width: '100%' }}>
                {content}
            </motion.button>
        );
    }

    return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} className={cardStyle}>
            {content}
        </motion.a>
    );
};

const Connect = () => {
    const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

    useEffect(() => {
        document.title = "Connect | Techno Vanam";
        window.scrollTo(0, 0);
    }, []);

    const whatsappOptions = [
        { name: "Join Channel", link: "https://whatsapp.com/channel/0029VbAX2bwEVccNeg6nuP2i", desc: "Digital Updates" },
        { name: "Join Community", link: "https://chat.whatsapp.com/GlO1FxNioCoAo15EiGYLYZ", desc: "Studio Network" },
        { name: "Direct Message", link: "https://wa.me/918610500527", desc: "Business Inquiry" }
    ];

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 pt-10 pb-20 font-sans selection:bg-brand-500/30 overflow-x-hidden scrollbar-hide">
            <SEO
                title="Connect With Us | Techno Vanam"
                description="Get in touch with Techno Vanam. Whether you're starting a project, seeking a consultation, or just want to say hi, we're here to talk."
                keywords="Contact Techno Vanam, Techno, Vanam, TechnoVanam, Studio Inquiries, Project Consultation, Digital Strategy Dubai, Techno Vanam WhatsApp, Get in Touch"
            />

            {/* Dynamic Background Noise & Grid */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="relative z-10 w-full max-w-[370px] flex flex-col items-center">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-10"
                >
                    {/* Logo Frame - Ultra Precise */}
                    <div className="relative mb-8 group">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[36px] bg-[#090909] border border-white/[0.08] p-5 shadow-2xl relative overflow-hidden flex items-center justify-center transition-all duration-700 hover:border-brand-500/30 hover:shadow-brand/5">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
                            <img
                                src="/Logo.png"
                                alt="Logo"
                                className="w-full h-full object-contain relative z-10 select-none group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-transparent pointer-events-none" />
                        </div>

                        {/* Status Live Indicator */}
                    </div>

                    <div className="text-center">
                        <h1 className="text-white text-[2.4rem] font-black tracking-tighter uppercase leading-none mb-3 drop-shadow-2xl">
                            Techno Vanam
                        </h1>
                        <div className="flex items-center justify-center gap-3 opacity-80">
                            <span className="h-[1px] w-5 bg-white/10" />
                            <p className="text-brand-500 font-black text-[10px] sm:text-[11px] tracking-[0.45em] uppercase whitespace-nowrap">
                                Designing Digital Future
                            </p>
                            <span className="h-[1px] w-5 bg-white/10" />
                        </div>
                    </div>
                </motion.div>

                {/* Action Stack */}
                <motion.div className="w-full flex flex-col gap-4" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}>
                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                        <ConnectItem icon={Instagram} label="Instagram" sublabel="@technovanam" href="https://www.instagram.com/technovanam?igsh=MTJwazIyMmhpeWtsdw==" />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                        <ConnectItem icon={WhatsAppIcon} label="WhatsApp" sublabel="Connect with us" onClick={() => setShowWhatsAppModal(true)} />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                        <ConnectItem icon={Linkedin} label="LinkedIn" sublabel="Business Network" href="https://www.linkedin.com/company/technovanam/" />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                        <ConnectItem icon={Phone} label="Voice Call" sublabel="+91 86105 00527" href="tel:+918610500527" />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                        <ConnectItem icon={Globe} label="Official Website" sublabel="Visit Studio" href="https://technovanam.in" />
                    </motion.div>
                </motion.div>

                {/* Minimal Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-14 flex flex-col items-center gap-8"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand-500/50 via-brand-500/10 to-transparent" />

                    <div className="flex flex-col items-center gap-5">
                        <p className="text-zinc-600 text-[10px] sm:text-[11px] font-black tracking-[0.6em] uppercase">
                            Est. 2025
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-6">
                                <a href="/privacy" className="text-zinc-700 hover:text-brand-500 transition-colors text-[9px] font-black uppercase tracking-[0.3em]">Privacy Policy</a>
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                                <a href="/privacy" className="text-zinc-700 hover:text-brand-500 transition-colors text-[9px] font-black uppercase tracking-[0.3em]">Terms of Service</a>
                            </div>

                            <p className="text-brand-600 text-[8px] font-black uppercase tracking-[0.4em]">
                                India • Global • Digital
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* WhatsApp Selection Modal */}
            <AnimatePresence>
                {showWhatsAppModal && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowWhatsAppModal(false)} className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 28, stiffness: 220 }}
                            className="relative w-full max-w-[380px] bg-[#0A0A0A] border-t sm:border border-white/10 rounded-t-[36px] sm:rounded-[36px] p-8 pb-12 sm:pb-8 shadow-3xl overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
                            <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mb-8 sm:hidden" />

                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h2 className="text-white text-3xl font-black italic uppercase italic tracking-tighter mb-1">WhatsApp</h2>
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-[0.25em]">Choose Destination</p>
                                </div>
                                <button onClick={() => setShowWhatsAppModal(false)} className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                    <X size={22} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-3.5">
                                {whatsappOptions.map((opt, i) => (
                                    <motion.a
                                        key={opt.name} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 + 0.2 }}
                                        href={opt.link} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-between p-6 bg-[#111] border border-white/[0.03] rounded-[24px] group hover:bg-brand-500/5 hover:border-brand-500/20 transition-all duration-500"
                                    >
                                        <div>
                                            <span className="text-white font-extrabold text-lg block mb-0.5">{opt.name}</span>
                                            <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.15em] group-hover:text-brand-500 transition-colors">{opt.desc}</span>
                                        </div>
                                        <ChevronRight size={18} className="text-white/10 group-hover:text-brand-500 transition-all group-hover:translate-x-1" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Connect;
