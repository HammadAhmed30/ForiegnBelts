import React from "react";
import HomePage from "./components/Pages/HomePage";
import TestPageForInventoryPage from "./components/Pages/TestPageForInventoryPage";
import TestPageForLikedInventory from "./components/Pages/TestPageForLikedInventory";
import TestPageForProductDetails from "./components/Pages/TestPageForProductDetails";
import { Routes, Route, useLocation } from "react-router-dom";

export default function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<TestPageForInventoryPage />} />
        <Route path="/liked" element={<TestPageForLikedInventory />} />
      </Routes>
    </div>
  );
}
