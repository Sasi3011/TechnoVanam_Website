import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product1 from "./pages/Products/Product1";
import Product2 from "./pages/Products/Product2";
import Portfolio from "./pages/Portfolio";
import Maintenance from "./pages/Maintenance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import ServiceDetail from "./pages/ServiceDetail";

import MainLayout from "./layout/MainLayout";

import Connect from "./pages/Connect";

const App = () => {
  const [offline, setOffline] = useState(!navigator.onLine);
  const [isAuthorized, setIsAuthorized] = useState(
    sessionStorage.getItem("preview_authorized") === "true"
  );
  const location = useLocation();

  useEffect(() => {
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Maintenance Bypass Logic
    if (location.pathname === "/preview") {
      sessionStorage.setItem("preview_authorized", "true");
      setIsAuthorized(true);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [location.pathname]);

  // Offline check takes priority
  if (offline) return <SplashScreen />;

  // Maintenance check: allow if authorized or if currently on /preview
  if (!isAuthorized && location.pathname !== "/preview" && location.pathname !== "/connect") {
    return <Maintenance />;
  }

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServiceDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/product1" element={<Product1 />} />
      <Route path="/product2" element={<Product2 />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  // Exclude /connect from MainLayout
  if (location.pathname === "/connect") {
    return routes;
  }

  return (
    <MainLayout>
      {routes}
    </MainLayout>
  );
};

export default App;