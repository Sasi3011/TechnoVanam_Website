import React from "react";
import { Link } from "react-router-dom";
import HighClassPopup from '../components/HighClassPopup';
import { useState } from 'react';
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    name: "Web Design",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    subheading: "We build impactful digital experiences",
    description:
      "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices.",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825646/Web_Design_czkou0.png",
  },
  {
    name: "App Design",
    color: "text-orange-500",
    bgColor: "bg-[#fff4e5]",
    subheading: "We design mobile apps users love",
    description:
      "From wireframes to final UI, we design intuitive, attractive apps that enhance usability and connect deeply with your users.",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825647/App_Design_qb4r9a.png",
  },
  {
    name: "Web Development",
    color: "text-red-600",
    bgColor: "bg-red-100",
    subheading: "We develop fast & scalable digital platforms",
    description:
      "We build robust, SEO-friendly websites using modern frameworks — optimized for performance, flexibility, and long-term growth.",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825648/Web_Development_md30ng.png",
  },
  {
    name: "Poster Design",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    subheading: "We create bold, high-impact poster designs",
    description:
      "Whether for digital or print, our posters grab attention, convey your message clearly, and strengthen brand communication.",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825648/Poster_Design_r6syn2.png",
  },
  {
    name: "Logo Design",
    color: "text-green-600",
    bgColor: "bg-green-100",
    subheading: "We design unique logos that define your brand",
    description:
      "We craft timeless, versatile logos that reflect your identity, resonate with your audience, and stand out in any context.",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825647/Logo_Design_unkzvb.png",
  },
];

const coreOfferings = [
  { id: "01", name: "Website Design", desc: "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices." },
  { id: "02", name: "Branding", desc: "We craft unique visual identities, logos, and messaging to build recognition, trust, and long-term success." },
  { id: "03", name: "UX/UI", desc: "From wireframes to final UI, we design intuitive, attractive apps that enhance usability and connect deeply with your users." },
  { id: "04", name: "Motion Design", desc: "Engaging animations and cinematic motion graphics that bring your brand story to life through dynamic storytelling." },
  { id: "05", name: "SEO", desc: "Strategic search engine optimization to boost your organic rankings, drive targeted traffic, and grow your digital footprint." },
  { id: "06", name: "Content Creation", desc: "Compelling brand storytelling through premium copy, visuals, and digital assets designed to resonate with your audience." },
  { id: "07", name: "Landing Page", desc: "High-converting, performance-focused landing pages designed to turn visitors into loyal customers with precision." },
  { id: "08", name: "Webflow Development", desc: "Functional, interactive, and high-performance websites built on Webflow for maximum speed and creative flexibility." },
];

const industriesList = [
  {
    labelColor: "text-brand-500",
    label: "Web design for",
    title: "SaaS Companies",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825655/Saas_cgd0xs.png",
  },
  {
    labelColor: "text-brand-500",
    label: "Web design for",
    title: "Startups",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825647/Startup_Icon_g6hzpp.png",
  },
  {
    labelColor: "text-brand-500",
    label: "Web design for",
    title: "Industries",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825645/Company_z20aqn.png",
  },
];

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToServices = () => {
    const section = document.getElementById('services-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-[100vh] flex flex-col items-center justify-center bg-white ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-medium text-gray-900 tracking-tight font-archivo pb-18"
          >
            Explore Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium mt-20 mb-0"
          >
            Solutions to help your brand<br /> stand out and grow
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-25 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToServices}
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg group"
            aria-label="Scroll to services"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </section>

      {/* Core Creative Offerings Section */}
      <section className="w-full bg-[#f8fafc] py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black max-w-2xl leading-tight">
              Our Core Creative Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreOfferings.map((service, index) => (
              <div key={service.id} className="group h-[320px] perspective-1000">
                <div className="flip-card-inner rounded-[2rem]">
                  {/* Card Front */}
                  <div className="flip-card-front bg-gray-50/50 border border-gray-100 p-8 flex flex-col justify-between transition-colors group-hover:bg-brand-50">
                    <div className="flex justify-between items-start">
                      <motion.span
                        initial={{ fontSize: "1.5rem" }}
                        whileInView={{ fontSize: "3.75rem" }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.05 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="font-black text-brand-100 group-hover:text-brand-200 transition-all duration-700 select-none leading-none inline-block origin-left"
                      >
                        {service.id}
                      </motion.span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {service.name}
                      </h3>
                      <div className="w-8 h-1 bg-brand-600/20 mt-4 group-hover:w-16 group-hover:bg-brand-600 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="flip-card-back bg-brand-600 p-8 flex flex-col justify-between text-left">
                    <div className="flex flex-col gap-2">
                      <span className="text-4xl font-black text-brand-200/50">
                        {service.id}
                      </span>
                      <h4 className="text-white text-2xl font-bold">
                        {service.name}
                      </h4>
                    </div>

                    <div className="flex flex-col gap-6">
                      <p className="text-brand-50 text-sm leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
          }
          .group:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 1.5rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>

      {/* Capabilities Detail Section */}
      <section className="w-full flex flex-col items-center py-24 px-4 sm:px-6 md:px-8 bg-white" id="services-list">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-12 sm:gap-20">

            {servicesList.map((service, index) => (
              <div
                key={index}
                className={`w-full flex flex-col lg:flex-row items-center justify-between ${service.bgColor} rounded-xl lg:rounded-[20px] overflow-hidden shadow-lg mt-6 sm:mt-8 transition-all duration-300`}
              >
                {/* Text Block */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-3 sm:gap-4 text-left">
                  <h3 className={`${service.color} text-sm sm:text-base md:text-lg uppercase font-bold tracking-wide`}>
                    {service.name}
                  </h3>
                  <h4 className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {service.subheading}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  {service.name === 'Web Development' ? (
                    <button
                      type="button"
                      className="flex items-center justify-start gap-2 text-sm sm:text-base text-brand-600 font-bold uppercase tracking-wide hover:text-brand-700 transition-colors duration-200 mt-2"
                    >
                      Get in touch
                      <span className="text-base sm:text-lg">➔</span>
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="flex items-center justify-start gap-2 text-sm sm:text-base text-brand-600 font-bold uppercase tracking-wide hover:text-brand-700 transition-colors duration-200 mt-2"
                    >
                      Get in touch
                      <span className="text-base sm:text-lg">➔</span>
                    </Link>
                  )}
                </div>

                {/* Image Block */}
                <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[520px] bg-[#E5E9F0] flex items-center justify-center rounded-xl lg:rounded-2xl mx-4 lg:mx-0 mb-0 lg:mb-0 p-0 sm:p-6 lg:p-0">
                  <img
                    src={service.image}
                    alt={`${service.name} Illustration`}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl flex flex-col items-center gap-4 sm:gap-6">
          <div className="text-center max-w-2xl px-4">
            <h2 className="text-brand-500 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
              ~ Industries ~
            </h2>
            <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
              Our Focus Areas
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
              We've collaborated across various sectors — with deep expertise in delivering tailored solutions for these key industries.
            </p>
          </div>

          {/* Industries Cards - Responsive Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center mt-4 sm:mt-6">
            {industriesList.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-3 sm:p-4 gap-3 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl shadow-sm w-full max-w-[300px] min-h-[80px] sm:min-h-[90px] transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-md hover:border-brand-500"
              >
                <div className="flex flex-row items-center gap-3 w-full">
                  <img
                    src={item.image}
                    alt={`${item.title} Icon`}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col items-start flex-grow min-w-0">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${item.labelColor}`}>
                      {item.label}
                    </span>
                    <span className="text-gray-900 text-lg sm:text-xl font-semibold leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

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

      <HighClassPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        title="Service is currently unavailable"
        description="This service is currently unavailable. Please check back later."
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-500">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <rect x="11" y="7" width="2" height="6" rx="1" fill="#fff" />
            <rect x="11" y="15" width="2" height="2" rx="1" fill="#fff" />
          </svg>
        }
      />
    </>
  );
};

export default Services;