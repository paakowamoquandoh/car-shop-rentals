import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <SearchContextProvider>
    <Router>
      <App /> 
    </Router>
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
