import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Monitor, PenTool, Layout, Layers, Lightbulb, Smartphone, Search, FileText, Share2, Laptop, Grid, Presentation, Box, Brush, Code, Server, Wrench, TrendingUp, Zap, Package, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Logo = "/Logo.png"; // Import the logo image from public folder

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
    }
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setIsServicesOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const serviceColumns = [
    // Column 1: UI/UX & Design (8 items)
    [
      {
        title: "UI / UX & Design Services",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "UI / UX Design", desc: "User-centered design experiences", icon: <Monitor size={16} />, to: "/services" },
          { name: "Website Design", desc: "Visually engaging websites", icon: <Monitor size={16} />, to: "/services" },
          { name: "App Design", desc: "Modern mobile interfaces", icon: <Smartphone size={16} />, to: "/services" },
          { name: "Wireframing & Prototyping", desc: "Structured user flows", icon: <Layers size={16} />, to: "/services" },
          { name: "Landing Page Design", desc: "High-impact conversion pages", icon: <FileText size={16} />, to: "/services" },
          { name: "Portfolio Website Design", desc: "Professional brand presentation", icon: <Layout size={16} />, to: "/services" },
          { name: "Design Systems", desc: "Scalable UI frameworks", icon: <Grid size={16} />, to: "/services" },
          { name: "Creative Direction", desc: "Strategic visual leadership", icon: <Lightbulb size={16} />, to: "/services" },
        ]
      },
    ],
    // Column 2: Web Development + App Development (7 items)
    [
      {
        title: "Web Development",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "Web Development", desc: "Full-stack web solutions", icon: <Code size={16} />, to: "/services" },
          { name: "Frontend Development", desc: "Interactive user interfaces", icon: <Layout size={16} />, to: "/services" },
          { name: "Backend Development", desc: "Robust server systems", icon: <Server size={16} />, to: "/services" },
          { name: "Website Redesign / Revamp", desc: "Modernizing digital presence", icon: <Monitor size={16} />, to: "/services" },
        ]
      },
      {
        title: "App Development",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "App Development", desc: "End-to-end mobile solutions", icon: <Smartphone size={16} />, to: "/services" },
          { name: "Android App Development", desc: "Native Android apps", icon: <Smartphone size={16} />, to: "/services" },
          { name: "iOS App Development", desc: "High-performance iOS apps", icon: <Smartphone size={16} />, to: "/services" },
        ]
      },
    ],
    // Column 3: Branding + Product Services (7 items)
    [
      {
        title: "Branding & Visual Identity",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "Brand Identity Design", desc: "Memorable brand presence", icon: <PenTool size={16} />, to: "/services" },
          { name: "Branding & Graphic Design", desc: "Strategic visual assets", icon: <Brush size={16} />, to: "/services" },
          { name: "Logo Design", desc: "Timeless brand marks", icon: <PenTool size={16} />, to: "/services" },
          { name: "Poster & Marketing Creatives", desc: "Eye-catching promotions", icon: <Megaphone size={16} />, to: "/services" },
          { name: "Packaging Design", desc: "Product-ready packaging", icon: <Package size={16} />, to: "/services" },
        ]
      },
      {
        title: "Product Services",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "Product Design (Startups & SaaS)", desc: "Scalable digital products", icon: <Box size={16} />, to: "/services" },
          { name: "Presentation Design", desc: "Compelling visual storytelling", icon: <Presentation size={16} />, to: "/services" },
        ]
      },
    ],
    // Column 4: Social, SEO + Maintenance (5 items)
    [
      {
        title: "Social Media & Content",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "Social Media Design", desc: "Consistent platform visuals", icon: <Share2 size={16} />, to: "/services" },
          { name: "Social Media Handling", desc: "Content planning & posting", icon: <Share2 size={16} />, to: "/services" },
        ]
      },
      {
        title: "SEO & Performance",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "SEO Optimization", desc: "Search-ready structure", icon: <TrendingUp size={16} />, to: "/services" },
          { name: "Performance Optimization", desc: "Faster, better rankings", icon: <Zap size={16} />, to: "/services" },
        ]
      },
      {
        title: "Maintenance & Support",
        bgColor: "bg-white/5",
        textColor: "text-brand-400",
        items: [
          { name: "Website Maintenance & Support", desc: "Reliable ongoing care", icon: <Wrench size={16} />, to: "/services" },
        ]
      }
    ]
  ];

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/products" },
    { name: "Careers", to: "/careers" },
  ];

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-16 pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-9xl mx-auto">
        <div
          className={`relative flex items-center px-4 py-2 lg:px-6 lg:py-4 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 ${isOpen ? "rounded-[1.5rem]" : "rounded-[2.5rem]"
            }`}
        >
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              to="/"
              className="flex items-center gap-2 group "
              aria-label="Techno Vanam Home"
            >
              <div className="relative">
                <img
                  src="/Logo.png"
                  alt="Techno Vanam Logo"
                  width="32"
                  height="32"
                  className="h-5 lg:h-8 w-auto object-contain relative z-10"
                  loading="lazy"
                />
              </div>
              <span
                className="text-lg lg:text-3xl font-semibold bg-clip-text text-white leading-none tracking-tight"
              >
                Techno Vanam
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/10 gap-2">
              {navItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`flex items-center gap-1 px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-default ${location.pathname.startsWith(item.to)
                          ? "text-brand-600 bg-white/20"
                          : isServicesOpen
                            ? "text-brand-600 bg-white/5"
                            : "text-gray-300 hover:text-brand-600 hover:bg-white/5"
                          }`}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsServicesOpen(false)}
                          className="hover:text-brand-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="flex items-center justify-center">
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute mt-4 left-1/2 -translate-x-1/2 top-full w-screen max-w-[calc(100vw-4rem)] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden p-6 max-h-[85vh] overflow-y-auto custom-scrollbar"
                          >
                            <div className="grid grid-cols-4 gap-6">
                              {serviceColumns.map((column, colIdx) => (
                                <div key={colIdx} className="space-y-3">
                                  {column.map((category, catIdx) => (
                                    <div key={catIdx} className="space-y-3">
                                      <div className={`flex items-center justify-between px-3 py-2 ${category.bgColor} rounded-xl`}>
                                        <span className={`font-bold ${category.textColor} text-sm uppercase`}>{category.title}</span>
                                        <ArrowRight className={`w-4 h-4 text-gray-500`} />
                                      </div>
                                      <div className="grid grid-cols-1 gap-1">
                                        {category.items.map((service, itemIdx) => (
                                          <Link
                                            key={itemIdx}
                                            to={service.to}
                                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-brand-500/10 transition-colors group"
                                            onClick={() => setIsServicesOpen(false)}
                                          >
                                            <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-gray-500 group-hover:text-brand-600 transition-colors mt-0.5">
                                              {service.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="font-medium text-white text-sm leading-tight truncate group-hover:text-brand-400 transition-colors">{service.name}</div>
                                              <div className="text-[11px] text-gray-400 mt-0.5 leading-snug line-clamp-2 group-hover:text-gray-300 transition-colors">
                                                {service.desc}
                                              </div>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (

                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive
                        ? "text-brand-600 bg-white/20"
                        : "text-gray-300 hover:text-brand-600 hover:bg-white/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </nav>

          {/* Right: Contact Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <a
              href="/contact"
              onClick={handleContactClick}
              className="hidden lg:relative lg:group lg:overflow-hidden lg:px-6 lg:py-2.5 lg:bg-brand-500 lg:text-black lg:rounded-full lg:text-sm lg:font-extrabold lg:transition-all lg:duration-300 lg:hover:bg-brand-600 lg:active:scale-95 lg:flex lg:items-center cursor-pointer"
              aria-label="Contact Us"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </a>

            {/* Hamburger for Mobile/Tablet */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div
          className={`lg:hidden absolute left-4 right-4 mt-2 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "max-h-[80vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
            }`}
        >
          <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 shadow-xl overflow-y-auto max-h-[70vh]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name} className="flex flex-col">
                      <div
                        className={`flex items-center justify-between px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${isMobileServicesOpen
                          ? "text-brand-600 bg-white/20"
                          : "text-gray-300 hover:text-brand-600 hover:bg-white/5"
                          }`}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="flex-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsMobileServicesOpen(!isMobileServicesOpen);
                          }}
                          className="p-2 -mr-2"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-white/5 rounded-2xl mt-2 p-4 space-y-6"
                          >
                            {serviceColumns.flat().map((category, idx) => (
                              <div key={idx}>
                                <div className={`font-bold ${category.textColor} text-xs mb-3 px-3 py-1 ${category.bgColor} rounded-full inline-block uppercase`}>
                                  {category.title}
                                </div>
                                <div className="grid grid-cols-1 gap-1">
                                  {category.items.map((svc, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={svc.to}
                                      onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                                    >
                                      <div className="text-gray-500 mt-1">{svc.icon}</div>
                                      <div>
                                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{svc.name}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{svc.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${isActive
                        ? "text-brand-600 bg-white/20"
                        : "text-gray-300 hover:text-brand-600 hover:bg-white/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <a
                href="/contact"
                onClick={(e) => {
                  handleContactClick(e);
                  setIsOpen(false);
                }}
                className="mt-4 w-full py-4 bg-brand-500 text-black rounded-2xl text-center text-lg font-bold shadow-lg shadow-brand-500/20 active:scale-[0.98] transition-transform cursor-pointer"
                aria-label="Contact Us"
              >
                Get in Touch
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;