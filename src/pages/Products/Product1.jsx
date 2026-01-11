import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Product1 = () => {
  return (
    <div className="flex flex-col items-center pt-24 md:pt-32 lg:pt-40 gap-8 md:gap-12 lg:gap-16 min-h-screen px-4 md:px-6 lg:px-8 bg-black">
      {/* Section 1: Header */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        {/* Label */}

        {/* Heading + Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center text-white font-bold gap-2 sm:gap-3 lg:gap-4">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            Products by
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 object-contain"
              loading="lazy"
            />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl whitespace-nowrap">
              Techno Vanam
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-justify sm:text-justify md:text-justify lg:text-center text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl px-2">
          At Techno Vanam, we don't just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Products Section from Home */}
      <div className="bg-[#0a0a0a] rounded-[4rem] p-8 lg:p-20 border border-white/5 transition-all duration-700 flex flex-col gap-32 w-full max-w-7xl">
        {/* Athlixir Product Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
          {/* Left Content Column */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between pt-0 pb-4 px-2 -mt-24">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sports Tech, India</span>
              </div>

              <div className="relative inline-block mb-6 group">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Athlixir
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#71d300] transform scale-x-100 transition-transform duration-500"></div>
              </div>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mb-8">
                Athlixir is an AI-powered smart living platform for athletes. It brings performance tracking, injury analysis, and talent recognition into one unified ecosystem — helping 50+ athlete communities grow more intelligently.
              </p>
            </div>

            <div className="flex justify-between items-center mt-auto relative top-32">
              <div className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm tracking-wide shadow-sm">
                Web Design
              </div>
              <span className="text-4xl lg:text-5xl font-black text-white opacity-[0.05] select-none">
                01
              </span>
            </div>
          </div>

          {/* Right Image/Mockup Column */}
          <div className="w-full lg:w-[55%] bg-[#1a1a1a] rounded-[2.5rem] p-4 sm:p-6 md:py-8 md:px-10 lg:py-12 lg:px-12 flex items-center justify-center overflow-hidden h-auto lg:h-[450px]">
            <div className="relative w-full max-h-full group flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825608/Athlixir_srv8w4.png"
                alt="Athlixir Platform Interface"
                className="w-auto h-auto max-w-full max-h-[300px] lg:max-h-[350px] rounded-xl shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Youth Entrepreneurship Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-14 items-center">
          {/* Left Content Column (mirrored) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between pt-0 pb-4 px-2 -mt-24">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Education, Global</span>
              </div>

              <div className="relative inline-block mb-6 group">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Youth entrepreneurship platform
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#71d300] transform scale-x-100 transition-transform duration-500"></div>
              </div>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mb-8">
                An interactive ecosystem designed to empower the next generation of leaders. It provides mentorship, resource mapping, and business simulation tools to bridge the gap between education and real-world impact.
              </p>
            </div>

            <div className="flex justify-between items-center mt-auto relative top-32">
              <div className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm tracking-wide shadow-sm">
                LMS Platform
              </div>
              <span className="text-4xl lg:text-5xl font-black text-white opacity-[0.05] select-none">
                02
              </span>
            </div>
          </div>

          {/* Right Image/Mockup Column (mirrored) */}
          <div className="w-full lg:w-[55%] bg-[#1a1a1a] rounded-[2.5rem] p-4 sm:p-6 md:py-8 md:px-10 lg:py-12 lg:px-12 flex items-center justify-center overflow-hidden h-auto lg:h-[450px]">
            <div className="relative w-full max-h-full group flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Project20_pokpes.webp"
                alt="Platform Interface"
                className="w-auto h-auto max-w-full max-h-[300px] lg:max-h-[350px] rounded-xl shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4 sm:h-6 lg:h-8"></div>
    </div>
  );
};

export default Product1;