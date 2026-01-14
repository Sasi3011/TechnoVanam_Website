import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import CursorFollower from "../components/CursorFollower";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSecret, setIsSecret] = useState(window.isSecretEnabled || false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const handleSecretChange = (e) => {
      setIsSecret(e.detail);
    };
    window.addEventListener('secretModeChanged', handleSecretChange);

    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    // Skip all protection if on localhost OR if secret mode is active
    if (isLocalhost || isSecret) {
      document.body.style.userSelect = "auto";
      document.body.style.webkitUserSelect = "auto";
      return () => {
        window.removeEventListener('secretModeChanged', handleSecretChange);
      };
    }

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

    // Max Protection: Hide content and spam debugger
    const trap = setInterval(() => {
      const startTime = performance.now();
      debugger;
      const endTime = performance.now();

      const isDevToolsOpen = endTime - startTime > 100;

      if (isDevToolsOpen) {
        // Hide content if DevTools is open
        document.body.style.display = "none";
        // Clear and spam console
        console.clear();
        for (let i = 0; i < 100; i++) {
          console.log("%cSTOP!", "color:red; font-size:40px; font-weight:bold;");
        }
        alert("Developer Tools are disabled on this site to protect intellectual property.");
        window.location.href = "about:blank"; // Redirect them away
      } else {
        document.body.style.display = "block";
      }
    }, 500);

    // Disable text selection and dragging globally
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener('secretModeChanged', handleSecretChange);
      clearInterval(trap);
    };
  }, [isSecret]);

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
      <main
        className="pt-0"
        onDragStart={(e) => {
          const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
          if (!isLocal && !isSecret) e.preventDefault();
        }}
        onContextMenu={(e) => {
          const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
          if (!isLocal && !isSecret) e.preventDefault();
        }}
      >
        {children}
      </main>
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
