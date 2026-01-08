import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Monitor, PenTool, Layout, Layers, Lightbulb, Smartphone, Search, FileText, Users, Share2, Laptop, ShoppingBag, Megaphone, MousePointer2, Grid, Presentation, Box, FileCheck, Brush } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png"; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

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

  const servicesData = {
    services: {
      title: "Services",
      bgColor: "bg-brand-100", // Light green background
      textColor: "text-black", // Black text
      items: [
        { name: "Web Design", desc: "Engaging assets for all platforms", icon: <Monitor size={20} />, to: "/services/web-design" },
        { name: "Branding", desc: "Memorable & Strategic identities", icon: <PenTool size={20} />, to: "/services/branding" },
        { name: "UX/UI Design", desc: "Seamless & intuitive experiences", icon: <Layout size={20} />, to: "/services/ux-ui" },
        { name: "Webflow Development", desc: "Functional & interactive websites", icon: <Smartphone size={20} />, to: "/services/webflow" },
        { name: "SEO", desc: "Boosting search rankings and traffic", icon: <Search size={20} />, to: "/services/seo" },
        { name: "Landing Page", desc: "High converting landing pages", icon: <FileText size={20} />, to: "/services/landing-page" },
      ]
    },
    retainer: {
      title: "Retainer Services",
      bgColor: "bg-brand-100", // Light green background
      textColor: "text-black", // Black text
      items: [
        { name: "Creative Design Subscription", desc: "Web design, ux/ui, branding services", icon: <Users size={20} />, to: "/services/subscription" },
        { name: "Content Design & Socials", desc: "Engaging assets for all platforms", icon: <Share2 size={20} />, to: "/services/content-socials" },
        { name: "Website as a Service", desc: "Complete Turnkey WAAS solution", icon: <Laptop size={20} />, to: "/services/waas" },
        { name: "Marketing Content", desc: "Content creation for your marketing", icon: <ShoppingBag size={20} />, to: "/services/marketing-content" },
      ]
    },
    readyMade: {
      title: "Ready Made Solutions",
      bgColor: "bg-brand-100", // Light green background
      textColor: "text-black", // Black text
      items: [
        { name: "Branding Pack", desc: "Customizable marketing assets", icon: <Megaphone size={20} />, to: "/services/branding-pack" },
        // { name: "Superdesign.space", desc: "Ready to use custom websites", icon: <MousePointer2 size={20} />, to: "/services/superdesign" },
      ]
    },
    other: {
      title: "Other Creative Services",
      bgColor: "bg-brand-100", // Light green background
      textColor: "text-black", // Black text
      items: [
        { name: "Creative Direction", desc: "Art direction in branding, web & motion design.", icon: <Grid size={20} />, to: "/services/creative-direction" },
        { name: "Presentation Design", desc: "Captivating decks that tell your story", icon: <Presentation size={20} />, to: "/services/presentation" },
        { name: "Packaging Design", desc: "Production ready packaging designs", icon: <Box size={20} />, to: "/services/packaging" },
        { name: "Landing Page", desc: "Engaging assets for all platforms", icon: <FileCheck size={20} />, to: "/services/landing-page-other" },
        { name: "Grey-Label Design", desc: "Flexible design support for agencies.", icon: <Brush size={20} />, to: "/services/grey-label" },
      ]
    }
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/product1" },
    // { name: "Portfolio", to: "/portfolio" },
  ];

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative flex items-center px-6 py-3 sm:py-4 bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 ${isOpen ? "rounded-[1.5rem]" : "rounded-[2.5rem]"
            }`}
        >
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              to="/"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Techno Vanam Home"
            >
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1767865697/Screenshot_2026-01-08_151441-Photoroom_xrcnwh.png"
                  alt="Techno Vanam Logo"
                  className="h-6 sm:h-8 w-auto object-contain relative z-10"
                  loading="lazy"
                />
              </div>
              <span
                className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-brand-900 to-gray-900 leading-none tracking-tight font-archivo"
              >
                Techno Vanam
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center bg-gray-100/50 rounded-full p-1 border border-white/20">
              {navItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `flex items-center gap-1 px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive || isServicesOpen
                            ? "text-brand-600 bg-white shadow-sm"
                            : "text-gray-600 hover:text-brand-600 hover:bg-white/50"
                          }`
                        }
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </NavLink>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute mt-4 left-1/2 -translate-x-1/2 top-full w-[max(800px,calc(100vw-120px))] max-w-[1100px] bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden p-8"
                          >
                            <div className="grid grid-cols-3 gap-8">
                              {/* Column 1: Services */}
                              <div className="space-y-6">
                                <div className={`flex items-center justify-between px-4 py-3 ${servicesData.services.bgColor} rounded-2xl`}>
                                  <span className={`font-bold ${servicesData.services.textColor} text-lg`}>{servicesData.services.title}</span>
                                  <ArrowRight className={`w-5 h-5 text-gray-400`} />
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                  {servicesData.services.items.map((service, idx) => (
                                    <Link
                                      key={idx}
                                      to={service.to}
                                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 group-hover:text-brand-600 transition-colors">
                                        {service.icon}
                                      </div>
                                      <div>
                                        <div className="font-medium text-gray-900 leading-tight">{service.name}</div>
                                        <div className="text-xs text-gray-500 mt-1 group-hover:text-black transition-colors duration-300">{service.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Column 2: Retainer & Ready Made */}
                              <div className="space-y-8">
                                <div className="space-y-6">
                                  <div className={`flex items-center justify-between px-4 py-3 ${servicesData.retainer.bgColor} rounded-2xl`}>
                                    <span className={`font-bold ${servicesData.retainer.textColor} text-lg`}>{servicesData.retainer.title}</span>
                                    <ArrowRight className={`w-5 h-5 text-gray-400`} />
                                  </div>
                                  <div className="grid grid-cols-1 gap-2">
                                    {servicesData.retainer.items.map((service, idx) => (
                                      <Link
                                        key={idx}
                                        to={service.to}
                                        className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                                        onClick={() => setIsServicesOpen(false)}
                                      >
                                        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 group-hover:text-brand-600 transition-colors">
                                          {service.icon}
                                        </div>
                                        <div>
                                          <div className="font-medium text-gray-900 leading-tight">{service.name}</div>
                                          <div className="text-xs text-gray-500 mt-1 group-hover:text-black transition-colors duration-300">{service.desc}</div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-6">
                                  <div className={`flex items-center px-4 py-3 ${servicesData.readyMade.bgColor} rounded-2xl`}>
                                    <span className={`font-bold ${servicesData.readyMade.textColor} text-lg`}>{servicesData.readyMade.title}</span>
                                  </div>
                                  <div className="grid grid-cols-1 gap-2">
                                    {servicesData.readyMade.items.map((service, idx) => (
                                      <Link
                                        key={idx}
                                        to={service.to}
                                        className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                                        onClick={() => setIsServicesOpen(false)}
                                      >
                                        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 group-hover:text-brand-600 transition-colors">
                                          {service.icon}
                                        </div>
                                        <div>
                                          <div className="font-medium text-gray-900 leading-tight">{service.name}</div>
                                          <div className="text-xs text-gray-500 mt-1 group-hover:text-black transition-colors duration-300">{service.desc}</div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Column 3: Other */}
                              <div className="space-y-6">
                                <div className={`flex items-center justify-between px-4 py-3 ${servicesData.other.bgColor} rounded-2xl`}>
                                  <span className={`font-bold ${servicesData.other.textColor} text-lg`}>{servicesData.other.title}</span>
                                  <ArrowRight className={`w-5 h-5 text-gray-400`} />
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                  {servicesData.other.items.map((service, idx) => (
                                    <Link
                                      key={idx}
                                      to={service.to}
                                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 group-hover:text-brand-600 transition-colors">
                                        {service.icon}
                                      </div>
                                      <div>
                                        <div className="font-medium text-gray-900 leading-tight">{service.name}</div>
                                        <div className="text-xs text-gray-500 mt-1 group-hover:text-black transition-colors duration-300">{service.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
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
                        ? "text-brand-600 bg-white shadow-sm"
                        : "text-gray-600 hover:text-brand-600 hover:bg-white/50"
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
            <Link
              to="/contact"
              className="hidden lg:relative lg:group lg:overflow-hidden lg:px-6 lg:py-2.5 lg:bg-brand-600 lg:text-white lg:rounded-full lg:text-sm lg:font-semibold lg:transition-all lg:duration-300 lg:hover:bg-brand-700 lg:hover:shadow-[0_4px_15px_rgba(113,211,0,0.4)] lg:active:scale-95 lg:flex lg:items-center"
              aria-label="Contact Us"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </Link>

            {/* Hamburger for Mobile/Tablet */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/80 text-gray-800 hover:bg-gray-200 transition-colors focus:outline-none"
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
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/40 shadow-xl overflow-y-auto max-h-[70vh]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex items-center justify-between px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${isMobileServicesOpen
                          ? "text-brand-600 bg-brand-50"
                          : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-gray-50/50 rounded-2xl mt-2 p-4 space-y-6"
                          >
                            <div>
                              <div className="font-bold text-black text-xs mb-3 px-3 py-1 bg-brand-100 rounded-full inline-block">SERVICES</div>
                              <div className="grid grid-cols-1 gap-1">
                                {servicesData.services.items.map((svc) => (
                                  <Link
                                    key={svc.name}
                                    to={svc.to}
                                    onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group"
                                  >
                                    <div className="text-gray-400">{svc.icon}</div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{svc.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="font-bold text-black text-xs mb-3 px-3 py-1 bg-brand-100 rounded-full inline-block">RETAINER SERVICES</div>
                              <div className="grid grid-cols-1 gap-1">
                                {servicesData.retainer.items.map((svc) => (
                                  <Link
                                    key={svc.name}
                                    to={svc.to}
                                    onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group"
                                  >
                                    <div className="text-gray-400">{svc.icon}</div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{svc.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="font-bold text-black text-xs mb-3 px-3 py-1 bg-brand-100 rounded-full inline-block">READY MADE</div>
                              <div className="grid grid-cols-1 gap-1">
                                {servicesData.readyMade.items.map((svc) => (
                                  <Link
                                    key={svc.name}
                                    to={svc.to}
                                    onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group"
                                  >
                                    <div className="text-gray-400">{svc.icon}</div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{svc.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="font-bold text-black text-xs mb-3 px-3 py-1 bg-brand-100 rounded-full inline-block">OTHER CREATIVE SERVICES</div>
                              <div className="grid grid-cols-1 gap-1">
                                {servicesData.other.items.map((svc) => (
                                  <Link
                                    key={svc.name}
                                    to={svc.to}
                                    onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group"
                                  >
                                    <div className="text-gray-400">{svc.icon}</div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{svc.name}</span>
                                  </Link>
                                ))}
                              </div>
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
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${isActive
                        ? "text-brand-600 bg-brand-50"
                        : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-4 bg-brand-600 text-white rounded-2xl text-center text-lg font-bold shadow-lg shadow-brand-500/20 active:scale-[0.98] transition-transform"
                aria-label="Contact Us"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;