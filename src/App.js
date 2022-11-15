import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navi from "./components/Navigation";
import Atraktioner from "./pages/Atraktioner";
import Gemte from "./pages/Gemte";
import Hoteller from "./pages/Hoteller";
import SpisePage from "./pages/SpisePage";
import RestaurantPage from "./pages/RestaurantPage";
import CafePage from "./pages/CafePage";

export default function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Atraktioner" element={<Atraktioner />} />
        <Route path="/Hoteller" element={<Hoteller />} />
        <Route path="/Gemte" element={<Gemte />} />
        <Route path="/Spise" element={<SpisePage />} />
        <Route path="/Restaurants" element={<RestaurantPage />} />
        <Route path="/Cafes" element={<CafePage />} />
      </Routes>
    </>
  );
}
