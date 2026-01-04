import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        // Scrolling up or near the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/product1" },
    // { name: "Portfolio", to: "/portfolio" },
  ];

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
                  src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825654/logo_lkfqmn.png"
                  alt="Techno Vanam Logo"
                  className="h-8 sm:h-10 w-auto object-contain relative z-10"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
              <span
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 leading-none tracking-tight"
              >
                Techno Vanam
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center bg-gray-100/50 rounded-full p-1 border border-white/20">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive
                      ? "text-blue-600 bg-white shadow-sm"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Right: Contact Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:relative lg:group lg:overflow-hidden lg:px-6 lg:py-2.5 lg:bg-blue-600 lg:text-white lg:rounded-full lg:text-sm lg:font-semibold lg:transition-all lg:duration-300 lg:hover:bg-blue-700 lg:hover:shadow-[0_4px_15px_rgba(37,99,235,0.4)] lg:active:scale-95 lg:flex lg:items-center"
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
          className={`lg:hidden absolute left-4 right-4 mt-2 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
            }`}
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/40 shadow-xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-4 bg-blue-600 text-white rounded-2xl text-center text-lg font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform"
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