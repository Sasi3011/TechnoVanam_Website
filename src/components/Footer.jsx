import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  const whatsappActions = [
    { name: "Join Channel", link: "https://whatsapp.com/channel/0029VbAX2bwEVccNeg6nuP2i" },
    { name: "Join Community", link: "https://chat.whatsapp.com/GlO1FxNioCoAo15EiGYLYZ" },
    { name: "Send Message", link: "https://wa.me/918610500527" }
  ];

  const footerLinks = {
    company: [
      { name: "Home", to: "/" },
      { name: "About Us", to: "/about" },
      { name: "Our Services", to: "/services" },
      { name: "Portfolio", to: "/portfolio" },
      { name: "Contact Us", to: "/contact" },
      { name: "Careers", to: "/careers" },
      { name: "Privacy Policy", to: "/privacy" },
    ],
    services: [
      { name: "Web Design", to: "/services" },
      { name: "Branding", to: "/services" },
      { name: "UX/UI Design", to: "/services" },
      { name: "Motion Design", to: "/services" },
      { name: "SEO Optimization", to: "/services" },
      { name: "Content Creation", to: "/services" },
      { name: "Landing Pages", to: "/services" },
      { name: "Webflow Development", to: "/services" },
    ],
    products: [
      { name: "Athlixir", to: "/product1" },
      { name: "Youth Platform", to: "/product2" },
      { name: "Creative Suite", to: "/" },
      { name: "Digital Tools", to: "/" },
    ]
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 sm:px-10 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xl mb-6">Company:</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-brand-500 transition-colors font-medium text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xl mb-6">Services:</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-brand-500 transition-colors font-medium text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6">Products:</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-brand-500 transition-colors font-medium text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-full lg:col-span-5 flex flex-col items-start lg:items-end w-full mt-12 lg:mt-0">
            <div className="w-full max-w-2xl lg:max-w-md text-left">
              <h4 className="font-bold text-2xl sm:text-3xl mb-6">Subscribe to our news and updates</h4>

              <div className="flex flex-col gap-4">
                <div className="relative border-b-2 border-white/20 pb-2 group hover:border-brand-500 transition-colors duration-300">
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="bg-transparent w-full outline-none text-lg sm:text-xl border-none focus:ring-0 placeholder:text-gray-600 text-white py-2 text-left"
                  />
                  {/* Circular button for Desktop */}
                  <button className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 group overflow-hidden w-10 h-10 rounded-full bg-brand-500 items-center justify-center text-black shadow-sm transition-all duration-300 hover:bg-brand-600 active:scale-90">
                    <span className="relative z-10">
                      <ArrowRight size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </button>
                </div>

                {/* Block button for Mobile/Tablet - Matches the UI model */}
                <button className="lg:hidden w-full py-4 bg-brand-500 text-black font-extrabold rounded-full relative group overflow-hidden active:scale-[0.98] transition-all">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                    Submit <ArrowRight size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mt-6 mb-10 max-w-sm lg:max-w-none">
                By signing up, you agree to our <Link to="/privacy" className="underline hover:text-brand-500">Privacy Policy</Link>. We respect your data. Unsubscribe anytime.
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-2xl mb-6">Follow us on:</h4>
                <div className="flex flex-nowrap justify-start gap-4 pb-4">
                  <a
                    href="https://www.instagram.com/technovanam?igsh=MTJwazIyMmhpeWtsdw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-black transition-all duration-300 shadow-sm shrink-0"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/technovanam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-black transition-all duration-300 shadow-sm shrink-0"
                  >
                    <Linkedin size={20} />
                  </a>

                  {/* Interactive WhatsApp Selector */}
                  <div className="relative">
                    <button
                      onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 cursor-pointer ${showWhatsAppOptions
                        ? 'bg-brand-500 border-brand-500 text-black'
                        : 'border-white/20 text-white hover:bg-brand-500 hover:border-brand-500 hover:text-black'
                        }`}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.405 0 0 5.403 0 12.05c0 2.125.553 4.198 1.602 6.034L0 24l6.135-1.61a11.75 11.75 0 005.91 1.583h.005c6.644 0 12.05-5.403 12.05-12.05a11.767 11.767 0 00-3.489-8.522z" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {showWhatsAppOptions && (
                        <>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/20"
                            onClick={() => setShowWhatsAppOptions(false)}
                          />
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute bottom-full left-0 mb-4 z-50 bg-[#111] border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[180px]"
                          >
                            <div className="flex flex-col">
                              {whatsappActions.map((action) => (
                                <a
                                  key={action.name}
                                  href={action.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-3 text-sm font-bold text-gray-300 hover:text-brand-500 hover:bg-white/5 rounded-xl transition-all flex items-center justify-between group"
                                  onClick={() => setShowWhatsAppOptions(false)}
                                >
                                  {action.name}
                                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" />
                                </a>
                              ))}
                            </div>
                            {/* Arrow Pointer */}
                            <div className="absolute -bottom-2 left-5 w-4 h-4 bg-[#111] border-r border-b border-white/10 rotate-45" />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 group">
            <img
              src="/Logo.png"
              alt="Techno Vanam Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-white">
              Techno Vanam
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
            <span className="text-gray-400 text-sm sm:text-base">© 2026 Techno Vanam. All rights reserved</span>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              <Link to="/privacy" className="text-brand-500 font-bold text-sm sm:text-base hover:text-white hover:underline transition-colors uppercase tracking-wider whitespace-nowrap">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;