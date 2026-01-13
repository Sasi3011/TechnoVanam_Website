import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, Plus, Sparkles, Layout, Palette, PanelsTopLeft, Video, TrendingUp, PenTool, Smartphone, Globe, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HomeContact from "../components/HomeContact";
import Testimonials from "../components/Testimonials";

const coreOfferings = [
  { id: "01", slug: "website-design", name: "Website Design", icon: Layout, desc: "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices." },
  { id: "02", slug: "branding", name: "Branding", icon: Palette, desc: "We craft unique visual identities, logos, and messaging to build recognition, trust, and long-term success." },
  { id: "03", slug: "ux-ui-design", name: "UX/UI Design", icon: PanelsTopLeft, desc: "From wireframes to final UI, we design intuitive, attractive apps that enhance usability and connect deeply with your users." },
  { id: "04", slug: "web-development", name: "Web Development", icon: Code2, desc: "Functional, interactive, and high-performance websites built using the latest modern frameworks and technologies." },
  { id: "05", slug: "app-design", name: "App Design", icon: Smartphone, desc: "Strategic mobile app design that focuses on usability, performance, and delivering a seamless user journey." },
  { id: "06", slug: "motion-design", name: "Motion Design", icon: Video, desc: "Engaging animations and cinematic motion graphics that bring your brand story to life through dynamic storytelling." },
  { id: "07", slug: "social-media", name: "Social Media", icon: TrendingUp, desc: "High-impact digital marketing assets and strategies designed to boost engagement and grow your social footprint." },
  { id: "08", slug: "posters-prints", name: "Posters & Prints", icon: PenTool, desc: "Bold, eye-catching print and digital poster designs that grab attention and convey your brand's message clearly." },
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
      question: "Do you offer revisions?",
      answer: "Yes, we offer multiple rounds of revisions to ensure the final design aligns perfectly with your vision and goals."
    },
    {
      question: "What do you need from me to start the project?",
      answer: "We typically need your brand guidelines, project goals, any specific content or assets, and a clear understanding of your target audience."
    },
    {
      question: "How long does it take to design a website?",
      answer: "A standard website design project usually takes between 4 to 8 weeks, depending on complexity and the scope of work."
    },
    {
      question: "What is user experience (UX) design?",
      answer: "UX design is the process of creating products that provide meaningful and relevant experiences to users, focusing on usability and accessibility."
    },
    {
      question: "How can I optimize my website's speed?",
      answer: "We optimize speed through code minification, image compression, efficient hosting, and implementing modern performance best practices."
    }
  ],
  right: [
    {
      question: "How long does branding take?",
      answer: "A comprehensive branding project typically takes 3 to 6 weeks, covering research, identity design, and brand collateral."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in SaaS, Tech Startups, E-commerce, and Creative Agencies, but we work with various industries looking for premium design."
    },
    {
      question: "How can my website enhance my branding?",
      answer: "Your website is your digital storefront; a cohesive design reinforces your brand identity and builds trust with your audience."
    },
    {
      question: "What is a content management system (CMS)?",
      answer: "A CMS is a software application that allows users to create, manage, and modify content on a website without needing specialized technical knowledge."
    },
    {
      question: "Why is website design important?",
      answer: "Good design improves user engagement, boosts credibility, helps with SEO, and ultimately drives better business results."
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 text-brand-500 text-sm font-bold rounded-full mb-8 tracking-wide border border-brand-500/20">
              <Sparkles size={16} />
              TRANSFORM YOUR VISION
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
              Explore Our <br />
              <span className="text-brand-500">Service Offerings</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end digital solutions designed to help your brand stand out and grow in a competitive landscape.
            </p>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Core Creative Offerings Section */}
      <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[3rem] p-10 sm:p-16 border border-white/10 card-glow">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white max-w-2xl leading-tight">
              Our Core Creative Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreOfferings.map((service, index) => (
              <div key={service.id} className="group aspect-square h-auto perspective-1000">
                <div className="flip-card-inner rounded-[2rem]">
                  {/* Card Front */}
                  <div className="flip-card-front bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between transition-colors group-hover:bg-brand-500/5 card-glow card-glow-hover">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                        <service.icon size={28} />
                      </div>
                      <span className="font-black text-white/5 text-5xl select-none leading-none">
                        {service.id}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-500 transition-colors">
                        {service.name}
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
                        {service.name}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                        {service.desc}
                      </p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-brand-500 text-xs font-bold hover:gap-3 transition-all"
                      >
                        VIEW DETAILS <ArrowRight size={14} />
                      </Link>
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

      {/* Expertise Section */}
      <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[40px] px-8 sm:px-12 md:px-12  flex flex-col lg:flex-row items-center gap-12 lg:gap-20 card-glow">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 py-8 sm:py-12 md:py-16">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              <span className="text-sm font-semibold text-white tracking-wider">Expertise</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-4xl font-medium text-white leading-tight">
              We solve real problems
            </h2>

            <p className="text-gray-400 text-[17px] leading-relaxed max-w-xl mb-40">
              We combine years of expertise in UX/UI, Motion design, Webflow development, and Web design to build high-performance digital experiences that not only look great but drive engagement and results for our clients.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Let's talk 👋
            </Link>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="w-[65%] aspect-video bg-black rounded-[32px] overflow-hidden py-0 h-[500px]">
            {/* Future video will go here */}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="w-full bg-black pb-24 sm:pb-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[40px] px-8 sm:px-12 md:px-16 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 card-glow">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 pb-32">
            <div className="flex items-center gap-2 pb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              <span className="text-sm font-medium text-white tracking-wider leading-none">What makes us different?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-5xl font-medium text-white leading-tight">
              Techno Vanam<br />
              In Numbers
            </h2>

            <p className="text-gray-400 text-[17px] leading-relaxed max-w-md">
              Design is more than aesthetics—it's about measurable impact. Here's how we make a difference.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="group relative inline-block px-4 sm:px-6 py-2 sm:py-3 bg-brand-500 font-medium text-white rounded-full text-base sm:text-lg overflow-hidden shadow-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  Let's talk <span className="text-2xl">👋</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-black/40 rounded-[2rem] p-6 flex flex-col justify-between h-[240px] relative group border border-white/5 hover:border-brand-500/30 transition-colors duration-300 card-glow card-glow-hover">
                <span className="absolute top-8 right-8 text-sm font-medium text-gray-600 group-hover:text-gray-400 transition-colors">{stat.id}</span>
                <div className="mt-auto space-y-2">
                  <h3 className="text-5xl font-medium text-white leading-none">{stat.value}</h3>
                  <p className="text-gray-400 font-medium leading-tight pr-4">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
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
      <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[40px] px-8 sm:px-12 md:px-16 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 card-glow">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-500"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Interested?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight max-w-sm">
              Let's work together!
            </h2>
          </div>

          {/* Right Content */}
          <div className="max-w-xl space-y-12">
            <p className="text-gray-400 text-xl sm:text-2xl leading-relaxed font-medium">
              Let's bring your vision to life and transform your ideas into a powerful, unforgettable brand that drives growth and success!
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-primary flex items-center justify-center px-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a call <ArrowRight size={18} />
                </span>
                <div className="btn-primary-shine"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default Services;