import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import CursorFollower from "../components/CursorFollower";

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <CursorFollower />
      <Header />
      <main className="pt-12">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
