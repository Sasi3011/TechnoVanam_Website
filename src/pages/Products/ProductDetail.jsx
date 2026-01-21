import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Sparkles } from "lucide-react";
import { products } from "../../data/productData";
import HomeContact from "../../components/HomeContact";
import LaunchingSoonModal from "../../components/LaunchingSoonModal";
import SEO from "../../components/SEO";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);
    const productName = product ? product.title : "Product";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-16">
            <SEO
                title={`${productName} | Launching Soon`}
                description={`Get early access to ${productName} by Techno Vanam. We are crafting something extraordinary.`}
            />
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-500/10 mb-8 border border-brand-500/20 text-brand-500 shadow-[0_0_40px_rgba(113,211,0,0.2)]">
                        <Rocket size={40} />
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-none">
                        <span className="block text-brand-500 mb-2">{productName}</span>
                        <span className="text-white">Launching Soon</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        We are crafting something extraordinary. This product is currently in the final stages of development and will be released shortly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/products"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-bold text-white group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Products
                        </Link>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-500 text-black font-bold hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(113,211,0,0.3)] hover:shadow-[0_0_30px_rgba(113,211,0,0.5)] transform hover:scale-105"
                        >
                            <Sparkles size={20} />
                            Get Early Access
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 w-full mt-20">
                <HomeContact />
            </div>

            {/* Footer minimal */}
            <div className="relative w-full text-center mt-12 mb-8">
                <p className="text-gray-600 text-sm font-medium">© 2026 Techno Vanam. All rights reserved.</p>
            </div>
        </div>
    );
};

export default ProductDetail;


