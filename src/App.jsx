import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";

import Products from "./pages/Products/Products";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import ProductDetail from "./pages/Products/ProductDetail";

import MainLayout from "./layout/MainLayout";
import CookieConsent from "./components/CookieConsent";

import Connect from "./pages/Connect";
import CareerAdmin from "./pages/CareerAdmin";

// Error pages
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";

const App = () => {
  const location = useLocation();

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
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
      <CookieConsent />
    </MainLayout>
  );
};

export default App;
