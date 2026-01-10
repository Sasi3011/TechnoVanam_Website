import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Lightbulb, TrendingUp, Shield, Users, Heart, Smile } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import phoneImg from "../assets/expertise/phone.png";
import tabletImg from "../assets/expertise/tablet.png";
import ind1 from "../assets/expertise/industry1.png";
import ind2 from "../assets/expertise/industry2.png";
import ind3 from "../assets/expertise/industry3.png";

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
    const nextSection = document.getElementById('transform-section');
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
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            We are design-first<br />creative studio
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

      {/* Transform Section */}
      {/* Transform Section */}
      <section
        id="transform-section"
        className="bg-brand-950 py-24 overflow-hidden"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }} // Re-trigger on scroll, high threshold for 'center' feel
        >

          {/* DESIGN */}
          <div className="overflow-hidden">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-500 mb-2"
            >
              design
            </motion.h2>
          </div>

          {/* MAIN LINE */}
          <div className="overflow-hidden my-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-500"
            >
              We transform digital presence
            </motion.h2>
          </div>

          {/* DEVELOP */}
          <div className="overflow-hidden">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-500 mt-2"
            >
              develop
            </motion.h2>
          </div>

        </motion.div>
      </section>



      {/* What Drives Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Drives Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            In 2025, we began building our own digital products—driven by the same vision and purpose that fuel everything we do: turning ideas into impactful, user-centered experiences.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-transparent border border-gray-200 rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              We believe great design is the foundation of every successful brand. At Techno Vanam, we craft intuitive user experiences, build high-performance websites, and design graphics that leave a lasting impression.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Design-led Development</h4>
                  <p className="text-gray-600 text-sm">We blend aesthetics and technology to create products users love.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Scalable & Creative</h4>
                  <p className="text-gray-600 text-sm">From startups to enterprises, we deliver flexible and impactful solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-transparent border border-gray-200 rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              To build a digital ecosystem where design, technology, and human-centric thinking shape better experiences for all. We envision a future where businesses can access high-quality digital tools that drive growth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                </div>
                <span className="text-gray-600">Empowering creators through smart, intuitive platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                </div>
                <span className="text-gray-600">Driving meaningful change with every project</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                </div>
                <span className="text-gray-600">Making digital innovation accessible to everyone</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[#f7fff0] py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 mb-20 lg:mb-32">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
              <span className="text-xl font-medium tracking-tight text-gray-900">Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-[1.1] max-w-4xl">
              First step to solving a problem is recognizing there is one.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-6 lg:p-7 flex flex-col justify-between aspect-square shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight leading-tight">{step.title}</h3>
                </div>

                <div className="mt-auto">
                  <div className="w-full h-[1px] bg-gray-100 mb-4 group-hover:bg-gray-200 transition-colors" />
                  <div className="flex justify-between items-end gap-2">
                    <p className="text-gray-500 text-[13px] lg:text-sm leading-snug">
                      {step.description}
                    </p>
                    <span className="text-gray-300 text-base lg:text-lg font-medium tabular-nums group-hover:text-gray-900 transition-colors duration-500 shrink-0">
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
      <section ref={sectionRef} className="relative h-[400vh] bg-[#f7fff0]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-black rounded-full" />
              <span className="text-xl font-medium tracking-tight text-gray-900">Our Expertise</span>
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-8 sm:px-16 lg:px-24">
            {/* Card 1: 20+ Team */}
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-white rounded-[3rem] p-10 flex flex-col shadow-xl">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-gray-900 mb-2">20+</h3>
                <p className="text-xl text-gray-500 font-medium">Team of talented creative experts</p>
              </div>
              <div className="flex-grow">
                <CircularTeam />
              </div>
            </div>

            {/* Card 2: 5+ Years */}
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-white rounded-[3rem] p-10 flex flex-col shadow-xl overflow-hidden group">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-gray-900 mb-2">5+ Years</h3>
                <p className="text-xl text-gray-500 font-medium">Experience in transforming businesses</p>
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
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-white rounded-[3rem] p-10 flex flex-col shadow-xl overflow-hidden group">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-xl text-gray-500 font-medium">Successfully completed projects</p>
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
            <div className="flex-shrink-0 w-[350px] sm:w-[450px] h-[550px] bg-[#1A1A1A] rounded-[3rem] p-10 flex flex-col shadow-2xl overflow-hidden group">
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

      {/* Team Section */}
      <section className="bg-[#f7fff0] py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header to match reference image */}
          <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 mb-20 lg:mb-32">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.15)]" />
              <span className="text-xl font-medium tracking-tight text-gray-900">Who we are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-[1.1] max-w-4xl">
              We are explorers. We constantly seek ways to make an impact towards solving problems through creativity.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] p-4 sm:p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-black/5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 pb-4 flex items-end justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{member.name}</h3>
                    <p className="text-gray-400 text-base sm:text-lg font-medium tracking-tight">( {member.role} )</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0077b5] rounded-xl flex items-center justify-center hover:bg-[#005885] transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white fill-current"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Values That Drive Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            In 2025, Techno Vanam was born from a simple idea—why just design for others when we can design for impact? We build with purpose, create with clarity, and craft experiences that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                {(() => {
                  const IconComponent = value.icon;
                  return <IconComponent className={`w-7 h-7 ${value.color}`} />;
                })()}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
            className="relative group overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 rounded-full font-semibold hover:bg-gray-100 active:scale-95 transition-all text-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/0 via-brand-600/10 to-brand-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}