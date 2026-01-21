import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";

import Products from "./pages/Products/Products";
import Portfolio from "./pages/Portfolio";
import Maintenance from "./pages/Maintenance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import ProductDetail from "./pages/Products/ProductDetail";

import MainLayout from "./layout/MainLayout";

import Connect from "./pages/Connect";
import CareerAdmin from "./pages/CareerAdmin";

// Error pages
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(
    sessionStorage.getItem("preview_authorized") === "true"
  );
  const location = useLocation();

  useEffect(() => {
    // Maintenance Bypass Logic
    if (location.pathname === "/preview") {
      sessionStorage.setItem("preview_authorized", "true");
      setIsAuthorized(true);
    }
  }, [location.pathname]);

  // Maintenance check: allow if authorized or if currently on certain public/admin paths
  const bypassMaintenance =
    location.pathname === "/connect" ||
    location.pathname === "/careers" ||
    location.pathname === "/admin/careers";

  if (!isAuthorized && !bypassMaintenance) {
    return <Maintenance />;
  }

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/admin/careers" element={<CareerAdmin />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/error" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  // Exclude specific routes from MainLayout
  const isExcluded = location.pathname === "/connect" || location.pathname === "/admin/careers";

  if (isExcluded) {
    return routes;
  }

  return (
    <MainLayout>
      {routes}
    </MainLayout>
  );
};

export default App;
