import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeContact from "../../components/HomeContact";
import LaunchingSoonModal from "../../components/LaunchingSoonModal";
import SEO from "../../components/SEO";

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

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('products-grid');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Our Products"
        description="Discover the suite of digital tools and platforms built by Techno Vanam. From sports tech to entrepreneurship ecosystems."
        keywords="Techno Vanam Products, Techno, Vanam, TechnoVanam, Athlixir, WebBrain, Youth Platform, Youth Entrepreneurship Platform, Startup Tools, Developer Resources, Sports Management Software, AI Sports Tech, Browser Extension"
      />
      <LaunchingSoonModal
        isOpen={showPopup}
        onClose={closeProductModal}
        productName={selectedProduct.name}
        productImage={selectedProduct.image}
      />
      {/* Section 1: Hero Section - Full Viewport Height */}
      <section className="relative px-4 sm:px-6 lg:px-16 pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-transparent flex items-center justify-center overflow-hidden h-[100dvh] lg:h-screen">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center justify-center">
            {/* Heading + Logo Container */}
            <div className="flex flex-col xl:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight text-white text-center flex flex-wrap items-center justify-center gap-x-4">
                <span className="w-full xl:w-auto">Products by</span>
                <div className="flex items-center justify-center gap-3 md:gap-4 mt-2 xl:mt-0">
                  <img
                    src="/Logo.png"
                    alt="Logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap text-brand-500">Techno Vanam</span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal opacity-80">
              At Techno Vanam, we don't just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
            </p>
          </div>
        </div>

        <button
          onClick={scrollToNextSection}
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
      </section>

      {/* Our Products - Premium UI Section (Mirrored from Home) */}
      <section id="products-grid" className="bg-transparent min-h-screen flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-16 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 md:p-12 xl:p-20 border border-brand-500/30 flex flex-col gap-16 sm:gap-20 xl:gap-24 card-glow">
            {/* Athlixir Product Section */}
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-8">
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
              <div className="w-full xl:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 xl:p-12 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop"
                  alt="Athlixir Platform Interface"
                  className="w-full h-auto max-w-full md:max-w-[80%] xl:max-w-[550px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Youth Entrepreneurship Section */}
            <div className="flex flex-col xl:flex-row-reverse gap-12 xl:gap-16 items-center">
              {/* Left Content Column (mirrored logic) */}
              <div className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-8">
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
              <div className="w-full xl:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 xl:p-12 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                  alt="Platform Interface"
                  className="w-full h-auto max-w-full md:max-w-[80%] xl:max-w-[550px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* WebBrain Product Section */}
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-8">
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
              <div className="w-full xl:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 xl:p-12 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                  alt="WebBrain Interface"
                  className="w-full h-auto max-w-full md:max-w-[80%] xl:max-w-[550px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
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