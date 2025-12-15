import { Link } from "react-router-dom";
import { Linkedin, Lightbulb, TrendingUp, Shield, Users, Heart, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

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
    color: "text-blue-500",
    bgColor: "bg-blue-50",
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

export default function About() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('transform-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-18 pt-2">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            We are <span className="text-blue-600">Techno Vanam</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            We're not just an agency — we're a creative tech studio passionate about crafting impactful digital products. From empowering startups to building our own innovations, we design, develop, and launch experiences that move people and businesses forward.
          </p>
        </div>

        {/* Animated Scroll Down Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
              Scroll Down
            </span>
            <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
              <svg
                className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors"
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
      <section id="transform-section" className="bg-blue-600 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/40 mb-4"
          >
            design
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            We transform digital presence
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/40"
          >
            develop
          </motion.h2>
        </div>
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
          <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              We believe great design is the foundation of every successful brand. At Techno Vanam, we craft intuitive user experiences, build high-performance websites, and design graphics that leave a lasting impression.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Design-led Development</h4>
                  <p className="text-gray-600 text-sm">We blend aesthetics and technology to create products users love.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              To build a digital ecosystem where design, technology, and human-centric thinking shape better experiences for all. We envision a future where businesses can access high-quality digital tools that drive growth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Empowering creators through smart, intuitive platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Driving meaningful change with every project</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Making digital innovation accessible to everyone</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the People Behind Techno Vanam
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We love what we do and we do it with passion. We value experimentation and smart innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-500 text-sm">( {member.role} )</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
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
      <section className="bg-blue-600 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}