import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Rental from "../pages/Rental";
import Home from "../pages/Home";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import AboutUs from "../pages/AboutUs";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<AboutUs />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
