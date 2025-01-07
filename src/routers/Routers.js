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
import Login from "../pages/Login";
import Register from "../pages/Register";
// import CarsForRent from "../components/CarsForRent/CarsForRent";
import BuyCarDetails from "../pages/BuyCarDetails";
import Rentals from "../rent/pages/Rentals/Rentals";
import CarForRent from "../rent/pages/CarForRent/CarForRent";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/carforrent/:slug" element={<CarForRent />} />
      <Route path="/blogs" element={<AboutUs />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/buycardetails/:slug" element={<BuyCarDetails/>}/>
      {/* <Route path="/carsforrent" element={<CarsForRent/>}/> */}
    </Routes>
  );
};

export default Routers;
