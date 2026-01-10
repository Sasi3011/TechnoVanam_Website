import { Link } from "react-router-dom";
import {
  Dribbble,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", to: "/about" },
      { name: "Services", to: "/services" },
      { name: "Projects", to: "/portfolio" },
      { name: "For startups", to: "/contact" },
      { name: "Lab", to: "/" },
      { name: "Blog", to: "/" },
      { name: "Resources", to: "/" },
      { name: "Contacts", to: "/contact" },
      { name: "Careers", to: "/" },
      { name: "Testimonials", to: "/" },
    ],
    services: [
      { name: "Web Design", to: "/services" },
      { name: "Branding", to: "/services" },
      { name: "UX/UI", to: "/services" },
      { name: "Motion", to: "/services" },
      { name: "SEO", to: "/services" },
      { name: "Content Creation", to: "/services" },
      { name: "Landing Page", to: "/services" },
      { name: "Webflow Dev", to: "/services" },
    ],
    industries: [
      { name: "Healthcare", to: "/" },
      { name: "Fintech", to: "/" },
      { name: "Web3", to: "/" },
      { name: "Technology", to: "/" },
      { name: "Corporate", to: "/" },
      { name: "AI", to: "/" },
      { name: "Real Estate", to: "/" },
      { name: "E-commerce", to: "/" },
      { name: "FMCG", to: "/" },
      { name: "Hospitality", to: "/" },
    ]
  };

  return (
    <footer className="bg-[#f7fff0] text-brand-950 pt-20 pb-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xl mb-6">Company:</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-[#50577E] hover:text-black transition-colors font-medium text-lg">
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
                  <Link to={link.to} className="text-[#50577E] hover:text-black transition-colors font-medium text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6">Industries:</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-[#50577E] hover:text-black transition-colors font-medium text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start lg:items-end w-full">
            <div className="w-full max-w-sm lg:text-left">
              <h4 className="font-bold text-2xl mb-6">Subscribe to our news and updates</h4>
              <div className="relative border-b-2 border-gray-300 pb-2 mb-4 group hover:border-black transition-colors duration-300">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="bg-transparent w-full outline-none text-xl pr-10 border-none focus:ring-0 placeholder:text-gray-400 py-2"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:scale-110 transition-transform text-black">
                  <ArrowRight size={24} />
                </button>
              </div>
              <p className="text-sm text-[#50577E] leading-relaxed mb-10">
                By signing up, you agree to our <Link to="/privacy" className="underline hover:text-black">Privacy Policy</Link>. We respect your data. Unsubscribe anytime.
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-2xl mb-6">Follow us on:</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Dribbble size={20} />, link: "#" },
                    { icon: <span className="font-bold text-sm">Bē</span>, link: "#" },
                    { icon: <Instagram size={20} />, link: "https://www.instagram.com/technovanam/" },
                    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/technovanam" },
                    { icon: <Twitter size={20} />, link: "#" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 group">
            <img
              src="/Logo.png"
              alt="Techno Vanam Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-brand-950">
              Techno Vanam
            </span>
          </div>

          <div className="flex items-center gap-4 text-lg font-medium">
            <span className="text-gray-400">© 2025 Techno Vanam. All rights reserved</span>
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <Link to="/privacy" className="text-black font-bold hover:underline transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;