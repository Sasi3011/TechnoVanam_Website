import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Layout, Palette, PanelsTopLeft, Video, TrendingUp, PenTool, Smartphone, Globe, ArrowRight,
  Lightbulb, Search, Paintbrush, Cog, Rocket, MessageCircle,
  Monitor, Code2, Cpu, FileText, User, Box, Layers, RefreshCw, Settings
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import HomeContact from "../components/HomeContact";
import LaunchingSoonModal from "../components/LaunchingSoonModal";
import SEO from "../components/SEO";

const servicesList = [
  { title: "UI/UX Design", icon: PanelsTopLeft, categoryId: "category-0" }, // UI / UX & Design Services
  { title: "Web Development", icon: Code2, categoryId: "category-1" }, // Web Development
  { title: "App Development", icon: Smartphone, categoryId: "category-2" }, // App Development
  { title: "Branding & Visual Identity", icon: Palette, categoryId: "category-4" }, // Branding & Visual Identity
  { title: "SEO & Performance Optimization", icon: TrendingUp, categoryId: "category-6" }, // SEO & Performance
  { title: "Product Design (Startups & SaaS)", icon: Box, categoryId: "category-3" }, // Product Services
  { title: "Website Maintenance & Support", icon: Settings, categoryId: "category-7" }, // Maintenance & Support
];

const steps = [
  {
    id: 1,
    title: "Idea",
    description: "We understand your vision, goals, and challenges to define a clear direction for your project.",
    bgColor: "bg-[#FFEFA8]",
    icon: Lightbulb,
    color: "text-amber-500",
    bgColorLight: "bg-amber-50"
  },
  {
    id: 2,
    title: "Research",
    description: "We analyze your business, audience, and competitors to uncover insights that guide smart decisions.",
    bgColor: "bg-brand-50",
    icon: Search,
    color: "text-brand-500",
    bgColorLight: "bg-brand-50"
  },
  {
    id: 3,
    title: "Design",
    description: "We create intuitive user experiences and visually compelling designs that reflect your brand.",
    bgColor: "bg-[#FFDADE]",
    icon: Paintbrush,
    color: "text-rose-500",
    bgColorLight: "bg-rose-50"
  },
  {
    id: 4,
    title: "Development",
    description: "We build fast, responsive, and scalable digital products using modern technologies.",
    bgColor: "bg-brand-50",
    icon: Cog,
    color: "text-brand-500",
    bgColorLight: "bg-brand-50"
  },
  {
    id: 5,
    title: "Launch",
    description: "We test, optimize, and deploy your product to ensure a smooth and impactful launch.",
    bgColor: "bg-[#A79BF4]",
    icon: Rocket,
    color: "text-fuchsia-500",
    bgColorLight: "bg-fuchsia-50"
  },
  {
    id: 6,
    title: "Support",
    description: "We provide ongoing support and maintenance to keep your product performing at its best.",
    bgColor: "bg-[#E9FDE4]",
    icon: MessageCircle,
    color: "text-lime-500",
    bgColorLight: "bg-lime-50"
  },
];

const projects = [
  {
    title: "Project 1",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Project20_pokpes.webp",
    alt: "Project 1 - Techno Vanam Portfolio",
  },
  {
    title: "Project 2",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Project19_ot5qah.jpg",
    alt: "Project 2 - Techno Vanam Portfolio",
  },
  {
    title: "Project 3",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Project18_jx05gw.webp",
    alt: "Project 3 - Techno Vanam Portfolio",
  },
  {
    title: "Project 4",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Project15_fyvdqh.jpg",
    alt: "Project 4 - Techno Vanam Portfolio",
  },
  {
    title: "Project 5",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825628/Project16_ssge9u.webp",
    alt: "Project 5 - Techno Vanam Portfolio",
  },
  {
    title: "Project 6",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825628/Project17_n6x2i5.webp",
    alt: "Project 6 - Techno Vanam Portfolio",
  },
  {
    title: "Project 7",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825628/Project13_aydyc3.webp",
    alt: "Project 7 - Techno Vanam Portfolio",
  },
  {
    title: "Project 8",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825628/Project14_kyz1f9.webp",
    alt: "Project 8 - Techno Vanam Portfolio",
  },
  {
    title: "Project 9",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825621/Project10_mmjquo.jpg",
    alt: "Project 9 - Techno Vanam Portfolio",
  },
  {
    title: "Project 10",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825622/Project8_rntkpw.jpg",
    alt: "Project 10 - Techno Vanam Portfolio",
  },
  {
    title: "Project 11",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825620/Project12_czdqup.jpg",
    alt: "Project 11 - Techno Vanam Portfolio",
  },
  {
    title: "Project 12",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825616/Project2_qryk4a.jpg",
    alt: "Project 12 - Techno Vanam Portfolio",
  },
  {
    title: "Project 13",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825620/Project11_lz8v85.webp",
    alt: "Project 13 - Techno Vanam Portfolio",
  },
  {
    title: "Project 14",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825620/Project5_qsh9b1.jpg",
    alt: "Project 14 - Techno Vanam Portfolio",
  },
  {
    title: "Project 15",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825620/Project7_slix3d.jpg",
    alt: "Project 15 - Techno Vanam Portfolio",
  },
  {
    title: "Project 16",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825619/Project9_n8x6l0.jpg ",
    alt: "Project 16 - Techno Vanam Portfolio",
  },
  {
    title: "Project 17",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825619/Project3_vk60gw.jpg",
    alt: "Project 17 - Techno Vanam Portfolio",
  },
  {
    title: "Project 18",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825618/Project6_sxl9qr.jpg",
    alt: "Project 18 - Techno Vanam Portfolio",
  },
  {
    title: "Project 19",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825618/Project1_iw4nit.jpg",
    alt: "Project 19 - Techno Vanam Portfolio",
  },
  {
    title: "Project 20",
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825617/Project4_aie2pd.jpg",
    alt: "Project 20 - Techno Vanam Portfolio",
  },
];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  const serviceScrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: null, image: null });

  const openProductModal = (productName, productImage) => {
    setSelectedProduct({ name: productName, image: productImage });
    setShowPopup(true);
  };

  const closeProductModal = () => {
    setShowPopup(false);
    setSelectedProduct({ name: null, image: null });
  };

  const scrollHorizontally = (ref, direction) => {
    if (ref.current) {
      const step = ref.current.querySelector(".snap-start")?.offsetWidth || 350;
      ref.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
            entry.target.style.animationDelay = `${index * 0.1}s`;
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // Split projects into two groups for the two marquee rows
  const firstRowProjects = projects.slice(0, 10); // First 10 projects
  const secondRowProjects = projects.slice(10); // Last 10 projects

  // Reset animation on window resize to prevent glitches
  useEffect(() => {
    const handleResize = () => {
      if (firstRowRef.current) {
        firstRowRef.current.style.animation = "none";
        void firstRowRef.current.offsetWidth; // Trigger reflow
        firstRowRef.current.style.animation = "marquee 100s linear infinite";
      }
      if (secondRowRef.current) {
        secondRowRef.current.style.animation = "none";
        void secondRowRef.current.offsetWidth; // Trigger reflow
        secondRowRef.current.style.animation = "marqueeReverse 100s linear infinite";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRequestQuote = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden bg-black text-white">
      <SEO
        title="Premium Digital Design & Development Studio"
        description="Techno Vanam is a world-class digital studio crafting premium UI/UX, Scalable Web Apps, and Branding for global startups and visionaries."
        keywords="Techno Vanam, Techno, Vanam, TechnoVanam, Athlixir, WebBrain, Youth Platform, Youth Entrepreneurship Platform, Digital Studio India, Premium Web Development, UI/UX Design Agency, Startup Product Design, Branding Agency, Creative Studio Chennai, Design Agency Dubai, UI Design, UX Design, User Experience Design, User Interface Design, Web Design Services, Mobile App Design, App Development India, Website Development, Frontend Development, Backend Development, Full Stack Development, React Development, Next.js Development, Node.js Development, Product Design Services, SaaS Design, Startup Design Agency, Brand Identity Design, Logo Design Services, Visual Identity, Corporate Branding, Graphic Design, Marketing Design, Social Media Design, SEO Optimization Services, Performance Optimization, Website Redesign, Landing Page Design, Portfolio Website Design, E-commerce Design, Dashboard Design, Admin Panel Design, Design System Development, Component Library, Wireframing Services, Prototyping, Figma Design, Adobe XD, Sketch Design, Design Thinking, Creative Direction, Art Direction, Sports Technology, AI Sports Platform, Athlete Management System, Performance Analytics, Browser Extension Development, Productivity Tools, Knowledge Management, EdTech Platform, Mentorship Platform, Startup Resources, Business Tools, Digital Products, Tech Solutions, Innovation Studio, Creative Agency India, Design Studio Chennai, Web Development Agency Dubai, Global Design Studio, Remote Design Team, Freelance Designers, UI/UX Experts, Web Developers India, App Developers Chennai, Branding Experts, Digital Marketing Agency, Growth Strategy, Conversion Optimization, Mobile First Design, Responsive Web Design, Accessible Design, Modern Web Design, Premium Websites, Luxury Branding, Startup Branding Services, Tech Branding, SaaS Branding, B2B Design, B2C Design, Enterprise Design, SME Solutions, Scalable Design, Agile Development, Design Sprint, MVP Development, Product Launch, Digital Transformation, Innovation Consulting, Technology Partners, Design Partners, Best Design Studio India, Top Web Development Company, Award Winning Design Agency"
      />
      <LaunchingSoonModal
        isOpen={showPopup}
        onClose={closeProductModal}
        productName={selectedProduct.name}
        productImage={selectedProduct.image}
      />
      {/* Inline styles with responsive adjustments */}
      <style>
        {`
          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
            will-change: transform, opacity;
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-container {
            display: flex;
            overflow: hidden;
            width: 100%;
            user-select: none;
          }
          .marquee {
            display: flex;
            flex-shrink: 0;
            animation: marquee 30s linear infinite;
          }
          .marquee-reverse {
            display: flex;
            flex-shrink: 0;
            animation: marqueeReverse 30s linear infinite;
          }
          .marquee:hover, .marquee-reverse:hover {
            animation-play-state: paused;
          }
          .project-item {
            position: relative;
            flex: 0 0 auto;
            margin-right: 16px;
          }
          .project-item img {
            width: auto;
            object-fit: contain;
            object-position: center;
          }
          /* Mobile specific project item sizing */
          @media (max-width: 640px) {
            .project-item {
              height: 180px;
            }
            .project-item img {
              height: 100%;
            }
          }
          /* Tablet specific project item sizing */
          @media (min-width: 641px) and (max-width: 1024px) {
            .project-item {
              height: 240px;
            }
            .project-item img {
              height: 100%;
            }
          }
          /* Desktop specific project item sizing */
          @media (min-width: 1025px) {
            .project-item {
              height: 298px;
            }
            .project-item img {
              height: 100%;
            }
          }
          /* Flip Card CSS */
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
            display: flex;
            flex-direction: column;
            border-radius: 1rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      {/* Hero Section - Fully Responsive */}
      <section className="relative px-4 sm:px-6 lg:px-16 pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-transparent flex items-center justify-center overflow-hidden h-[100dvh] lg:h-screen">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-screen-xl mx-auto">
            <p className="text-[#71d300] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold uppercase tracking-wider mb-4">
              DESIGN & DEVELOPMENT STUDIO
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6 tracking-tight text-center lg:whitespace-nowrap">
              Building Premium Digital Brands
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white leading-relaxed mb-10 mx-auto text-center lg:whitespace-nowrap">
              We deliver UI/UX, Branding, and Digital Development that transforms ambitious visions into reality
            </p>
            <a
              href="/contact"
              onClick={handleRequestQuote}
              className="btn-primary flex items-center justify-center mx-auto w-fit cursor-pointer"
            >
              <span className="relative z-10">
                Request a quote <span className="text-2xl ml-1">👋</span>
              </span>
              <div className="btn-primary-shine"></div>
            </a>
          </div>
        </div>
        {/* Horizontal Scrolling Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-transparent py-6">
          <div
            className="flex w-max whitespace-nowrap animate-scroll pt-2"
            style={{ willChange: "transform" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0">
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  UI/UX DESIGN
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  WEB DEVELOPMENT
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  APP DEVELOPMENT
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  BRANDING & VISUAL IDENTITY
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  PRODUCT SERVICE
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  SOCIAL MEDIA & CONTENT
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  SEO & PERFORMANCE
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-wide mx-4">
                  MAINTENANCE & SUPPORT
                </span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl mx-4">/</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Default (desktop / tablet) */
  .animate-scroll {
    animation: scroll 15s linear infinite;
  }

  /* Mobile optimization */
  @media (max-width: 640px) {
    .animate-scroll {
      animation-duration: 15s; /* slower = smoother */
    }
  }
`}</style>
      </section>

      {/* Who We Are Section */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 border border-brand-500/30 shadow-sm card-glow">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#71d300]"></div>
              <span className="text-xl sm:text-2xl font-semibold text-[#71d300] tracking-wide">Who we are</span>
            </div>

            {/* Logo Card */}
            <div className="bg-brand-50 rounded-3xl p-4 mt-auto border border-brand-100/50 card-glow">
              {/* White Inner Card with Logo */}
              <div className="bg-[#0d2702] rounded-2xl w-full aspect-video sm:aspect-[4/3] flex items-center justify-center p-8 mb-4 shadow-sm relative group overflow-hidden transition-all duration-500 hover:shadow-md border border-gray-50">
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

          {/* Right Column */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] mb-6 leading-tight">
              We are a design-first creative studio
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              At Techno Vanam, we believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.
            </p>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              For us, design isn't just a visual; it's an influential tool that helps brands achieve lasting success.
            </p>

            <Link
              to="/about"
              className="btn-primary w-fit"
            >
              <span className="relative z-10 font-bold flex items-center gap-3">
                About us
                <ArrowRight size={20} />
              </span>
              <div className="btn-primary-shine"></div>
            </Link>
          </div>
        </div>
      </section>


      {/* Our Services - Clean Hover Design */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Container with white background and rounded corners */}
          <div className="bg-[#0a0a0a] rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16 border border-brand-500/30 shadow-sm card-glow">

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
              .grid-standart-services {
                position: relative;
                overflow: hidden;
                transition: color 0.3s ease, border-radius 0.4s ease, border-color 0.4s ease;
                border-radius: 0;
              }

              .grid-standart-services:hover {
                color: var(--color-brand-600); /* Brand green text on hover */
                border-radius: 0.75rem;
                border-color: transparent;
              }

              /* Background animation layer - light blue */
              .h-service-bg {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 0%;
                background: rgba(255, 255, 255, 0.2); /* Subtle white hover background */
                z-index: 0;
                transition: height 0.4s ease;
              }

              /* Arrow */
              .s-arrow {
                transition: transform 0.4s ease, color 0.3s ease;
              }

              /* Service number (icon) and title */
              .service-number,
              .service-title {
                transition: transform 0.4s ease, color 0.3s ease;
              }

              /* 🔥 HOVER EFFECT (ALL DEVICES) */
              .grid-standart-services:hover .h-service-bg {
                height: 100%;
              }

              .grid-standart-services:hover .s-arrow {
                transform: translateX(-170%);
              }

              .grid-standart-services:hover .service-number,
              .grid-standart-services:hover .service-title {
                transform: translateX(20px);
                color: var(--color-brand-600) !important;
              }

              .grid-standart-services {
                border-bottom-color: rgba(255, 255, 255, 0.05) !important;
              }
            `}</style>

            {/* Services List - Dynamically Mapped */}
            <div className="space-y-0 mb-12">
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  to={`/services#${service.categoryId}`}
                  className={`grid-standart-services group block border-b ${index === servicesList.length - 1 ? 'border-transparent' : 'border-white/5'}`}
                >
                  {/* Background animation layer */}
                  <div className="h-service-bg"></div>

                  <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="service-number text-white group-hover:text-brand-600 transition-colors w-8">
                        <service.icon size={24} />
                      </div>
                      <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-white group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="s-arrow w-6 h-6 text-white group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* All Services Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                to="/services"
                className="btn-primary bg-brand-500 text-black font-extrabold"
              >
                <span className="relative z-10">All Services</span>
                <div className="btn-primary-shine"></div>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* Why Work With Us - Flipping Cards Design */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Container with dark background and rounded corners */}
          <div className="bg-[#0a0a0a] rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16 border border-brand-500/30 card-glow">

            {/* Section Header - Parallel Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* Left: Label */}
              <div className="lg:col-span-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-600 mt-2.5"></div>
                <span className="text-xl sm:text-2xl font-semibold text-brand-500">Why work with us</span>
              </div>

              {/* Right: Main Heading */}
              <div className="lg:col-span-7 lg:col-start-7">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-brand-500 leading-tight">
                  From idea to launch, we guide you at every step.
                </h2>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="group h-[320px] lg:h-[320px] perspective-1000">
                  <div className="flip-card-inner rounded-[1rem]">
                    {/* Card Front */}
                    <div className="flip-card-front bg-white/5 border border-brand-500/30 p-8 flex flex-col justify-between transition-colors group-hover:bg-brand-500/10 card-glow card-glow-hover">
                      <div className="flex justify-between items-start">
                        <span className="text-6xl font-black text-brand-500 group-hover:text-brand-200 transition-all duration-700 select-none leading-none inline-block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-brand-600 transition-colors">
                          {step.title.split('. ')[1] || step.title}
                        </h3>
                        <div className="w-8 h-1 bg-brand-600/20 mt-4 group-hover:w-16 group-hover:bg-brand-600 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Card Back */}
                    <div className="flip-card-back bg-[#0a0a0a] border border-brand-500/50 p-8 flex flex-col justify-between text-left card-glow card-glow-hover">
                      <div className="flex flex-col gap-2">
                        <span className="text-4xl font-black text-brand-200/50">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className="text-white text-3xl font-bold">
                          {step.title.split('. ')[1] || step.title}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-6">
                        <p className="text-brand-50 text-lg leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Projects Marquee Section - Fully Responsive */}
      {/* <div className="py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <h3 className="text-brand-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase text-center">
              ~ Crafted Solutions ~
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight text-center mb-3 sm:mb-4 md:mb-4 lg:mb-4">
              Just a glimpse of what we do.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg max-w-4xl mx-auto text-center leading-relaxed px-4 sm:px-0">
              Take a glimpse into the digital experiences we've created — combining design, technology, and strategy to bring ideas to life.
            </p>
          </div>
          <div className="marquee-container mb-4 sm:mb-5 md:mb-6 lg:mb-6">
            <div ref={firstRowRef} className="marquee">
              {[...firstRowProjects, ...firstRowProjects].map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="project-item block"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="rounded-2xl sm:rounded-3xl lg:rounded-3xl border border-gray-200 shadow-md"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="marquee-container">
            <div ref={secondRowRef} className="marquee-reverse">
              {[...secondRowProjects, ...secondRowProjects].map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="project-item block"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="rounded-2xl sm:rounded-3xl lg:rounded-3xl border border-gray-200 shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Our Products - Premium UI Redesign */}
      <section className="bg-transparent min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Parallel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 px-4">
            {/* Left: Label */}
            <div className="lg:col-span-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></div>
              <span className="text-xl sm:text-2xl font-semibold text-[#71d300]">Our Products</span>
            </div>

            {/* Right: Main Heading */}
            <div className="lg:col-span-8 xl:col-span-6 xl:col-start-9 lg:text-right xl:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.1]">
                Products by <br />
                <span className="text-[#71d300]">Techno Vanam</span>
              </h2>
            </div>
          </div>

          <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 md:p-12 xl:p-20 border border-brand-500/30 flex flex-col gap-16 sm:gap-20 xl:gap-24 card-glow">
            {/* Athlixir Product Section */}
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Sports Tech, India</span>
                  </div>

                  <button
                    onClick={() => openProductModal("Athlixir", "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop")}
                    className="relative inline-block mb-4 group text-left w-full"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                      Athlixir
                    </h3>
                  </button>

                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    Athlixir is an AI-powered athlete ecosystem built to protect potential, prevent setbacks, and prove talent—uniting performance tracking, injury intelligence, and verified recognition to ensure no athlete is ever overlooked.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-white/5 border border-brand-500/30 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Sports Platform
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-500 select-none leading-none">
                    01
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full xl:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 xl:p-12 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop"
                  alt="Athlixir Platform Interface"
                  width="550"
                  height="400"
                  className="w-full h-auto max-w-full md:max-w-[80%] xl:max-w-[550px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Youth Entrepreneurship Section */}
            <div className="flex flex-col xl:flex-row-reverse gap-12 xl:gap-16 items-center">
              {/* Left Content Column (mirrored logic) */}
              <div className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Education, Global</span>
                  </div>

                  <button
                    onClick={() => openProductModal("Youth Entrepreneurship Platform", "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop")}
                    className="relative inline-block mb-4 group text-left w-full"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                      Youth Entrepreneurship Platform
                    </h3>
                  </button>

                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                    An interactive ecosystem built to empower the next generation of founders — connecting mentorship, startup resources, and real-world business tools to turn ideas into impactful ventures.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-white/5 border border-brand-500/30 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Startup Ecosystem Platform
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-500 select-none leading-none">
                    02
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full xl:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 xl:p-12 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                  alt="Platform Interface"
                  width="550"
                  height="400"
                  className="w-full h-auto max-w-full md:max-w-[80%] xl:max-w-[550px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* WebBrain Product Section */}
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Productivity, Global</span>
                  </div>

                  <button
                    onClick={() => openProductModal("WebBrain", "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop")}
                    className="relative inline-block mb-4 group text-left w-full"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-brand-500 transition-colors">
                      WebBrain — Your Second Brain
                    </h3>
                  </button>

                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    A living memory layer for your browser that understands what you explore, remembers what matters, and brings it back when you need it. WebBrain turns scattered browsing into structured knowledge.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-white/5 border border-brand-500/30 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Browser Extension
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-500 select-none leading-none">
                    03
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full xl:w-1/2 bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 xl:p-12 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px] border border-white/5 card-glow-hover">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                  alt="WebBrain Interface"
                  width="550"
                  height="400"
                  className="w-full h-auto max-w-full md:max-w-[80%] xl:max-w-[550px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* All Products Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                to="/products"
                className="btn-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Full Products
                  <ArrowRight size={20} />
                </span>
                <div className="btn-primary-shine"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <HomeContact />

    </div>
  );
};

export default Home;