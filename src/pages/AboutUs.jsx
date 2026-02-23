
import { Link } from "react-router-dom";
import { Lightbulb, TrendingUp, Shield, Users, Heart, Smile, Plus, Minus, Linkedin, Github, Target, Rocket, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from "react";
import { motion } from "framer-motion";
import HomeContact from "../components/HomeContact";
import SEO from "../components/SEO";

const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "Founder & CEO",
    img: "/Sasikiran TT - Founder & CEO.png",
    instagram: "https://www.instagram.com/sasi_._06/",
    linkedin: "https://www.linkedin.com/in/sasikiran-3031s/",
    whatsapp: "https://wa.me/918610500527",
    quote: "Designing the future, one pixel at a time. Impact over everything.",
    github: "https://github.com"
  },
  {
    name: "Sanjana B",
    role: "Co-founder & CTO",
    img: "/Sanjana B - Co Founder & CTO.png",
    instagram: "http://instagram.com/sanjudarla07/",
    linkedin: "https://www.linkedin.com/in/sanjana-0831s/",
    whatsapp: "https://wa.me/916382993891",
    quote: "Building robust architectures that stay ahead of the curve.",
    github: "https://github.com"
  },
  {
    name: "Vasanth R",
    role: "Technical Advisor",
    company: "Lesoko Technologies Private Limited",
    location: "Chennai",
    experience: "5+ Yrs Exp",
    isAdvisor: true,
    img: "/Vasanth R - Technical Advisior.png",
    linkedin: "https://www.linkedin.com/in/vasanth-rv",
    quote: "Expert guidance in scaling engineering teams and architectures.",
    github: "https://github.com"
  },
  {
    name: "Sankar T",
    role: "Business Advisor",
    company: "Landmark Groups",
    location: "Dubai",
    experience: "11+ Yrs Exp",
    isAdvisor: true,
    img: "/Sankar T - Advisor.jpeg",
    linkedin: "https://www.linkedin.com/in/sankarthulasimani/",
    quote: "Leveraging data to drive strategic growth and innovation.",
    github: "https://github.com"
  },
  {
    name: "Kavin Kumar C",
    role: "MERN Stack Developer - Intern",
    img: "/Kavin Kumar C - MERN Stack Developer.jpeg",
    instagram: "",
    linkedin: "",
    whatsapp: "",
    quote: "Building scalable web applications with modern technologies.",
    github: "https://github.com"
  },
  {
    name: "Keerthi Aanand K S",
    role: "MERN Stack Developer - Intern",
    img: "/Keerthi Aanand K S - MERN Stack Developer.jpeg",
    instagram: "",
    linkedin: "",
    whatsapp: "",
    quote: "Crafting elegant solutions for complex problems.",
    github: "https://github.com"
  },
  {
    name: "Manish Prakkash M S",
    role: "App Developer - Intern",
    img: "/Manish Prakkash M S - App Developer.png",
    instagram: "",
    linkedin: "",
    whatsapp: "",
    quote: "Creating mobile experiences that users love.",
    github: "https://github.com"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly challenge norms by turning creative ideas into practical, high-impact digital solutions.",
    icon: Lightbulb,
  },
  {
    title: "Growth",
    description: "We believe growth is continuous—for our team, our clients, and the communities we support.",
    icon: TrendingUp,
  },
  {
    title: "Ownership",
    description: "Every project we take on is our responsibility. We lead with accountability and integrity.",
    icon: Shield,
  },
  {
    title: "Team Work",
    description: "Collaboration is at the heart of our process. We thrive on sharing ideas and celebrating wins.",
    icon: Users,
  },
  {
    title: "Commitment",
    description: "We commit deeply to our clients' visions and to our craft through consistency and passion.",
    icon: Heart,
  },
  {
    title: "Positivity",
    description: "A positive attitude shapes everything we do—from communication to creativity.",
    icon: Smile,
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Deep Dive",
    description: "Understanding goals, users, and project requirements."
  },
  {
    number: "02",
    title: "Pre-Production",
    description: "Research, planning, and defining the creative direction."
  },
  {
    number: "03",
    title: "Design Proposition",
    description: "Presenting initial concepts and design direction."
  },
  {
    number: "04",
    title: "Design Development",
    description: "Refining designs into detailed, production-ready outputs."
  },
  {
    number: "05",
    title: "Delivery & Testing",
    description: "Design finalization, testing, delivery, and smooth handover."
  }
];

const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div
      className="w-full border border-brand-500/20 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col xl:flex-row relative xl:min-h-[450px]"
      onMouseLeave={() => setActiveStep(null)}
    >
      {approachSteps.slice(0, 5).map((step, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveStep(idx)}
          className="xl:flex-1 py-10 md:py-16 px-6 flex flex-col items-center text-center group transition-all duration-500 relative cursor-default"
        >
          <div className="hidden xl:block absolute right-0 top-16 bottom-16 w-[1px] bg-white/20" />
          {idx === 0 && (
            <div className="hidden xl:block absolute left-0 top-16 bottom-16 w-[1px] bg-white/20" />
          )}
          {idx !== 4 && (
            <div className="xl:hidden absolute bottom-0 left-8 right-8 h-[1px] bg-white/20" />
          )}
          <span className={`text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ease-out ${activeStep === idx ? 'mb-12 text-brand-500' : 'mb-10 text-gray-500'}`}>
            Step {step.number}
          </span>
          <h3 className={`text-xl font-medium mb-6 h-12 flex items-center justify-center transition-colors duration-300 ${activeStep === idx ? 'text-white' : 'text-gray-400'}`}>
            {step.title}
          </h3>
          <div
            className={`w-full py-2.5 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden ${activeStep === idx ? 'bg-brand-500 shadow-[0_0_20px_rgba(113,211,0,0.3)]' : 'bg-brand-500/10'
              }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${activeStep === idx ? 'bg-black text-brand-500' : 'bg-brand-500/20 text-brand-500'
              }`}>
              {activeStep === idx ? <Minus size={14} /> : <Plus size={14} />}
            </div>
          </div>
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${activeStep === idx ? 'grid-rows-[1fr] opacity-100 pt-8' : 'grid-rows-[0fr] opacity-0 pt-0'
              }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function About() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-transparent">
      <SEO
        title="About Our Studio"
        description="Learn about Techno Vanam, a design-first creative studio. We combine purpose, passion, and precision to build the future of digital interaction."
        keywords="About Techno Vanam, Techno, Vanam, TechnoVanam, Creative Studio Team, Digital Design Vision, Sasikiran TT, Sanjana B, Design Agency India, Athlixir, WebBrain"
      />
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-16 pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-transparent flex items-center justify-center overflow-hidden h-[100dvh] lg:h-screen">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6 tracking-tight text-white text-center">
            We are a <span className="text-brand-500">Design-led Digital Studio</span> focused on crafting purposeful experiences
          </h1>
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

      {/* Team Section */}
      <section id="next-section" className="min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          {/* Section Header */}
          <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr] gap-8 mb-20 lg:mb-32 items-start">
            <div className="flex items-center gap-3 mt-2">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Meet the Collective</span>
            </div>
            <div className="md:justify-self-end text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                A specialized group of designers and developers united by a single goal.
              </h2>
            </div>
          </div>

          {/* Team Grid - Portrait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                {/* Main Card Container */}
                <div className="relative w-full rounded-tl-[40px] rounded-br-[40px] bg-[#0a0a0a] overflow-hidden transition-all duration-500 shadow-2xl">
                  {/* Default State Content */}
                  <div className="flex flex-col h-full">
                    {/* Image Area */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-tl-[40px] rounded-br-[40px]">
                      {member.img ? (
                        <img
                          src={member.img}
                          alt={member.name}
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${member.name === "Vasanth R" ? "object-top" : member.name === "Sasikiran TT" ? "object-bottom -translate-y-2" : "object-center"}`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#0d0d0d] border border-white/5 group-hover:bg-[#121212] transition-colors duration-500">
                          <span className="text-2xl lg:text-3xl text-brand-500 font-black uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                            {member.name.split(' ')[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Static Info Area (Lower Part) */}
                    <div className="p-4 py-10 flex flex-col items-center text-center">
                      <div className="px-2 py-1">
                        <span className="text-brand-500 text-[22px] font-black uppercase whitespace-nowrap">
                          {member.name}
                        </span>
                      </div>
                      <p className="text-white text-[16px] uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay: Lime Green Box covering EVERYTHING */}
                  {/* Starts from top (-translate-y-full) and slides down (translate-y-0) */}
                  <div className="absolute inset-0 bg-[#71d300] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col p-10 transform -translate-y-full group-hover:translate-y-0 rounded-tl-[40px] rounded-br-[40px] ">
                    {/* Social Icons */}
                    <div className="flex gap-3 mb-10">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                        <Linkedin size={20} fill="white" />
                      </a>
                    </div>

                    {/* Personal Quote (Visible for all) */}
                    <p className="text-black text-lg font-medium leading-[1.4] italic mb-6">
                      "{member.quote}"
                    </p>

                    {/* Bottom pill-style name in hover */}
                    <div className="mt-auto">
                      <div className="inline-block px-5 py-1.5 rounded-full border-2 border-black text-black text-sm font-bold mb-3">
                        "{member.name.split(' ')[0]}"
                      </div>
                      <p className="text-black/80 text-[10px] font-bold uppercase tracking-[0.2em]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-10 lg:gap-20 border border-brand-500/30 shadow-sm card-glow">
          {/* Left Column: Logo & Label */}
          <div className="w-full xl:w-1/3 flex flex-col">
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(113,211,0,0.4)]"></div>
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Who we are</span>
            </div>

            {/* Logo Card */}
            <div className="bg-brand-50 rounded-3xl p-4 border border-brand-100/50 card-glow w-full max-w-md mx-auto lg:mt-auto">
              {/* White Inner Card with Logo */}
              <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 border border-gray-50/10 hover:shadow-md">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  width="128"
                  height="128"
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

          {/* Right Column: Text Content */}
          <div className="w-full xl:w-2/3 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-brand-500 mb-6 leading-tight">
              A design-led digital studio crafting purposeful experiences
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.
            </p>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
              For us, design isn't just a visual; it's an influential tool that helps brands achieve lasting success.
            </p>

            <Link
              to="/careers"
              className="btn-primary w-fit group"
            >
              <span className="relative z-10 font-bold flex items-center gap-3">
                Work with us
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="btn-primary-shine"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="w-full bg-transparent py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          {/* Section Header */}
          <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr] gap-8 mb-20 lg:mb-32 items-start">
            <div className="flex items-center gap-3 mt-2">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">What Drives Us</span>
            </div>
            <div className="md:justify-self-end text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                Crafting design that speaks. Building products that scale.
              </h2>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-9">
            {/* Left Card: Story of Techno Vanam */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative bg-[#0a0a0a] border border-brand-500/30 rounded-[2.5rem] overflow-hidden flex flex-col h-full card-glow"
            >
              {/* Image / Logo Section - Re-imagined */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent opacity-50" />

                {/* Logo Section */}
                <div className="absolute inset-0 flex items-center justify-center p-12 pt-32">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    <img
                      src="/Logo.png"
                      alt="Techno Vanam Logo"
                      width="176"
                      height="176"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Floating Tags */}
                <div className="absolute top-8 left-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-500 text-black rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">The Beginning</span>
                  </div>
                </div>
              </div>

              {/* Text Section - Manifesto Style */}
              <div className="p-8 sm:p-12 pt-0 flex-1 relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-8 bg-brand-500" />
                    <span className="text-xs font-bold text-brand-500 uppercase tracking-[0.3em]">Story</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
                    Story of <span className="text-brand-500">Techno Vanam</span>
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium">
                    Born from a passion to bridge the gap between <span className="text-white">human-centric design</span> and <span className="text-brand-500">robust engineering</span>.
                  </p>

                  <div className="pl-6 border-l-2 border-brand-500/30 space-y-4">
                    <p className="text-base text-gray-400 leading-relaxed">
                      Founded in 2025, <span className="text-white font-semibold">Techno Vanam</span> was built on a singular belief — digital products should be as beautiful as they are functional.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed italic opacity-80">
                      "We don’t just build products; we craft lasting legacies for brands in the digital landscape."
                    </p>
                  </div>

                  {/* Our Principles */}
                  <div className="pt-8 mt-4">
                    <h5 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">Our Principles</h5>
                    <div className="space-y-4">
                      {[
                        { title: "Design-Led", desc: "Purposeful design at the core of everything we build" },
                        { title: "Impact-Focused", desc: "Solutions that create meaningful, measurable results" },
                        { title: "Future-Ready", desc: "Products designed to adapt, scale, and evolve" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 group/principle">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <p className="text-sm leading-relaxed">
                            <span className="text-white font-bold">{item.title} — </span>
                            <span className="text-gray-400 group-hover/principle:text-gray-300 transition-colors">{item.desc}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mission + Vision */}
            <div className="flex flex-col gap-8">
              {/* Our Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-[#0a0a0a] border border-brand-500/30 rounded-[2.5rem] p-8 sm:p-10 overflow-hidden lg:flex-1 flex flex-col justify-between"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[100px] -mr-32 -mt-32 transition-colors group-hover:bg-brand-500/10" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-brand-500" />
                    </div>
                    <span className="text-xs font-bold text-brand-500 tracking-[0.2em] uppercase">Our Mission</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 group-hover:text-brand-500 transition-colors duration-300">
                    Strategy-led design that drives results.
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                    We combine <span className="text-white font-medium">technical precision</span> with creative intuition to craft digital products that scale, perform, and resonate with users.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Design-First", desc: "A human-centered, experience-driven approach", icon: Heart },
                      { title: "Scale-Ready", desc: "Built for growth and long-term success", icon: TrendingUp }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-all duration-300 group/item">
                        <item.icon className="w-5 h-5 text-brand-500 mb-3 group-hover/item:scale-110 transition-transform" />
                        <h5 className="text-sm font-bold text-white mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Our Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative bg-[#0a0a0a] border border-brand-500/30 rounded-[2.5rem] p-8 sm:p-10 overflow-hidden lg:flex-1 flex flex-col justify-between"
              >
                {/* Background Glow */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/5 blur-[100px] -ml-32 -mb-32 transition-colors group-hover:bg-brand-500/10" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-brand-500" />
                    </div>
                    <span className="text-xs font-bold text-brand-500 tracking-[0.2em] uppercase">Our Vision</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 group-hover:text-brand-500 transition-colors duration-300">
                    Building the future of digital interaction.
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Empowering global creators with clarity",
                      "Redefining meaningful digital impact",
                      "Making innovation accessible at scale"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group/item text-gray-400 hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                        <span className="text-sm sm:text-base font-medium">{item}</span>
                        <ArrowRight className="w-4 h-4 text-brand-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Est. 2025</span>
                  <div className="flex -space-x-3">
                    {teamMembers.map((member, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden transition-all duration-300 ring-1 ring-brand-500/30 bg-[#111] flex items-center justify-center">
                        {member.img ? (
                          <img
                            src={member.img}
                            alt={member.name}
                            width="32"
                            height="32"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span className="text-[10px] font-bold text-brand-500/50 uppercase">
                            {member.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-black min-h-screen flex flex-col justify-center py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr] gap-8 mb-20 lg:mb-32 items-start">
            <div className="flex items-center gap-3 mt-2">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Our Approach</span>
            </div>
            <div className="md:justify-self-end text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                First step to solving a problem is recognizing there is one.
              </h2>
            </div>
          </div>
          <ApproachSection />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          {/* Section Header */}
          <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr] gap-8 mb-20 lg:mb-32 items-start">
            <div className="flex items-center gap-3 mt-2">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Our Values</span>
            </div>
            <div className="md:justify-self-end text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                Design for impact. Build with purpose. Create with clarity.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] border border-brand-500/20 bg-white/[0.02] hover:border-brand-500/50 transition-all duration-500 group"
              >
                <div className="mb-6">
                  {(() => {
                    const IconComponent = value.icon;
                    return <IconComponent className="w-7 h-7 text-brand-500 opacity-80 group-hover:opacity-100 transition-opacity" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Careers Section */}
      <section className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          {/* Section Header */}
          <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr] gap-8 mb-12 lg:mb-16 items-start">
            <div className="flex items-center gap-3 mt-2">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Careers</span>
            </div>
            <div className="md:justify-self-end text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                We are explorers. We constantly seek ways to make an impact towards solving problems through creativity.
              </h2>
            </div>
          </div>

          {/* Careers Card */}
          <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-10 lg:gap-20 border border-brand-500/30 card-glow">
            {/* Left Column: Content */}
            <div className="w-full xl:w-2/3 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h3>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                We're always looking for talented individuals who share our passion for digital excellence and purposeful design.
              </p>
              <Link
                to="/careers"
                className="btn-primary w-fit group"
              >
                <span className="relative z-10 font-bold flex items-center gap-3">
                  See Job Openings
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="btn-primary-shine"></div>
              </Link>
            </div>

            {/* Right Column: Visual Element */}
            <div className="w-full xl:w-1/3 flex items-center justify-center">
              <div className="bg-brand-50 rounded-3xl p-4 border border-brand-100/50 card-glow w-full max-w-md mx-auto">
                {/* White Inner Card with Logo */}
                <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 border border-gray-50/10 hover:shadow-md">
                  <img
                    src="/Logo.png"
                    alt="Techno Vanam Logo"
                    width="128"
                    height="128"
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
          </div>
        </div>
      </section>
      <HomeContact />
    </div>
  );
}