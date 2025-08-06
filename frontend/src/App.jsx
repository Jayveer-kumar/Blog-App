
import { AuthProvider } from "./context/Authcontext";

import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import MainHero from "./pages/Home/MainHero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
