import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { servicesData } from "../data/servicesData";
import HomeContact from "../components/HomeContact";

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

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Hero Section */}
            <section className="relative w-full py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-500 transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                            <Icon size={32} />
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                            {service.fullDesc}
                        </p>
                    </motion.div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-500">Our Workflow</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-16">The {service.title} Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-8 bg-white/5 border border-white/10 rounded-[2rem] card-glow hover:bg-white/[0.07] transition-colors"
                            >
                                <span className="text-5xl font-black text-white/5 absolute top-6 right-8 select-none">
                                    {item.step}
                                </span>
                                <h3 className="text-xl font-bold mb-4 text-brand-500">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="text-brand-500" size={20} />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-500">Key Benefits</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-8 leading-tight">
                            Why choose our <br />
                            Professional {service.title}?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center group card-glow">
                        <Icon size={120} className="text-brand-500/20 group-hover:scale-110 group-hover:text-brand-500/40 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-brand-500/5 p-16 rounded-[4rem] border border-brand-500/10 card-glow">
                    <h2 className="text-4xl font-bold mb-6 italic text-white/90">Ready to start your project?</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Let's collaborate to build something exceptional that drives real results for your brand.
                    </p>
                    <Link
                        to="/contact"
                        className="btn-primary inline-flex items-center justify-center px-10"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started Now <ArrowRight size={18} />
                        </span>
                        <div className="btn-primary-shine"></div>
                    </Link>
                </div>
            </section>

            <HomeContact />
        </div>
    );
};

export default ServiceDetail;
