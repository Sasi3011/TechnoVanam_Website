import React from "react";
import { useNavigate } from "react-router-dom";
import { Rocket } from "lucide-react";

export default function Products2() {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate("/product1");
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate("/product2");
  };

  return (
    <div className="flex flex-col items-center pt-24 gap-16 w-full px-4 sm:px-6 lg:px-0">
      {/* Section 1: Header */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-4 md:gap-6 lg:gap-8 px-4">
        {/* Label */}
        <div className="text-sm md:text-base lg:text-lg text-brand-600 font-semibold uppercase tracking-wider">
          ~ Products ~
        </div>

        {/* Heading + Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center text-gray-900 font-bold gap-2 sm:gap-3 lg:gap-4 font-archivo">
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
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl whitespace-nowrap font-archivo">
              Techno Vanam
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-justify sm:text-justify md:text-justify lg:text-center text-[#667097] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl px-2">
          At Techno Vanam, we don’t just create for clients—we build for ourselves too.
          Our digital products are crafted to enhance workflows, spark creativity, and
          solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-4 bg-white border border-[#EBEFF6] shadow-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3">
        <p className="text-black text-lg sm:text-xl font-semibold px-2 sm:px-6 text-center sm:text-left w-full sm:w-auto">
          What We’re Working On
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-end w-full sm:w-auto">
          <button
            onClick={handleLatestReleasesClick}
            className="flex justify-center items-center px-4 sm:px-5 py-2.5 sm:py-3 border border-[#EBEFF6] rounded-full shadow-sm text-[#868DA6] hover:bg-[#f2f4f8] hover:text-[#2F2F2F] transition duration-200 min-w-[140px] sm:min-w-[160px]"
          >
            <span className="text-sm sm:text-base font-medium">
              🌐 Latest Releases
            </span>
          </button>
          <button
            onClick={handleWhatWeWorkingOnClick}
            className="flex justify-center items-center px-4 sm:px-5 py-2.5 sm:py-3 border border-brand-600 rounded-full shadow-sm text-brand-600 hover:bg-brand-700 hover:text-white transition duration-200 min-w-[140px] sm:min-w-[160px]"
          >
            <span className="text-sm sm:text-base font-medium">
              🔒 What We’re Working On
            </span>
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-brand-50 border border-brand-200 shadow-lg rounded-[20px] w-full max-w-[1200px] p-6 sm:p-10 lg:p-12 gap-8">
        {/* Text Block */}
        <div className="flex flex-col gap-6">
          <h2 className="text-brand-600 text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            ATHLIXIR
          </h2>
          <p className="text-[#3B4A68] text-sm sm:text-base md:text-lg leading-relaxed">
            Athlixir is currently in development — a groundbreaking platform built to
            empower 50+ athlete communities across Tier-2 and Tier-3 regions in India
            and beyond. We're engineering a powerful ecosystem capable of analyzing
            300,000+ performance data points, using advanced AI to enable smarter
            training decisions, real-time injury tracking, personalized growth plans,
            and verified recognition for emerging talent.
            <br /><br />
            Whether you're an aspiring athlete, coach, or organization, Athlixir is your
            intelligent companion for measurable improvement, safety, and career
            visibility — all in one place.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-[#19213D] font-bold text-lg">50+</p>
                <p className="text-brand-600 text-sm sm:text-base">
                  Target athlete communities
                </p>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-[#19213D] font-bold text-lg">300,000+</p>
                <p className="text-brand-600 text-sm sm:text-base">
                  Projected performance insights powered by AI
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-[#19213D] font-bold text-lg">100%</p>
                <p className="text-brand-600 text-sm sm:text-base">
                  Focused on Unlocking Grassroots Sports Potential
                </p>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-[#19213D] font-bold text-lg">1</p>
                <p className="text-brand-600 text-sm sm:text-base">
                  Unified Platform for Growth, Recognition & Performance
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="flex items-center gap-2 mt-6">
            <p className="text-brand-600 text-base sm:text-lg lg:text-xl font-bold uppercase tracking-wide">
              COMING SOON
            </p>
            <Rocket className="w-5 h-5 text-brand-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
