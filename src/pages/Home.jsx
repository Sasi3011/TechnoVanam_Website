import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layout, Palette, PanelsTopLeft, Video, TrendingUp, PenTool, Smartphone, Globe } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "1. Idea",
    description:
      "We start by understanding your goals, vision, and challenges. Then, we create a clear action plan tailored to your project's needs.",
    bgColor: "bg-[#FFEFA8]",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825609/Project_Idea_Phase_ftrqmm.png",
    icon: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825608/Idea_Phase_Icon_umhslf.png",
  },
  {
    id: 2,
    title: "2. Research",
    description:
      "Through a detailed questionnaire and business analysis, we learn what makes your brand unique — so we can design solutions that truly fit.",
    bgColor: "bg-[#D9E8FF]",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825615/Project_Research_Phase_ayglwr.png",
    icon: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825629/Research_Phase_Icon_cb9p9g.png",
  },
  {
    id: 3,
    title: "3. Design",
    description:
      "Whether it's a website, app, or creative poster, our designers craft intuitive interfaces and eye-catching visuals that reflect your brand identity.",
    bgColor: "bg-[#FFDADE]",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825610/Project_Design_Phase_oljltz.png",
    icon: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825607/Design_Phase_Icon_nzlu5f.png",
  },
  {
    id: 4,
    title: "4. Development",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#D9E8FF]",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825609/Project_Development_Phase_nt2emc.png",
    icon: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825607/Development_Phase_Icon_vgedby.png",
  },
  {
    id: 5,
    title: "5. Launch",
    description:
      "We ensure a smooth launch with thorough testing and optimization, delivering a product that's ready to make an impact from day one.",
    bgColor: "bg-[#A79BF4]",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825611/Project_Launch_Phase_avvee6.png",
    icon: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825608/Launch_Phase_Icon_lt0zmy.png",
  },
  {
    id: 6,
    title: "6. Support",
    description:
      "Post-launch, we provide ongoing support to keep your project running smoothly, with updates, maintenance, and enhancements as needed.",
    bgColor: "bg-[#E9FDE4]",
    img: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825634/Support_Phase_czkwbv.png",
    icon: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825634/Support_Phase_Icon_rjswru.png",
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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
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
        `}
      </style>

      {/* Hero Section - Fully Responsive */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-8 pt-4 pb-24 sm:pt-6 sm:pb-28 md:pt-8 md:pb-32 lg:pt-12 lg:pb-36 bg-gray-50 flex items-center justify-center overflow-hidden min-h-[calc(100vh-3rem)]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-blue-600 text-lg sm:text-lg font-semibold uppercase tracking-wider mb-4">
              DESIGN & DEVELOPMENT STUDIO
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-medium leading-tight mb-2 tracking-tight">
              Your trusted creative partner
            </h1>
            <p className="text-xl sm:text-xl md:text-xl text-gray-600 leading-relaxed mb-10 mx-auto">
              We deliver creative branding, web design, and UI/UX solutions to make the most impact
            </p>
            <Link
              to="/contact"
              className="group relative inline-block px-8 sm:px-10 py-4 sm:py-5 bg-gray-200 font-medium text-black rounded-full text-base sm:text-lg overflow-hidden shadow-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Request a quote <span className="text-2xl">👋</span>
              </span>
            </Link>
          </div>
        </div>
        {/* Horizontal Scrolling Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-gray-50 py-6">
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
      <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-8 lg:mb-0">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              <span className="text-xl font-medium text-black tracking-wide">Who we are</span>
            </div>

            {/* Showreel Card */}
            <div className="bg-gray-100 rounded-3xl p-4 mt-auto">
              {/* White Inner Card */}
              <div className="bg-white rounded-2xl w-full aspect-[4/3] flex items-center justify-center p-6 mb-4 shadow-sm relative group cursor-pointer overflow-hidden transition-all hover:shadow-md">
                <div className="flex items-center gap-2 text-xl md:text-2xl font-medium tracking-tight text-black z-10">
                  <span>We turn</span>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                      <title>Play</title>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span>ideas into</span>
                </div>
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bottom Label */}
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="font-medium text-gray-900 text-sm sm:text-base">Techno Vanam Showreel</span>
                {/* Sound wave graphic */}
                <div className="flex gap-[3px] items-center h-4">
                  {[40, 70, 50, 100, 60, 80, 40].map((height, i) => (
                    <div
                      key={i}
                      className="w-[2px] bg-gray-400 rounded-full animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-6 leading-tight">
              We are design-first creative studio
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              We believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              For us, design isn't just a visual; it's an influential tool that helps brands achieve lasting success.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-full w-fit hover:bg-gray-800 transition-all duration-300 group"
            >
              <span className="font-medium">About us</span>
              <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                {/* Small stylized wave icon inside button */}
                <div className="flex gap-[2px] items-center h-2">
                  <div className="w-[1.5px] h-full bg-white rounded-full"></div>
                  <div className="w-[1.5px] h-[60%] bg-white rounded-full"></div>
                  <div className="w-[1.5px] h-[80%] bg-white rounded-full"></div>
                  <div className="w-[1.5px] h-[40%] bg-white rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Our Services - Clean Hover Design */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Container with white background and rounded corners */}
          <div className="bg-white rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16">

            {/* Header Section */}
            <div className="flex items-start gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
              <span className="text-lg sm:text-xl font-medium text-black tracking-wide">Our services</span>
            </div>


            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-black mb-16 leading-tight max-w-3xl">
              We create solutions but most importantly we identify problems.
            </h2>

            {/* Service Animation Styles */}
            <style jsx>{`
              .grid-standart-services {
                position: relative;
                overflow: hidden;
                transition: color 0.3s ease, border-radius 0.4s ease, border-color 0.4s ease;
                border-radius: 0;
              }

              .grid-standart-services:hover {
                color: #2563EB; /* Blue text on hover */
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
                background: #EFF6FF; /* Light blue hover background */
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
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <Layout size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      Website Design
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 02 - Branding */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <Palette size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      Branding
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 03 - UX/UI */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <PanelsTopLeft size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      UX/UI
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 04 - Motion Design */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <Video size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      Motion Design
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 05 - SEO */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      SEO
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 06 - Content Creation */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <PenTool size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      Content Creation
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 07 - Landing Page */}
              <Link to="/services" className="grid-standart-services group block border-b border-gray-200">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <Smartphone size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      Landing Page
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Service 08 - Webflow Development */}
              <Link to="/services" className="grid-standart-services group block">
                <div className="h-service-bg"></div>
                <div className="flex items-center justify-between py-4 sm:py-6 px-4 relative z-10">
                  <div className="flex items-center gap-120 flex-1">
                    <div className="service-number text-black group-hover:text-blue-600 transition-colors w-8">
                      <Globe size={24} />
                    </div>
                    <h3 className="service-title text-xl sm:text-2xl md:text-3xl font-normal text-black group-hover:text-blue-600 transition-colors">
                      Webflow Development
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="s-arrow w-6 h-6 text-black group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                All Services
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* Why Work With Us - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-15 flex flex-col items-center bg-gray-50">
        <div className="max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 text-left">
            <h2 className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase">
              Why work with us
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight max-w-full lg:max-w-2xl">
              We guide you through every step — from concept to creation
            </h3>
            <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed max-w-full lg:max-w-3xl">
              With dozens of successful design and development projects, we've built a straightforward and effective process that ensures your brand looks great, functions flawlessly, and connects with your audience.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-8 items-center justify-between bg-white shadow-md border border-[#EBEFF6] rounded-2xl sm:rounded-3xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12"
              >
                {/* Text + Icon Section */}
                <div className="flex flex-col items-start w-full lg:w-1/2 text-left">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 mb-4 lg:mb-6">
                    <img
                      src={step.icon}
                      alt={`${step.title} icon`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  {/* Heading + Description */}
                  <h4 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#19213D] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[#667097] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image Section */}
                <div
                  className={`relative w-full sm:w-[400px] md:w-[450px] lg:w-[480px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] ${step.bgColor} rounded-2xl sm:rounded-3xl lg:rounded-3xl overflow-hidden flex items-center justify-center mt-6 lg:mt-0`}
                >
                  <img
                    src={step.img}
                    alt={`${step.title} illustration`}
                    className="w-full h-full object-contain opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Marquee Section - Fully Responsive */}
      <div className="py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <h3 className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase text-center">
              ~ Crafted Solutions ~
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight text-center mb-3 sm:mb-4 md:mb-4 lg:mb-4">
              Just a glimpse of what we do.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg max-w-4xl mx-auto text-center leading-relaxed px-4 sm:px-0">
              Take a glimpse into the digital experiences we've created — combining design, technology, and strategy to bring ideas to life.
            </p>
          </div>

          {/* First Marquee Row */}
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

          {/* Second Marquee Row */}
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
      </div>

      {/* Our Products - Fully Responsive */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top section */}
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-blue-600 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Products by <span className="text-blue-600">Techno Vanam</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We go beyond client work — creating and scaling digital products trusted by communities worldwide.
          </p>
        </div>

        {/* Athlixir Card */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-8 sm:p-10 md:p-12 lg:p-14">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                ATHLIXIR
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                Athlixir is in development, crafted to empower over 50+ athlete communities in Tier-2 and Tier-3 regions. Our cutting-edge platform harnesses AI to analyze 300,000+ performance data points, delivering personalized training, precise injury tracking, and verified recognition.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">50+</p>
                  <p className="text-sm text-gray-600 font-medium">Target Athlete Communities</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">300,000+</p>
                  <p className="text-sm text-gray-600 font-medium">AI-Powered Performance Insights</p>
                </div>
              </div>

              {/* CTA Link */}
              <Link
                to="/product1"
                className="inline-flex items-center gap-2 text-blue-600 text-base font-semibold hover:text-blue-700 transition-colors group"
              >
                COMING SOON — JOIN THE JOURNEY
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
              <img
                src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825608/Athlixir_srv8w4.png"
                alt="Preview of Athlixir platform"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Commented Out (keeping as requested) */}
      {/* <section className="w-full flex justify-center items-center min-h-[700px] bg-[#e9ebef] px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="w-full md:w-1/2 h-[500px] overflow-hidden"
          >
            <video
              src={SocialMediaImage}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-3xl shadow-lg bg-transparent"
              style={{
                backgroundColor: 'transparent',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              }}
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="w-full md:w-1/2 text-blue-600 px-4"
          >
            <h2 className="text-5xl font-extrabold leading-snug mb-6 text-blue-600">
              Ready to launch<br />
              something amazing<br />
              with Techno Vanam?
            </h2>
            <p className="text-lg text-blue-500 leading-relaxed mb-8">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let's build something great together.
            </p>
            <Link to="/contact">
              <button className="group relative inline-flex items-center px-8 py-4 text-blue-600 border-2 border-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105">
                Contact Us
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-10 rounded-full blur-md animate-ping"></span>
              </button>
            </Link>
          </motion.div>

        </div>
      </section> */}

      {/* Popup Component - Keeping as requested */}
      {/* <HighClassPopup 
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
      /> */}

    </div>
  );
};

export default Home;