import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeContact from "../../components/HomeContact";
import LaunchingSoonModal from "../../components/LaunchingSoonModal";

const Products = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: null, image: null });

  const openProductModal = (productName, productImage) => {
    setSelectedProduct({ name: productName, image: productImage });
    setShowPopup(true);
  };

  const closeProductModal = () => {
    setShowPopup(false);
    setSelectedProduct({ name: null, image: null });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <LaunchingSoonModal
        isOpen={showPopup}
        onClose={closeProductModal}
        productName={selectedProduct.name}
        productImage={selectedProduct.image}
      />
      {/* Section 1: Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 text-brand-500 text-sm font-bold rounded-full mb-8 tracking-wide border border-brand-500/20">
              <Sparkles size={16} />
              OUR DIGITAL ECOSYSTEM
            </span>

            {/* Heading + Logo Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 leading-tight">
                <span>Products by</span>
                <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-0">
                  <img
                    src="/Logo.png"
                    alt="Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap">Techno Vanam</span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <p className="text-center text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4 font-medium opacity-80">
              At Techno Vanam, we don't just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
            </p>
          </motion.div>
        </div>

        <button
          onClick={() => {
            const nextSection = document.getElementById('products-grid');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer z-20"
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

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* Our Products - Premium UI Section (Mirrored from Home) */}
      <section id="products-grid" className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-0 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 border border-white/10 flex flex-col gap-10 sm:gap-14 lg:gap-16 card-glow">
            {/* Athlixir Product Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Sports Tech, India</span>
                  </div>

                  <button
                    onClick={() => openProductModal("Athlixir", "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop")}
                    className="relative inline-block mb-4 group text-left w-full"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                      Athlixir
                    </h3>
                  </button>

                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    Athlixir is an AI-powered athlete ecosystem built to protect potential, prevent setbacks, and prove talent—uniting performance tracking, injury intelligence, and verified recognition to ensure no athlete is ever overlooked.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Sports Platform
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-500 select-none leading-none">
                    01
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full lg:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 lg:p-12 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop"
                  alt="Athlixir Platform Interface"
                  className="w-full h-auto max-w-[500px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Youth Entrepreneurship Section */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
              {/* Left Content Column (mirrored logic) */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Education, Global</span>
                  </div>

                  <button
                    onClick={() => openProductModal("Youth Entrepreneurship Platform", "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop")}
                    className="relative inline-block mb-4 group text-left w-full"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                      Youth Entrepreneurship Platform
                    </h3>
                  </button>

                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                    An interactive ecosystem built to empower the next generation of founders — connecting mentorship, startup resources, and real-world business tools to turn ideas into impactful ventures.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Startup Ecosystem Platform
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-500 select-none leading-none">
                    02
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full lg:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 lg:p-12 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                  alt="Platform Interface"
                  className="w-full h-auto max-w-[500px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* WebBrain Product Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Productivity, Global</span>
                  </div>

                  <button
                    onClick={() => openProductModal("WebBrain", "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop")}
                    className="relative inline-block mb-4 group text-left w-full"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                      WebBrain — Your Second Brain
                    </h3>
                  </button>

                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    A living memory layer for your browser that understands what you explore, remembers what matters, and brings it back when you need it. WebBrain turns scattered browsing into structured knowledge.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Browser Extension
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-500 select-none leading-none">
                    03
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full lg:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 lg:p-12 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                  alt="WebBrain Interface"
                  className="w-full h-auto max-w-[500px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <HomeContact />
      </div>

      {/* Spacer */}
      <div className="h-4 sm:h-6 lg:h-8"></div>
    </div>
  );
};

export default Products;