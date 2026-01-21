import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";
import HomeContact from "../components/HomeContact";
import Testimonials from "../components/Testimonials";
import SEO from "../components/SEO";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData[serviceId];

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate("/services");
        }
    }, [serviceId, service, navigate]);

    if (!service) return null;

    // Placeholder FAQ data – can be expanded per service later
    const faqData = [
        { q: "What is the typical timeline for this service?", a: "Depending on scope, most projects complete in 4‑8 weeks." },
        { q: "Do you provide post‑launch support?", a: "Yes, we offer maintenance packages tailored to each service." },
        { q: "How do you ensure quality?", a: "Through rigorous testing, design reviews, and client feedback loops." },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-8">
            <SEO
                title={service.title}
                description={service.fullDesc || `Learn more about our ${service.title} services at Techno Vanam.`}
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl w-full text-center px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight text-brand-500">
                            {service.heroTitle || service.title}
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            {service.heroSubtitle || service.fullDesc}
                        </p>
                    </motion.div>
                </div>
                <button
                    onClick={() => {
                        const next = document.getElementById("about-section");
                        if (next) next.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 group cursor-pointer"
                    aria-label="Scroll down"
                >
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <div className="w-10 h-10 rounded-full border-2 border-brand-500 flex items-center justify-center hover:bg-brand-500 transition-all duration-300">
                            <svg
                                className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </button>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            </section>

            {/* About Section */}
            <section id="about-section" className="py-16 sm:py-20 lg:py-24 bg-transparent px-4 sm:px-6 lg:px-16">
                <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 border border-white/10 shadow-sm card-glow">
                    {/* Left – Logo Card */}
                    <div className="w-full lg:w-1/3 flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#71d300]" />
                            <span className="text-xl sm:text-2xl font-semibold text-[#71d300] tracking-wide">Who we are</span>
                        </div>
                        <div className="bg-brand-50 rounded-3xl p-4 mt-auto border border-brand-100/50 card-glow">
                            <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 hover:shadow-md border border-gray-50">
                                <img src="/Logo.png" alt="Techno Vanam Logo" className="w-24 sm:w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex items-center justify-between px-2 pb-1">
                                <span className="font-bold text-brand-950 text-xs sm:text-sm tracking-tight uppercase">Designing Digital Future</span>
                            </div>
                        </div>
                    </div>
                    {/* Right – Text */}
                    <div className="w-full lg:w-2/3 flex flex-col justify-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] mb-6 leading-tight">
                            {service.aboutTitle || `Your ${service.title} Partner`}
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                            {service.aboutDesc1 || service.fullDesc}
                        </p>
                        {service.aboutDesc2 && (
                            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                                {service.aboutDesc2}
                            </p>
                        )}
                        <Link to="/contact" className="btn-primary w-fit">
                            <span className="relative z-10 font-bold flex items-center gap-3">
                                Let’s talk
                                <ArrowRight size={20} />
                            </span>
                            <div className="btn-primary-shine" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Expertise in Numbers */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-brand-500 mb-10">Our Expertise in Numbers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <p className="text-4xl font-bold text-white">{service.benefits?.length || 0}+ </p>
                            <p className="text-gray-400">Projects Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">98%</p>
                            <p className="text-gray-400">Client Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">+30%</p>
                            <p className="text-gray-400">Engagement Increase</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">+20%</p>
                            <p className="text-gray-400">Return Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Benefits */}
            <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-brand-500 mb-10">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.benefits && service.benefits.map((b, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                                <p className="text-gray-400 text-sm">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-brand-500 mb-10">What Our Clients Say</h2>
                    <Testimonials />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-brand-500 mb-10">Frequently Asked Questions</h2>
                    <div className="grid gap-6">
                        {faqData.map((item, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-lg font-medium text-white mb-2">{item.q}</h3>
                                <p className="text-gray-400">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What’s Next */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-brand-500 mb-6">What’s Next?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Ready to bring your vision to life? Get in touch with our team and let’s start building something extraordinary together.
                    </p>
                    <Link to="/contact" className="btn-primary inline-block">
                        <span className="relative z-10 font-bold flex items-center gap-3">
                            Get in Touch
                            <ArrowRight size={20} />
                        </span>
                        <div className="btn-primary-shine" />
                    </Link>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-brand-500 mb-10">We're explorers</h2>
                    <p className="text-gray-400 mb-8">Ready to take the next step with us?</p>
                    <HomeContact />
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
