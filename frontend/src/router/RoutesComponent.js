import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../authentication/Login";
import LandingPage from "../pages/LandingPage";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
