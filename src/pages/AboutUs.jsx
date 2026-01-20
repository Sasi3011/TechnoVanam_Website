
import { Link } from "react-router-dom";
import { Lightbulb, TrendingUp, Shield, Users, Heart, Smile, Plus, Minus, Linkedin } from 'lucide-react';
import { useState } from "react";
import HomeContact from "../components/HomeContact";

const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "Founder & CEO",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757826413/Sasi_vpik2a.png",
    instagram: "https://www.instagram.com/sasi_._06/",
    linkedin: "https://www.linkedin.com/in/sasikiran-3031s/",
    whatsapp: "https://wa.me/918610500527",
  },
  {
    name: "Sanjana B",
    role: "Co-founder & CTO",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757826375/Sanju_kqcvvo.png",
    instagram: "http://instagram.com/sanjudarla07/",
    linkedin: "https://www.linkedin.com/in/sanjana-0831s/",
    whatsapp: "https://wa.me/916382993891",
  },
  {
    name: "Vasanth R",
    role: "Lead Software Developer",
    company: "Lesoko Technologies Private Limited",
    location: "Chennai",
    experience: "5+ Yrs Exp",
    isAdvisor: true,
    img: "/advisor_vasanth_r_portrait_1768755459275.png",
    linkedin: "https://www.linkedin.com/in/vasanth-rv",
  },
  {
    name: "Sankar T",
    role: "Lead Data Engineer",
    company: "Landmark Groups",
    location: "Dubai",
    experience: "11+ Yrs Exp",
    isAdvisor: true,
    img: "/sankar_t_portrait_1768755912216.png",
    linkedin: "https://www.linkedin.com/in/sankarthulasimani/",
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

const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div
      className="w-full border border-white/20 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col md:flex-row relative min-h-[550px]"
      onMouseLeave={() => setActiveStep(null)}
    >
      {approachSteps.slice(0, 5).map((step, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveStep(idx)}
          className="flex-1 py-12 md:py-24 px-6 flex flex-col items-center text-center group transition-all duration-500 relative cursor-default"
        >
          <div className="hidden md:block absolute right-0 top-16 bottom-16 w-[1px] bg-white/20" />
          {idx === 0 && (
            <div className="hidden md:block absolute left-0 top-16 bottom-16 w-[1px] bg-white/20" />
          )}
          {idx !== 4 && (
            <div className="md:hidden absolute bottom-0 left-8 right-8 h-[1px] bg-white/20" />
          )}
          <span className={`text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ease-out ${activeStep === idx ? 'mb-20 text-brand-500' : 'mb-16 text-gray-500'}`}>
            Step {step.number}
          </span>
          <h3 className={`text-xl font-medium mb-8 h-12 flex items-center justify-center transition-colors duration-300 ${activeStep === idx ? 'text-white' : 'text-gray-400'}`}>
            {step.title}
          </h3>
          <div
            className={`w-full py-2.5 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden ${activeStep === idx ? 'bg-brand-500' : 'bg-white/5'
              }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${activeStep === idx ? 'bg-black text-brand-500' : 'bg-white/20 text-white'
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

  return (
    <div className="bg-transparent">
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
      <section id="next-section" className="min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the Collective
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A specialized group of designers and developers united by a single goal: creating digital experiences that leave a lasting impact.
          </p>
        </div>

        {/* Team Grid - 2x2 Horizontal Cards */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="group flex flex-row items-center gap-6 sm:gap-8">
                {/* Left: Photo - Square */}
                <div className="rounded-[24px] overflow-hidden relative bg-[#0a0a0a] border-[6px] sm:border-[8px] border-white shadow-2xl aspect-square w-32 h-32 sm:w-44 sm:h-44 shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay for Advisors Alone */}
                  {member.isAdvisor && (
                    <div className="absolute inset-0 bg-black/90 flex flex-col justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                      <h4 className="text-brand-500 text-sm sm:text-base font-bold mb-1 leading-tight">
                        {member.role}
                      </h4>
                      <p className="text-gray-300 text-[10px] sm:text-xs font-medium mb-1">
                        @{member.company}
                      </p>
                      <p className="text-brand-500 text-[10px] sm:text-xs uppercase tracking-wider italic font-bold">
                        {member.location}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right: Info Section */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-500 tracking-tight leading-none">
                      {member.name}
                    </h3>
                    {/* Static LinkedIn Icon */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-black transition-all duration-300 shadow-sm shrink-0"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>

                  <p className="text-white text-xs sm:text-sm font-bold font-mono uppercase tracking-widest mb-3">
                    {member.isAdvisor ? "Company Advisor" : member.role}
                  </p>

                  {/* Static Experience/Tag */}
                  <div>
                    <p className="text-brand-500 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase italic">
                      {member.experience || "Strategist"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-transparent min-h-screen flex items-center px-4 sm:px-6 lg:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-20 border border-white/10 shadow-sm card-glow">
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div className="bg-brand-50 rounded-3xl p-4 border border-brand-100/50 card-glow">
              <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 border border-gray-50">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  className="w-24 sm:w-32 h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="font-bold text-brand-950 text-xs sm:text-sm tracking-tight uppercase">Designing Digital Future</span>
              </div>
            </div>
          </div>

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
      </section>

      {/* What Drives Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 min-h-screen flex flex-col justify-center py-16 sm:py-24">
        <div className="flex flex-col gap-12 lg:gap-20 mb-20 lg:mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">
                What Drives Us</span>
            </div>
            <div className="lg:col-span-8 lg:col-start-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                Crafting design that speaks, products that scale.
              </h2>
            </div>
          </div>

          <div className="w-full">
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light">
              Founded in 2025, <span className="text-white font-normal">Techno Vanam</span> was created to turn ideas into thoughtful digital experiences. We believe every product should have purpose, clarity, and impact—bringing brands and users closer through meaningful design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-[#0a0a0a] border border-white/20 rounded-[3rem] p-8 sm:p-12 overflow-hidden card-glow">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-[#71d300] mb-8">Our Mission</h3>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                We believe design is more than visuals—it’s a <span className="text-white font-semibold">strategic tool for growth</span>. We craft intuitive user experiences and build scalable products that help brands succeed.
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

          <div className="group relative bg-[#0a0a0a] border border-white/20 rounded-[3rem] p-8 sm:p-12 overflow-hidden card-glow">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-[#71d300] mb-8">Our Vision</h3>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Building a <span className="text-white font-semibold">connected ecosystem</span> where design and tech shape better experiences for everyone, at every scale.
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
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-black min-h-screen flex flex-col justify-center py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 mb-20 lg:mb-32">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(113,211,0,0.4)]" />
              <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Our Approach</span>
            </div>
            <div className="lg:col-span-8 lg:col-start-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                First step to solving a problem is recognizing there is one.
              </h2>
            </div>
          </div>
          <ApproachSection />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 min-h-screen flex flex-col justify-center py-16 sm:py-24">
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
              className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-[#71d300] transition-all duration-300 card-glow group"
            >
              <div className="w-14 h-14 bg-[#71d300]/10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300">
                {(() => {
                  const IconComponent = value.icon;
                  return <IconComponent className="w-7 h-7 text-[#71d300]" />;
                })()}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#71d300] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-white/90 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="max-w-7xl mx-auto min-h-screen flex items-center py-16 lg:py-24 sm:pb-4 md:pb-8 lg:pb-12">
        <div className="bg-[#0a0a0a] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 border border-white/20 items-center overflow-hidden card-glow w-full">
          <div className="w-full flex flex-col items-start text-left order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6 sm:mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              <span className="text-sm sm:text-base font-medium text-brand-500 tracking-wide">Careers</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-500 mb-6 tracking-tight">
              Join Our Team
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-sm">
              We are explorers. We constantly seek ways to make an impact towards solving problems through creativity.
            </p>
            <Link
              to="/careers"
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold flex items-center gap-3 transition-transform group shadow-xl"
            >
              <span>See Job Openings</span>
              <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:animate-pulse"></div>
            </Link>
          </div>

          <div className="w-full flex items-center justify-center order-1 lg:order-2">
            <div className="bg-brand-50 rounded-3xl p-4 border border-brand-100/50 card-glow w-full max-w-md mx-auto transform transition-all">
              <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 border border-gray-50/10">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  className="w-24 sm:w-32 h-auto object-contain transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="font-bold text-brand-950 text-xs sm:text-sm tracking-tight uppercase">Designing Digital Future</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeContact />
    </div>
  );
}