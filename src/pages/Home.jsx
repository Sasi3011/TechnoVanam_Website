import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Layout, Palette, PanelsTopLeft, Video, TrendingUp, PenTool, Smartphone, Globe, ArrowRight,
  Lightbulb, Search, Paintbrush, Cog, Rocket, MessageCircle
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import HomeContact from "../components/HomeContact";

const steps = [
  {
    id: 1,
    title: "1. Idea",
    description:
      "We start by understanding your goals, vision, and challenges. Then, we create a clear action plan tailored to your project's needs.",
    bgColor: "bg-[#FFEFA8]",
    icon: Lightbulb,
    color: "text-amber-500",
    bgColorLight: "bg-amber-50"
  },
  {
    id: 2,
    title: "2. Research",
    description:
      "Through a detailed questionnaire and business analysis, we learn what makes your brand unique — so we can design solutions that truly fit.",
    bgColor: "bg-brand-50",
    icon: Search,
    color: "text-brand-500",
    bgColorLight: "bg-brand-50"
  },
  {
    id: 3,
    title: "3. Design",
    description:
      "Whether it's a website, app, or creative poster, our designers craft intuitive interfaces and eye-catching visuals that reflect your brand identity.",
    bgColor: "bg-[#FFDADE]",
    icon: Paintbrush,
    color: "text-rose-500",
    bgColorLight: "bg-rose-50"
  },
  {
    id: 4,
    title: "4. Development",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-brand-50",
    icon: Cog,
    color: "text-brand-500",
    bgColorLight: "bg-brand-50"
  },
  {
    id: 5,
    title: "5. Launch",
    description:
      "We ensure a smooth launch with thorough testing and optimization, delivering a product that's ready to make an impact from day one.",
    bgColor: "bg-[#A79BF4]",
    icon: Rocket,
    color: "text-fuchsia-500",
    bgColorLight: "bg-fuchsia-50"
  },
  {
    id: 6,
    title: "6. Support",
    description:
      "Post-launch, we provide ongoing support to keep your project running smoothly, with updates, maintenance, and enhancements as needed.",
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
    image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825628/Project17_v5wnno.webp",
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
  const serviceScrollRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden">
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
            border-radius: 2rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      {/* Hero Section - Fully Responsive */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-transparent flex items-center justify-center overflow-hidden h-[100dvh] lg:h-screen">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-[#71d300] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase tracking-wider mb-4">
              DESIGN & DEVELOPMENT STUDIO
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6 tracking-tight">
              Your trusted creative partner
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              We deliver creative branding, web design, and UI/UX solutions to make the most impact
            </p>
            <Link
              to="/contact"
              className="btn-primary"
            >
              <span className="relative z-10">
                Request a quote <span className="text-2xl ml-1">👋</span>
              </span>
              <div className="btn-primary-shine"></div>
            </Link>
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
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mx-4">
                  CREATIVE SOLUTIONS
                </span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4">/</span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mx-4">
                  BUSINESS VALUE
                </span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4">/</span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mx-4">
                  PURPOSEFUL DESIGNS
                </span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4">/</span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mx-4">
                  STRATEGIC EXPERIENCES
                </span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4">/</span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mx-4">
                  UI/UX DESIGN
                </span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4">/</span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mx-4">
                  WEB DEVELOPMENT
                </span>
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4">/</span>
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
      <section className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] lg:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 border border-gray-100 shadow-sm">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#71d300]"></div>
              <span className="text-xl sm:text-2xl font-semibold text-[#71d300] tracking-wide">Who we are</span>
            </div>

            {/* Logo Card */}
            <div className="bg-brand-50 rounded-3xl p-4 mt-auto border border-brand-100/50">
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

          {/* Right Column */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] mb-6 leading-tight">
              We are design-first creative studio
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              We believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.
            </p>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
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
      <section className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Container with white background and rounded corners */}
          <div className="bg-white rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16 border border-gray-100 shadow-sm">

            {/* Header Section - Parallel Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* Left: Label */}
              <div className="lg:col-span-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></div>
                <span className="text-xl sm:text-2xl font-semibold text-brand-500 tracking-wide">Our services</span>
              </div>

              {/* Right: Main Heading */}
              <div className="lg:col-span-7 lg:col-start-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#71d300] leading-tight">
                  We create solutions but most importantly we identify problems.
                </h2>
              </div>
            </div>

            {/* Service Animation Styles */}
            <style jsx>{`
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
                background: var(--color-brand-50); /* Brand green hover background */
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

              /* 🔥 HOVER EFFECT (DESKTOP ONLY) */
              @media (min-width: 766px) {
                .grid-standart-services:hover .h-service-bg {
                  height: 100%;
                }

                .grid-standart-services:hover .s-arrow {
                  transform: translateX(-170%);
                }

                .grid-standart-services:hover .service-number,
                .grid-standart-services:hover .service-title {
                  transform: translateX(20px);
                }
              }
            `}</style>

            {/* Services List */}
            <div className="space-y-0 mb-12">
              {/* Service 01 - Website Design */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                {/* Background animation layer */}
                <div className="h-service-bg"></div>

                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <Layout size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      Website Design
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 02 - Branding */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <Palette size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      Branding
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 03 - UX/UI */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <PanelsTopLeft size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      UX/UI
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 04 - Motion Design */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <Video size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      Motion Design
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 05 - SEO */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      SEO
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 06 - Content Creation */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <PenTool size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      Content Creation
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 07 - Landing Page */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <Smartphone size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      Landing Page
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 08 - Webflow Development */}
              <Link to="/services" className="grid-standart-services group block">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="service-number text-black group-hover:text-brand-600 transition-colors w-8">
                      <Globe size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-brand-600 transition-colors">
                      Webflow Development
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* All Services Button */}
            <div className="flex justify-center">
              <Link
                to="/services"
                className="btn-primary"
              >
                <span className="relative z-10">All Services</span>
                <div className="btn-primary-shine"></div>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* Why Work With Us - Flipping Cards Design */}
      <section className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Container with white background and rounded corners */}
          <div className="bg-white rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16 border border-gray-100">

            {/* Section Header - Parallel Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* Left: Label */}
              <div className="lg:col-span-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-600 mt-2.5"></div>
                <span className="text-xl sm:text-2xl font-semibold text-brand-500">Why work with us</span>
              </div>

              {/* Right: Main Heading */}
              <div className="lg:col-span-6 lg:col-start-7">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-brand-500 leading-tight">
                  We guide you through <br />
                  <span className="text-brand-500">every step of the way</span>
                </h2>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="group h-[320px] lg:h-[320px] perspective-1000">
                  <div className="flip-card-inner rounded-[2rem]">
                    {/* Card Front */}
                    <div className="flip-card-front bg-gray-50/50 border border-gray-100 p-8 flex flex-col justify-between transition-colors group-hover:bg-brand-50">
                      <div className="flex justify-between items-start">
                        <motion.span
                          initial={{ fontSize: "1.5rem" }}
                          whileInView={{ fontSize: "3.75rem" }}
                          transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.05 }}
                          viewport={{ once: false, amount: 0.5 }}
                          className="font-black text-brand-500 group-hover:text-brand-200 transition-all duration-700 select-none leading-none inline-block origin-left"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                          {step.title.split('. ')[1] || step.title}
                        </h3>
                        <div className="w-8 h-1 bg-brand-600/20 mt-4 group-hover:w-16 group-hover:bg-brand-600 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Card Back */}
                    <div className="flip-card-back bg-brand-950 p-8 flex flex-col justify-between text-left">
                      <div className="flex flex-col gap-2">
                        <span className="text-4xl font-black text-brand-200/50">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className="text-white text-3xl font-bold">
                          {step.title.split('. ')[1] || step.title}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-6">
                        <p className="text-brand-50 text-sm leading-relaxed font-medium">
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
      <section className="bg-transparent py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Parallel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 px-4">
            {/* Left: Label */}
            <div className="lg:col-span-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></div>
              <span className="text-xl sm:text-2xl font-semibold text-[#71d300]">Our Products</span>
            </div>

            {/* Right: Main Heading */}
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-[1.1] font-archivo">
                Products by <br />
                <span className="text-[#71d300]">Techno Vanam</span>
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 border border-gray-100 flex flex-col gap-16 sm:gap-24 lg:gap-32">
            {/* Athlixir Product Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left Content Column */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Sports Tech, India</span>
                  </div>

                  <div className="relative inline-block mb-4 group">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                      Athlixir
                    </h3>
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gray-900"></div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    Athlixir is an AI-powered smart living platform for athletes. It brings performance tracking, injury analysis, and talent recognition into one unified ecosystem — helping 50+ athlete communities grow more intelligently.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    Web Design
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 opacity-[0.05] select-none leading-none">
                    01
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full lg:w-1/2 bg-[#F3F4F6] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 lg:p-12 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
                <img
                  src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825608/Athlixir_srv8w4.png"
                  alt="Athlixir Platform Interface"
                  className="w-full h-auto max-w-[500px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Youth Entrepreneurship Section */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
              {/* Left Content Column (mirrored logic) */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Education, Global</span>
                  </div>

                  <div className="relative inline-block mb-4 group">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                      Youth entrepreneurship platform
                    </h3>
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gray-900"></div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    An interactive ecosystem designed to empower the next generation of leaders. It provides mentorship, resource mapping, and business simulation tools to bridge the gap between education and real-world impact.
                  </p>
                </div>

                <div className="flex justify-between items-center sm:mt-4">
                  <div className="px-4 sm:px-6 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    LMS Platform
                  </div>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 opacity-[0.05] select-none leading-none">
                    02
                  </span>
                </div>
              </div>

              {/* Right Image/Mockup Column */}
              <div className="w-full lg:w-1/2 bg-[#EBEBEB] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 lg:p-12 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
                <img
                  src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Project20_pokpes.webp"
                  alt="Platform Interface"
                  className="w-full h-auto max-w-[500px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* All Products Button */}
            <div className="flex justify-center pt-8 border-t border-gray-100">
              <Link
                to="/portfolio"
                className="btn-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  All Products
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