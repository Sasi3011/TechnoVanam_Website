import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    // { name: "Portfolio", to: "/portfolio" },
    { name: "Products", to: "/product1" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-[#F7F9FC] text-[#50577E] text-sm w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Top Row: Logo - Links - Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825654/logo_lkfqmn.png"
              alt="Techno Vanam Logo"
              className="h-8 sm:h-10 w-auto object-contain"
              loading="lazy"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900">Techno Vanam</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl">
            <a
              href="https://api.whatsapp.com/send/?phone=918610500527&text=Hey+Techno+Vanam%21+Looking+forward+to+chatting+with+you .&app_absent=0"
              className="text-green-500 hover:scale-110 transition-transform duration-200 "
              aria-label="WhatsApp"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/technovanam/"
              className="text-pink-500 hover:scale-110 transition-transform duration-200 "
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/technovanam"
              className="text-blue-700 hover:scale-110 transition-transform duration-200 target=_blank"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 mb-4 w-full">
          <div className="border-t border-gray-200"></div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#50577E] gap-4 sm:gap-2 text-center sm:text-left">
          <div>
            Copyright © 2025 <span className="font-semibold">Techno Vanam ™</span>
          </div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;