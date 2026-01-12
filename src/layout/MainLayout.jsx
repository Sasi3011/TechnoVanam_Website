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
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    // Deter right-click and inspection shortcuts on production
    if (!isLocalhost) {
      const preventDefault = (e) => e.preventDefault();

      const handleKeydown = (e) => {
        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
        if (
          e.keyCode === 123 ||
          (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
          (e.ctrlKey && e.keyCode === 85)
        ) {
          e.preventDefault();
        }
      };

      document.addEventListener("contextmenu", preventDefault);
      document.addEventListener("keydown", handleKeydown);

      // Deter DevTools when opened via menu using debugger trap
      const trap = setInterval(() => {
        const startTime = performance.now();
        debugger;
        const endTime = performance.now();
        // If debugger paused execution, the time difference will be large
        if (endTime - startTime > 100) {
          console.clear();
          console.log(
            "%cSTOP! %cThis is a browser feature intended for developers. If someone told you to copy-paste something here to 'hack' something, it is a scam.",
            "color: #71d300; font-size: 3rem; font-weight: bold; text-shadow: 2px 2px black;",
            "color: white; font-size: 1.5rem;"
          );
        }
      }, 1000);

      return () => {
        document.removeEventListener("contextmenu", preventDefault);
        document.removeEventListener("keydown", handleKeydown);
        clearInterval(trap);
      };
    }
  }, []);

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
      <main className="pt-0" onDragStart={(e) => e.preventDefault()}>{children}</main>
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
