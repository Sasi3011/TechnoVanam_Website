import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Briefcase, Linkedin } from "lucide-react";
import { products } from "../../data/productData";
import HomeContact from "../../components/HomeContact";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === productId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <Link to="/products" className="text-brand-500 hover:underline">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="bg-white text-black min-h-screen">
            {/* 1. Hero Section */}
            <section className="px-6 py-20 lg:py-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Hero Image Container */}
                    <div className="bg-[#FAF9F6] rounded-[2rem] p-8 lg:p-16 flex items-center justify-center overflow-hidden">
                        <img
                            src={product.heroImage}
                            alt={product.title}
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                    </div>
                    {/* Hero Text */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                            {product.title}
                        </h1>
                        <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 font-medium">
                            {product.subtitle}
                        </p>
                        <div className="flex flex-col gap-8 mt-4">
                            <div className="flex items-center gap-2 text-gray-500 font-semibold tracking-wide">
                                <span>{product.category}, {product.location}</span>
                                <span className="opacity-30">—</span>
                                <span>{product.year}</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.services.slice(0, 2).map((service, idx) => (
                                    <span key={idx} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-600">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. About The Project */}
            <section className="px-6 py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Title & Info */}
                        <div className="lg:col-span-5 flex flex-col gap-12">
                            <h2 className="text-4xl font-bold">{product.aboutProjectTitle}</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Industry</span>
                                    <span className="text-xl font-bold">{product.industry}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Duration</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black">{product.duration}</span>
                                        <span className="text-gray-400 font-bold">weeks</span>
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col gap-4">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Services</span>
                                    <div className="flex flex-col gap-1">
                                        {product.services.map((s, i) => (
                                            <span key={i} className="text-xl font-bold">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Summary Content */}
                        <div className="lg:col-span-7 flex flex-col gap-10">
                            <p className="text-2xl lg:text-3xl leading-snug font-medium text-gray-800">
                                {product.aboutProjectDescription}
                            </p>
                            <Link to="/contact">
                                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-bold transition-all group">
                                    Let's chat 👋 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visuals & Challenges */}
            <section className="px-6 py-10 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <img src={product.mockupImages[0]} alt="Mockup 1" className="w-full h-auto rounded-[2rem] shadow-xl" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-20">
                        <div className="lg:col-span-4">
                            <h2 className="text-4xl font-bold">Challenges</h2>
                        </div>
                        <div className="lg:col-span-8 flex flex-col gap-16">
                            <div className="flex flex-col gap-6">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Problem</span>
                                <p className="text-2xl leading-relaxed text-gray-700 font-medium">
                                    {product.problem}
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Solution</span>
                                <p className="text-2xl leading-relaxed text-gray-700 font-medium">
                                    {product.solution}
                                </p>
                            </div>
                        </div>
                    </div>

                    <img src={product.mockupImages[1]} alt="Mockup 2" className="w-full h-auto rounded-[2rem] shadow-xl" />
                </div>
            </section>

            {/* 4. Key Takeaways */}
            <section className="px-6 py-32 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl font-bold tracking-tight">Key Takeaways</h2>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-2xl lg:text-3xl leading-tight font-bold text-gray-900">
                            {product.keyTakeaway}
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Summary & Testimonial */}
            <section className="px-6 py-32 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-5 flex flex-col gap-12">
                            <h2 className="text-4xl font-bold">Summary</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Industry</span>
                                    <span className="text-xl font-bold">{product.industry}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Duration</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black">{product.duration}</span>
                                        <span className="text-gray-400 font-bold">weeks</span>
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col gap-4">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Services</span>
                                    <div className="flex flex-col gap-1">
                                        {product.services.map((s, i) => (
                                            <span key={i} className="text-xl font-bold">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 flex flex-col gap-12">
                            <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
                                {product.aboutProjectDescription}
                            </p>

                            {/* Testimonial Bio */}
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                                        <img src={product.testimonial.logo} alt="Client" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold">{product.testimonial.author}</span>
                                            <a href="#" className="text-blue-600"><Linkedin size={18} fill="currentColor" /></a>
                                        </div>
                                        <span className="text-gray-500 font-medium">{product.testimonial.role}</span>
                                    </div>
                                    <Link to="/contact" className="ml-auto hidden sm:block">
                                        <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-bold transition-all">
                                            Let's chat 👋
                                        </button>
                                    </Link>
                                </div>
                                <div className="p-8 bg-[#FAF9F6] rounded-[2rem] border border-gray-100 italic text-lg text-gray-600">
                                    "{product.testimonial.text}"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. More Projects */}
            <section className="px-6 py-20 bg-white border-t border-gray-100 mb-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12">Project links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {product.projectLinks.map((p, idx) => (
                            <Link
                                key={idx}
                                to={`/products/${p.id}`}
                                className="group flex flex-col gap-6"
                            >
                                <div className="p-10 bg-[#FAF9F6] rounded-[2rem] border border-gray-100 group-hover:border-brand-500 transition-all">
                                    <div className="flex flex-col gap-4">
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">0{idx + 1}</span>
                                        <h3 className="text-3xl font-bold group-hover:text-brand-600 transition-colors">{p.title}</h3>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-gray-500 font-medium">{p.category}</span>
                                            <span className="font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                                Explore <ArrowRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-black py-20">
                <HomeContact />
            </div>
        </div>
    );
};

export default ProductDetail;
