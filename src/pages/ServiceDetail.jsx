import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Plus, Minus } from "lucide-react";
import { servicesData } from "../data/servicesData";
import HomeContact from "../components/HomeContact";

const ProcessSection = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(null);

    if (!steps || steps.length === 0) return null;

    return (
        <div
            className="w-full border border-white/20 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col md:flex-row relative min-h-[550px]"
            onMouseLeave={() => setActiveStep(null)}
        >
            {steps.map((step, idx) => (
                <div
                    key={idx}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="flex-1 py-12 md:py-24 px-6 flex flex-col items-center text-center group transition-all duration-500 relative cursor-default"
                >
                    <div className="hidden md:block absolute right-0 top-16 bottom-16 w-[1px] bg-white/20" />
                    {idx === 0 && (
                        <div className="hidden md:block absolute left-0 top-16 bottom-16 w-[1px] bg-white/20" />
                    )}
                    {idx !== steps.length - 1 && (
                        <div className="md:hidden absolute bottom-0 left-8 right-8 h-[1px] bg-white/20" />
                    )}
                    <span className={`text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ease-out ${activeStep === idx ? 'mb-20 text-brand-500' : 'mb-16 text-gray-500'}`}>
                        {step.step}
                    </span>
                    <h3 className={`text-xl font-medium mb-8 h-12 flex items-center justify-center transition-colors duration-300 ${activeStep === idx ? 'text-white' : 'text-gray-400'}`}>
                        {step.title}
                    </h3>
                    <div
                        className={`w-full py-2.5 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden ${activeStep === idx ? 'bg-brand-500' : 'bg-white/5'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${activeStep === idx ? 'bg-black text-brand-500' : 'bg-white/20 text-white'
                            }`}>
                            {activeStep === idx ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                    </div>
                    <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-out ${activeStep === idx ? 'grid-rows-[1fr] opacity-100 pt-8' : 'grid-rows-[0fr] opacity-0 pt-0'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData[serviceId];

    // Works section scroll ref and progress
    const worksScrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: worksScrollRef });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollWorks = (direction) => {
        if (worksScrollRef.current) {
            const isMobile = window.innerWidth < 640;
            const scrollAmount = isMobile ? window.innerWidth * 0.85 : 500;
            worksScrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate("/services");
        }
    }, [serviceId, service, navigate]);

    if (!service) return null;

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-black text-white pt-8">
            {/* Section 1 - Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-9xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-6xl mx-auto"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight whitespace-nowrap text-brand-500">
                            {service.heroTitle || service.title}
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            {service.heroSubtitle || service.fullDesc}
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Down Arrow Button */}
                <button
                    onClick={() => {
                        const nextSection = document.getElementById('about-service-section');
                        if (nextSection) {
                            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }}
                    className="absolute bottom-24 left-1/2 transform -translate-x-1/2 group cursor-pointer"
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

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            </section>

            {/* Section 2 - About Service */}
            <section id="about-service-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 border border-white/10 shadow-sm card-glow">
                        {/* Left Column */}
                        <div className="w-full lg:w-1/3 flex flex-col">
                            {/* Top Label */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#71d300]"></div>
                                <span className="text-xl sm:text-2xl font-semibold text-[#71d300] tracking-wide">Who we are</span>
                            </div>

                            {/* Logo Card */}
                            <div className="bg-brand-50 rounded-3xl p-4 mt-auto border border-brand-100/50 card-glow">
                                {/* Inner Card with Logo */}
                                <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 hover:shadow-md border border-gray-50">
                                    <img
                                        src="/Logo.png"
                                        alt="Techno Vanam Logo"
                                        className="w-24 sm:w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Bottom Label */}
                                <div className="flex items-center justify-between px-2 pb-1">
                                    <span className="font-bold text-brand-950 text-xs sm:text-sm tracking-tight uppercase">Designing Digital Future</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
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

                            <Link
                                to="/contact"
                                className="btn-primary w-fit"
                            >
                                <span className="relative z-10 font-bold flex items-center gap-3">
                                    Let's talk
                                    <ArrowRight size={20} />
                                </span>
                                <div className="btn-primary-shine"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Our Process */}
            <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 mb-12 lg:mb-16">
                        <div className="flex items-center gap-3">
                            <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
                            <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Our process</span>
                        </div>
                        <div className="lg:col-span-8 lg:col-start-6">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                                How we bring your vision to life
                            </h2>
                        </div>
                    </div>

                    <ProcessSection steps={service.process} />
                </div>
            </section>

            {/* Section 4 - Our Works */}
            <section className="py-16 sm:py-20 lg:py-24 bg-transparent w-full overflow-hidden">
                {/* Header with max-width */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Works</span>
                    </div>
                </div>

                {/* Full-width scroll container */}
                <div className="relative mb-16">
                    <div
                        ref={worksScrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 scroll-container-align"
                        style={{
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                        }}
                    >
                        <div className="flex gap-6 md:gap-8">
                            {service.works && service.works.map((work, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-[85vw] sm:w-[450px] lg:w-[500px] snap-start"
                                >
                                    <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/10 card-glow hover:border-brand-500/30 transition-all duration-500 group">
                                        {/* Image Container */}
                                        <div className="relative aspect-video bg-white/5 overflow-hidden">
                                            {work.image ? (
                                                <img
                                                    src={work.image}
                                                    alt={work.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Icon size={80} className="text-brand-500/20" />
                                                </div>
                                            )}
                                        </div>
                                        {/* Title Below Image */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                                            {work.desc && (
                                                <p className="text-sm text-gray-400">{work.desc}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Invisible spacer for end alignment */}
                        <div className="flex-shrink-0 w-4 sm:w-8 lg:w-12 px-0" />
                    </div>
                </div>

                {/* Footer: Progress Bar and Navigation Buttons */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                        {/* Progress Bar */}
                        <div className="w-full sm:flex-1 h-[4px] bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-brand-500"
                                style={{ scaleX, originX: 0, width: "100%" }}
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => scrollWorks('left')}
                                className="relative group overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-500 flex items-center justify-center text-black shadow-md hover:bg-brand-600 transition-all duration-300 active:scale-95 border border-brand-500"
                                aria-label="Previous work"
                            >
                                <span className="relative z-10">
                                    <ArrowLeft size={20} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            </button>
                            <button
                                onClick={() => scrollWorks('right')}
                                className="relative group overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-500 flex items-center justify-center text-black shadow-md hover:bg-brand-600 transition-all duration-300 active:scale-95 border border-brand-500"
                                aria-label="Next work"
                            >
                                <span className="relative z-10">
                                    <ArrowRight size={20} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }

                    .scroll-container-align {
                        padding-left: 1rem;
                        padding-right: 1rem;
                        scroll-padding-left: 1rem;
                    }

                    @media (min-width: 640px) {
                        .scroll-container-align {
                            padding-left: 1.5rem;
                            padding-right: 1.5rem;
                            scroll-padding-left: 1.5rem;
                        }
                    }

                    @media (min-width: 768px) {
                        .scroll-container-align {
                            padding-left: 2rem;
                            padding-right: 2rem;
                            scroll-padding-left: 2rem;
                        }
                    }

                    @media (min-width: 1024px) {
                        .scroll-container-align {
                            padding-left: max(3rem, calc((100vw - 80rem) / 2 + 3rem));
                            padding-right: 3rem;
                            scroll-padding-left: max(3rem, calc((100vw - 80rem) / 2 + 3rem));
                        }
                    }
                `}</style>
            </section>

            {/* Section 5 - Key Benefits */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 border border-white/10 card-glow">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                {service.benefitsTitle || `Why Choose Our ${service.title}?`}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {service.benefits && service.benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative p-8 bg-white/5 border border-white/10 rounded-[2rem] card-glow hover:bg-white/[0.07] transition-all group"
                                >
                                    <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                                        <CheckCircle2 size={24} className="text-brand-500" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-white">{benefit.title || benefit}</h3>
                                    {benefit.desc && (
                                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6 - Contact (using HomeContact component) */}
            <HomeContact />
        </div>
    );
};

export default ServiceDetail;
