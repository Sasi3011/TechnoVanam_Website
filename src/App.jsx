import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products/Products"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Careers = lazy(() => import("./pages/Careers"));
const ProductDetail = lazy(() => import("./pages/Products/ProductDetail"));
const Connect = lazy(() => import("./pages/Connect"));
const CareerAdmin = lazy(() => import("./pages/CareerAdmin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServerError = lazy(() => import("./pages/ServerError"));

import MainLayout from "./layout/MainLayout";
import CookieConsent from "./components/CookieConsent";
import Loading from "./components/Loading";

const App = () => {
  const location = useLocation();

  const routes = (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
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
