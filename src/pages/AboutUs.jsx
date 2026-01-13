import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Lightbulb, TrendingUp, Shield, Users, Heart, Smile, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import phoneImg from "../assets/expertise/phone.png";
import tabletImg from "../assets/expertise/tablet.png";
import ind1 from "../assets/expertise/industry1.png";
import ind2 from "../assets/expertise/industry2.png";
import ind3 from "../assets/expertise/industry3.png";
import HomeContact from "../components/HomeContact";
const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "Founder & CEO",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757826413/Sasi_vpik2a.png",
    instagram: "https://www.instagram.com/sasi_._06/",
    linkedin: "https://www.linkedin.com/in/sasikiran-3031s/",
  },
  {
    name: "Sanjana B",
    role: "Co-founder & CTO",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757826375/Sanju_kqcvvo.png",
    instagram: "http://instagram.com/sanjudarla07/",
    linkedin: "https://www.linkedin.com/in/sanjana-0831s/",
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly challenge norms by turning creative ideas into practical, high-impact digital solutions.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Growth",
    description: "We believe growth is continuous—for our team, our clients, and the communities we support.",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Ownership",
    description: "Every project we take on is our responsibility. We lead with accountability and integrity.",
    icon: Shield,
    color: "text-brand-500",
    bgColor: "bg-brand-50",
  },
  {
    title: "Team Work",
    description: "Collaboration is at the heart of our process. We thrive on sharing ideas and celebrating wins.",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Commitment",
    description: "We commit deeply to our clients' visions and to our craft through consistency and passion.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    title: "Positivity",
    description: "A positive attitude shapes everything we do—from communication to creativity.",
    icon: Smile,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Deep Dive",
    description: "In-depth exploration of business and the product."
  },
  {
    number: "02",
    title: "Pre-Production",
    description: "Identification of the core problems, pain points, and art direction."
  },
  {
    number: "03",
    title: "Design Proposition",
    description: "Presenting concept solutions."
  },
  {
    number: "04",
    title: "Design Development",
    description: "Further development of the concept to final product."
  },
  {
    number: "05",
    title: "Delivery and Testing",
    description: "Design finalization, testing, delivery and handover."
  }
];

const CircularTeam = () => {
  const avatars = [
    "https://i.pravatar.cc/150?u=12",
    "https://i.pravatar.cc/150?u=24",
    "https://i.pravatar.cc/150?u=36",
    "https://i.pravatar.cc/150?u=48",
    "https://i.pravatar.cc/150?u=60",
    "https://i.pravatar.cc/150?u=72",
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-10 border border-dashed border-gray-100 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center relative z-10 shadow-inner">
        <div className="w-10 h-10 bg-brand-500 rounded-full shadow-lg flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-4 bg-white/30 rounded-full"
          />
        </div>
      </div>
      {avatars.map((url, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-white"
          animate={{
            rotate: (i * 60) + (360),
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            top: "calc(50% - 20px)",
            left: "calc(50% - 20px)",
            translateY: -90,
          }}
        >
          <img src={url} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};



const ExpertiseSlideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center pt-8">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-[90%] h-auto rounded-lg shadow-2xl"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('drives-us-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Staggered reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
            We are a <span className="text-brand-500">design-led digital studio</span> focused on crafting purposeful experiences
          </h1>
        </div>

        {/* Animated Scroll Down Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-10 h-10 rounded-full border-2 border-brand-500 flex items-center justify-center group-hover:bg-brand-500 transition-all duration-300">
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

      {/* Who We Are Section (Redesigned: Content Left, Logo Right) */}
      <section className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 border border-white/10 shadow-sm card-glow">
          {/* Right Column (Logo Card) */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            {/* Logo Card */}
            <div className="bg-brand-50 rounded-3xl p-4 border border-brand-100/50 card-glow">
              <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 hover:shadow-md border border-gray-50">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  className="w-24 sm:w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="font-bold text-brand-950 text-xs sm:text-sm tracking-tight uppercase">Designing Digital Future</span>
              </div>
            </div>
          </div>

          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-brand-500 mb-6 leading-tight">
              We are a design-first creative studio
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              At Techno Vanam, we believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.
            </p>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              For us, design isn't just a visual; it's an influential tool that helps brands achieve lasting success.
            </p>
          </div>
        </div>

        {/* Team Header */}
        <div className="max-w-4xl mx-auto text-center mt-20 lg:mt-32 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the Collective
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A specialized group of designers and developers united by a single goal: creating digital experiences that leave a lasting impact.
          </p>
        </div>

        {/* Team Grid - Larger & Centered (Optimized for 2 members) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                {/* Photo Container */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 relative bg-[#0a0a0a] border border-white/5 group-hover:border-brand-500/30 transition-all duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-110"
                  />

                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover LinkedIn Link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-500 hover:border-brand-500 hover:text-white text-gray-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>

                {/* Info */}
                <div className="space-y-1 text-center lg:text-left px-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base font-medium font-mono">
                    {member.role.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Join Our Team CTA - Dark Theme & Optimized Height */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24 pb-16 sm:pb-20">
          <div className="bg-[#0a0a0a] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 border border-white/5 items-center overflow-hidden card-glow">

            {/* Left Content */}
            <div className="w-full flex flex-col items-start text-left order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-6 sm:mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                <span className="text-sm sm:text-base font-medium text-white tracking-wide">Careers</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Join Our Team
              </h3>

              <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-sm">
                We are explorers. We constantly seek ways to make an impact towards solving problems through creativity.
              </p>

              <Link
                to="/careers"
                className="bg-white text-black px-8 py-3.5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform group shadow-xl"
              >
                <span>See Job Openings</span>
                <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:animate-pulse"></div>
              </Link>
            </div>

            {/* Right Logo Card - Compact & Refined */}
            <div className="w-full h-full min-h-[200px] sm:min-h-[280px] lg:min-h-[400px] bg-[#050505] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group border border-white/5 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-transparent to-transparent opacity-40"></div>

              <div className="relative z-10 p-10">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  className="w-28 sm:w-36 h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="absolute bottom-12 left-8 w-3 h-3 rounded-full border border-white/10"></div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/5 text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none uppercase">
                TV
              </div>
            </div>

          </div>
        </div>
      </section>





      {/* What Drives Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20 lg:mb-32">
          {/* Section Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
              <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">What Drives Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Crafting design that speaks, products that scale.
            </h2>
          </div>

          <div className="lg:col-span-1 lg:col-start-6 hidden lg:block">
            <div className="w-[1px] h-full bg-white/10 mx-auto" />
          </div>

          {/* Intro Text */}
          <div className="lg:col-span-6">
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light">
              Founded in 2025, <span className="text-white font-normal">Techno Vanam</span> was created to turn ideas into thoughtful digital experiences. We believe every product should have purpose, clarity, and impact—bringing brands and users closer through meaningful design.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-8 sm:p-12 overflow-hidden card-glow">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <h4 className="text-9xl font-black text-white pointer-events-none select-none">M</h4>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-8">Our Mission</h3>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                We believe design is more than visuals—it’s a <span className="text-white underline decoration-brand-500 underline-offset-8">strategic tool for growth</span>. We craft intuitive user experiences and build scalable products that help brands succeed.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-500/50 transition-colors">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 21v-1m0-8c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-2 underline decoration-brand-500/20 underline-offset-4">Design-Led Development</h5>
                    <p className="text-gray-500 leading-relaxed">Blending creativity with tech to build functional and elegant products.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-500/50 transition-colors">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-2 underline decoration-brand-500/20 underline-offset-4">Scalable Solutions</h5>
                    <p className="text-gray-500 leading-relaxed">Adaptable digital solutions designed to evolve with your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-8 sm:p-12 overflow-hidden card-glow">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <h4 className="text-9xl font-black text-white pointer-events-none select-none">V</h4>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-8">Our Vision</h3>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Building a <span className="text-white underline decoration-brand-500 underline-offset-8">connected ecosystem</span> where design and tech shape better experiences for everyone, at every scale.
              </p>

              <div className="space-y-6">
                {[
                  "Empowering creators and businesses through clarity",
                  "Driving meaningful change with every project",
                  "Making innovation accessible and purposeful"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-8 h-[1px] bg-brand-500 group-hover/item:w-12 transition-all duration-500" />
                    <span className="text-lg text-gray-400 group-hover/item:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract visual element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-black py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 mb-20 lg:mb-32">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl font-medium tracking-tight text-white">Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] max-w-4xl">
              First step to solving a problem is recognizing there is one.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] rounded-[2rem] p-6 lg:p-7 flex flex-col justify-between aspect-square border border-white/10 hover:border-brand-500/50 transition-all duration-500 group card-glow card-glow-hover"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                  <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight leading-tight">{step.title}</h3>
                </div>

                <div className="mt-auto">
                  <div className="w-full h-[1px] bg-white/5 mb-4 group-hover:bg-brand-500/20 transition-colors" />
                  <div className="flex justify-between items-end gap-2">
                    <p className="text-gray-400 text-[13px] lg:text-sm leading-snug">
                      {step.description}
                    </p>
                    <span className="text-gray-600 text-base lg:text-lg font-medium tabular-nums group-hover:text-brand-500 transition-colors duration-500 shrink-0">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section ref={sectionRef} className="relative h-[400vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full" />
              <span className="text-xl font-medium tracking-tight text-white">Our Expertise</span>
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-8 sm:px-16 lg:px-24">
            {/* Card 1: 20+ Team */}
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-[#0a0a0a] rounded-[3rem] p-10 flex flex-col border border-white/10 shadow-xl card-glow">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-white mb-2">20+</h3>
                <p className="text-xl text-gray-400 font-medium">Team of talented creative experts</p>
              </div>
              <div className="flex-grow">
                <CircularTeam />
              </div>
            </div>

            {/* Card 2: 5+ Years */}
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-[#0a0a0a] rounded-[3rem] p-10 flex flex-col border border-white/10 shadow-xl overflow-hidden group card-glow">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-white mb-2">5+ Years</h3>
                <p className="text-xl text-gray-400 font-medium">Experience in transforming businesses</p>
              </div>
              <div className="flex-grow flex items-end justify-center">
                <motion.img
                  src={phoneImg}
                  alt="Phone"
                  className="w-[120%] h-auto object-contain transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Card 3: 100+ Projects */}
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-[#0a0a0a] rounded-[3rem] p-10 flex flex-col border border-white/10 shadow-xl overflow-hidden group card-glow">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-white mb-2">100+</h3>
                <p className="text-xl text-gray-400 font-medium">Successfully completed projects</p>
              </div>
              <div className="flex-grow flex items-end justify-center">
                <motion.img
                  src={tabletImg}
                  alt="Tablet"
                  className="w-[110%] h-auto object-contain transform translate-y-12 rotate-[-5deg] group-hover:rotate-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Card 4: 15+ Industries (Dark Mode & Slideshow) */}
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-[#1A1A1A] rounded-[3rem] p-10 flex flex-col shadow-2xl overflow-hidden group border border-white/10 card-glow">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-white mb-2">15+ Industries</h3>
                <p className="text-xl text-gray-400 font-medium">Diverse experience across multiple sectors</p>
              </div>
              <div className="flex-grow">
                <ExpertiseSlideshow images={[ind1, ind2, ind3]} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Values That Drive Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            In 2025, Techno Vanam was born from a simple idea—why just design for others when we can design for impact? We build with purpose, create with clarity, and craft experiences that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-brand-500/50 transition-all card-glow card-glow-hover"
            >
              <div className={`w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                {(() => {
                  const IconComponent = value.icon;
                  return <IconComponent className={`w-7 h-7 ${value.color}`} />;
                })()}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-500 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-brand-100 mb-8">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <ArrowRight size={20} />
            </span>
            <div className="btn-primary-shine"></div>
          </Link>
        </div>
      </section>

      <HomeContact />

    </div >
  );
}