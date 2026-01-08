import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import CursorFollower from "../components/CursorFollower";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <CursorFollower />
      <Header />
      <main className="pt-0">{children}</main>
      <Footer />

      {/* Fixed Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[60] w-10 h-10 md:w-12 md:h-12 bg-brand-600 text-white rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 hover:bg-brand-700 animate-jump ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </>
  );
};

export default MainLayout;
