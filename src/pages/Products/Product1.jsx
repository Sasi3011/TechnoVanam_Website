import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Product1 = () => {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate('/product1');
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate('/product2');
  };

  return (
    <div className="flex flex-col items-center pt-24 md:pt-32 lg:pt-40 gap-8 md:gap-12 lg:gap-16 min-h-screen px-4 md:px-6 lg:px-8">
      {/* Section 1: Header */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        {/* Label */}
        <div className="text-sm md:text-base lg:text-lg text-brand-600 font-semibold uppercase tracking-wider">
          ~ Products ~
        </div>

        {/* Heading + Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center text-gray-900 font-bold gap-2 sm:gap-3 lg:gap-4">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            Products by
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1767865697/Screenshot_2026-01-08_151441-Photoroom_xrcnwh.png"
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
          At Techno Vanam, we don't just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-4 bg-white border border-[#EBEFF6] shadow-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3">
        <p className="text-black text-lg sm:text-xl font-semibold px-2 sm:px-6 text-center sm:text-left w-full sm:w-auto">
          Latest Releases
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-end w-full sm:w-auto">
          <button
            onClick={handleLatestReleasesClick}
            className="flex justify-center items-center px-4 sm:px-5 py-2.5 sm:py-3 border border-brand-600 rounded-full shadow-sm text-brand-600 hover:bg-brand-700 hover:text-white transition duration-200 min-w-[140px] sm:min-w-[160px]"
          >
            <span className="text-sm sm:text-base font-medium">
              🌐 Latest Releases
            </span>
          </button>
          <button
            onClick={handleWhatWeWorkingOnClick}
            className="flex justify-center items-center px-4 sm:px-5 py-2.5 sm:py-3 border border-[#EBEFF6] rounded-full shadow-sm text-[#868DA6] hover:bg-[#f2f4f8] hover:text-[#2F2F2F] transition duration-200 min-w-[140px] sm:min-w-[160px]"
          >
            <span className="text-sm sm:text-base font-medium">
              🔒 What We're Working On
            </span>
          </button>
        </div>
      </div>

      {/* In Progress Section */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between bg-brand-50 border border-brand-200 shadow-lg rounded-2xl lg:rounded-[32px] p-6 sm:p-8 lg:pl-10 lg:pr-0 min-h-[400px] lg:h-[480px] gap-6 lg:gap-0">
        {/* Left Text Block */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-8 w-full lg:w-[600px] text-justify sm:text-justify md:text-justify lg:text-left">
          <h2 className="text-brand-600 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-left">
            In Progress
          </h2>
          <p className="text-[#3B4A68] text-sm sm:text-base lg:text-lg leading-relaxed max-w-none lg:max-w-lg mx-auto lg:mx-0">
            We're currently building powerful solutions behind the scenes. While we haven't launched any products yet, exciting things are on the way—starting with Athlixir, our AI-powered platform for athlete performance and development.
          </p>

          <>
            <style>
              {`
                @keyframes typing {
                  0% { width: 0ch }
                  50% { width: 37ch }
                  100% { width: 0ch }
                }

                @keyframes blink {
                  50% { border-color: transparent }
                }

                .typing-text {
                  display: inline-block;
                  overflow: hidden;
                  white-space: nowrap;
                  border-right: 2px solid var(--color-brand-600);
                  animation:
                    typing 6s steps(39, end) infinite,
                    blink 0.7s step-end infinite;
                }

                /* Mobile view: no animation */
                @media (max-width: 640px) {
                  .typing-text {
                    border-right: none;
                    animation: none;
                  }
                }

                /* Tablet specific typing animation */
                @media (min-width: 641px) and (max-width: 1024px) {
                  @keyframes typing-tablet {
                    0% { width: 0ch }
                    50% { width: 35ch }
                    100% { width: 0ch }
                  }

                  .typing-text {
                    animation:
                      typing-tablet 6s steps(37, end) infinite,
                      blink 0.7s step-end infinite;
                  }
                }
              `}
            </style>

            <div className="text-brand-600 text-base sm:text-lg lg:text-xl font-bold uppercase leading-relaxed typing-text text-left">
              <span className="block sm:hidden">Stay tuned</span>
              <span className="hidden sm:block">Stay tuned — the journey has just begun.</span>
            </div>
          </>
        </div>

        {/* Right Image Block */}
        <div className="flex items-center justify-center w-full lg:w-auto">
          <img
            src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825608/Athlixir_srv8w4.png"
            alt="Startup Illustration"
            className="w-full max-w-md sm:max-w-lg lg:w-[600px] h-64 sm:h-80 lg:h-[480px] object-cover rounded-2xl lg:rounded-[32px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4 sm:h-6 lg:h-8"></div>

      {/* CTA Section - Commented out as in original */}
      {/* <section className="w-full flex flex-col items-center h-[600px] bg-brand-600">
        <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
          
          <div className="w-1/2 h-[600px]">
            <video
              src={SocialMediaImage}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-1/2 text-white text-left px-8 pt-20 pb-20">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-lg mt-4">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let's build something great together.
            </p>
            <div className="pt-6 flex justify-start">
              <Link to="/contact">
                <button className="flex items-center gap-2 px-7 py-4 bg-white text-brand-600 font-bold text-base rounded-full border-2 shadow-md hover:bg-gray-100 hover:bg-transparent hover:text-white transition">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transform -scale-y-100"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section> */}
    </div>
  );
};

export default Product1;