import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, Plus, Sparkles, Layout, Palette, PanelsTopLeft, Video, TrendingUp, PenTool, Smartphone, Globe, Code2, Box, Settings, Search, Zap, Megaphone, Server, Grid, Presentation, Package, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HomeContact from "../components/HomeContact";
import Testimonials from "../components/Testimonials";

const serviceCategories = [
  {
    category: "UI / UX & Design Services",
    icon: Palette,
    items: [
      { title: "UI / UX Design", icon: PanelsTopLeft, id: "ux-ui-design" },
      { title: "Website Design", icon: Layout, id: "website-design" },
      { title: "App Design", icon: Smartphone, id: "app-design" },
      { title: "Wireframing & Prototyping", icon: Box, id: "wireframing" },
      { title: "Landing Page Design", icon: Layout, id: "landing-page-design" },
      { title: "Portfolio Website Design", icon: Globe, id: "portfolio-design" },
      { title: "Design Systems", icon: Grid, id: "design-systems" },
      { title: "Creative Direction", icon: Sparkles, id: "branding" }
    ]
  },
  {
    category: "Web Development",
    icon: Code2,
    items: [
      { title: "Web Development", icon: Code2, id: "web-development" },
      { title: "Frontend Development", icon: Layout, id: "web-development" },
      { title: "Backend Development", icon: Server, id: "web-development" },
      { title: "Website Redesign / Revamp", icon: RefreshCw, id: "website-design" }
    ]
  },
  {
    category: "App Development",
    icon: Smartphone,
    items: [
      { title: "App Development", icon: Smartphone, id: "app-design" },
      { title: "Android App Development", icon: Smartphone, id: "app-design" },
      { title: "iOS App Development", icon: Smartphone, id: "app-design" }
    ]
  },
  {
    category: "Product Services",
    icon: Box,
    items: [
      { title: "Product Design (Startups & SaaS)", icon: Box, id: "ux-ui-design" },
      { title: "Presentation Design", icon: Presentation, id: "branding" }
    ]
  },
  {
    category: "Branding & Visual Identity",
    icon: Palette,
    items: [
      { title: "Brand Identity Design", icon: Palette, id: "branding" },
      { title: "Branding & Graphic Design", icon: PenTool, id: "branding" },
      { title: "Logo Design", icon: Sparkles, id: "branding" },
      { title: "Poster & Marketing Creatives", icon: Layout, id: "posters-prints" },
      { title: "Packaging Design", icon: Package, id: "branding" }
    ]
  },
  {
    category: "Social Media & Content",
    icon: Megaphone,
    items: [
      { title: "Social Media Design", icon: Palette, id: "social-media" },
      { title: "Social Media Handling", icon: Megaphone, id: "social-media" }
    ]
  },
  {
    category: "SEO & Performance",
    icon: TrendingUp,
    items: [
      { title: "SEO Optimization", icon: Search, id: "web-development" },
      { title: "Performance Optimization", icon: Zap, id: "web-development" }
    ]
  },
  {
    category: "Maintenance & Support",
    icon: Settings,
    items: [
      { title: "Website Maintenance & Support", icon: Settings, id: "web-development" }
    ]
  }
];

const stats = [
  { id: "01", value: "100+", label: "Projects Completed" },
  { id: "02", value: "98%", label: "Client Satisfaction Rate" },
  { id: "03", value: "25+", label: "Experts In Our Team" },
  { id: "04", value: "8/10", label: "Clients Return For More" },
];


// Testimonials are now handled by the imported Testimonials component

const faqData = {
  left: [
    {
      question: "What services does Techno Vanam offer?",
      answer: "We offer comprehensive digital solutions including UI/UX Design, Web & App Development, Branding & Visual Identity, Product Design for Startups & SaaS, SEO Optimization, Performance Enhancement, Social Media Design & Management, and Website Maintenance & Support."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks, branding projects 3-6 weeks, and app development 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer revisions during the project?",
      answer: "Yes, we offer multiple rounds of revisions at key milestones to ensure the final deliverable perfectly aligns with your vision and business goals. Your satisfaction is our priority."
    },
    {
      question: "What do you need from me to start?",
      answer: "We typically need your brand guidelines (if available), project goals, target audience information, any existing assets or content, and a clear understanding of your business objectives and timeline."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! We offer comprehensive maintenance and support packages to keep your website or app running smoothly, including updates, security patches, performance monitoring, and technical assistance."
    }
  ],
  right: [
    {
      question: "What industries do you work with?",
      answer: "We specialize in SaaS, Tech Startups, E-commerce, and Creative Agencies, but we work with diverse industries seeking premium digital experiences. Our adaptable approach ensures we deliver value regardless of your sector."
    },
    {
      question: "Can you help with both design and development?",
      answer: "Yes! We provide end-to-end solutions covering UI/UX design, frontend and backend development, app development for iOS and Android, and everything in between. We're your one-stop digital partner."
    },
    {
      question: "How do you approach SEO and performance optimization?",
      answer: "We implement modern SEO best practices from the ground up, including technical SEO, on-page optimization, and performance enhancements like code minification, image optimization, and efficient hosting strategies to ensure fast, search-friendly websites."
    },
    {
      question: "What makes Techno Vanam different?",
      answer: "We're a design-led digital studio that combines strategic thinking with exceptional execution. Our focus on measurable impact, user-centric design, and cutting-edge technology ensures your digital presence drives real business results."
    },
    {
      question: "Do you offer branding services?",
      answer: "Yes, we provide comprehensive branding services including brand identity design, logo design, visual identity systems, brand guidelines, packaging design, and marketing collateral to establish a strong, cohesive brand presence."
    }
  ]
};

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-t border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className="text-xl sm:text-2xl font-medium text-white pr-8 group-hover:text-brand-500 transition-colors">
          {question}
        </span>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-500 text-black rotate-45' : 'bg-white/5 text-white'}`}>
          <Plus className="w-6 h-6" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-lg pb-8 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-16 pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-transparent flex items-center justify-center overflow-hidden h-[100dvh] lg:h-screen">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6 tracking-tight text-white text-center">
            Explore Our <span className="text-brand-500">Service Offerings</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end digital solutions designed to help your brand stand out and grow in a competitive landscape.
          </p>
        </div>

        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
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

      {/* Our Services - Clean Hover Design */}
      <section id="next-section" className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Container with white background and rounded corners */}
          <div className="bg-[#0a0a0a] rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16 border border-white/10 shadow-sm card-glow">

            {/* Header Section - Parallel Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* Left: Label */}
              <div className="lg:col-span-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></div>
                <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Our services</span>
              </div>

              {/* Right: Main Heading */}
              <div className="lg:col-span-8 lg:col-start-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                  Strategy-led services that transform vision into measurable impact.
                </h2>
              </div>
            </div>

            {/* Service Animation Styles */}
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

            {/* Services List - Categorized */}
            <div className="space-y-20 mb-12">
              {serviceCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8 px-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 border border-brand-500/20">
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{category.category}</h3>
                  </div>

                  {/* Items Grid (Flipping Cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/5">
                    {category.items.map((service, index) => (
                      <div key={index} className="group aspect-square h-auto perspective-1000">
                        <div className="flip-card-inner rounded-[2rem]">
                          {/* Card Front */}
                          <div className="flip-card-front bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between transition-colors group-hover:bg-brand-500/5 card-glow card-glow-hover">
                            <div className="flex justify-between items-start">
                              <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                              </div>
                              <span className="font-black text-white/5 text-5xl select-none leading-none">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-brand-500 transition-colors">
                                {service.title}
                              </h3>
                              <div className="w-8 h-1 bg-brand-500/20 mt-4 group-hover:w-16 group-hover:bg-brand-500 transition-all duration-500"></div>
                            </div>
                          </div>

                          {/* Card Back */}
                          <div className="flip-card-back bg-[#0a0a0a] p-6 flex flex-col justify-between text-left border border-white/10 card-glow overflow-hidden">
                            <div className="flex flex-col gap-3">
                              <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-500">
                                <service.icon size={20} />
                              </div>
                              <h4 className="text-white text-xl font-bold leading-tight">
                                {service.title}
                              </h4>
                            </div>

                            <div className="space-y-4">
                              <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                                {service.description}
                              </p>

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Expertise Section */}
      {/* Expertise Section - Who We Are Style */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 border border-white/10 shadow-sm card-glow">
          {/* Left Column - Logo Card */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#71d300]"></div>
              <span className="text-xl sm:text-2xl font-semibold text-[#71d300] tracking-wide">Expertise</span>
            </div>

            {/* Logo Card */}
            <div className="bg-brand-50 rounded-3xl p-4 mt-auto border border-brand-100/50 card-glow">
              {/* White Inner Card with Logo */}
              <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 hover:shadow-md border border-gray-50">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  className="w-24 sm:w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bottom Label */}
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="font-bold text-brand-950 text-xs sm:text-sm tracking-tight uppercase">Designing Digital Future</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] mb-6 leading-tight">
              We solve real problems
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              We combine years of expertise in UI/UX Design, Web & App Development, Branding & Visual Identity, SEO Optimization, and Performance Enhancement to build high-performance digital experiences that not only look great but drive engagement and measurable results for our clients.
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-fit"
            >
              <span className="relative z-10 font-bold flex items-center gap-3">
                Let's talk
                <span className="text-xl">👋</span>
              </span>
              <div className="btn-primary-shine"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      {/* Numbers Section - Refined Style */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 border border-white/10 shadow-sm card-glow">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#71d300]"></div>
              <span className="text-xl sm:text-2xl font-semibold text-[#71d300] tracking-wide">What makes us different?</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6 leading-tight">
              Techno Vanam<br />
              In Numbers
            </h2>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              Design is more than aesthetics—it's about measurable impact. Here's how we make a difference.
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-fit"
            >
              <span className="relative z-10 font-bold flex items-center gap-3">
                Let's talk
                <span className="text-xl">👋</span>
              </span>
              <div className="btn-primary-shine"></div>
            </button>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-brand-50/5 rounded-[2rem] p-6 flex flex-col justify-between h-[200px] relative group border border-white/5 hover:border-brand-500/30 transition-colors duration-300 card-glow card-glow-hover">
                <span className="absolute top-6 right-6 text-sm font-medium text-gray-500 group-hover:text-brand-500 transition-colors">{stat.id}</span>
                <div className="mt-auto space-y-1">
                  <h3 className="text-4xl sm:text-5xl font-medium text-white leading-none tracking-tight">{stat.value}</h3>
                  <p className="text-gray-400 font-medium leading-tight pr-4 text-sm sm:text-base">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="w-full bg-black min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 mb-20 px-8 sm:px-12 md:px-16 lg:px-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-500"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight">
              Frequently<br />Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 px-4 sm:px-8 md:px-12 lg:px-0">
            <div className="flex flex-col">
              {faqData.left.map((item, index) => (
                <FAQItem
                  key={`left-${index}`}
                  {...item}
                  isOpen={openFaq === `left-${index}`}
                  onToggle={() => toggleFaq(`left-${index}`)}
                />
              ))}
            </div>
            <div className="flex flex-col border-b border-gray-200 lg:border-none">
              {faqData.right.map((item, index) => (
                <FAQItem
                  key={`right-${index}`}
                  {...item}
                  isOpen={openFaq === `right-${index}`}
                  onToggle={() => toggleFaq(`right-${index}`)}
                />
              ))}
              <div className="hidden lg:block border-t border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="w-full bg-black min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-16"> */}
      {/* <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[40px] px-8 sm:px-12 md:px-16 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 card-glow"> */}
      {/* Left Content */}
      {/* <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-500"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Interested?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight max-w-sm">
              Let's work together!
            </h2>
          </div> */}

      {/* Right Content */}
      {/* <div className="max-w-xl space-y-12">
            <p className="text-gray-400 text-xl sm:text-2xl leading-relaxed font-medium">
              Let's bring your vision to life and transform your ideas into a powerful, unforgettable brand that drives growth and success!
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center px-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a call <ArrowRight size={18} />
                </span>
                <div className="btn-primary-shine"></div>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <HomeContact />
    </>
  );
};

export default Services;