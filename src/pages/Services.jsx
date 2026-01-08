import React from "react";
import { Link } from "react-router-dom";
import HighClassPopup from '../components/HighClassPopup';
import { useState } from 'react';

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

  return (
    <>
      {/* Services Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-4 sm:gap-6">
            <div className="w-full text-left">
              <p className="text-sm sm:text-base md:text-lg text-brand-600 font-semibold uppercase">
                Services
              </p>
              <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2 md:mt-3">
                What we do
              </h2>
              <p className="text-gray-500 mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                At Technovanam, our end-to-end design and development services are crafted to empower your business, enhance your digital presence, and drive growth. We blend smart strategy, modern technology, and user-focused design to elevate your brand and help you thrive in today's competitive landscape.
              </p>
            </div>

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