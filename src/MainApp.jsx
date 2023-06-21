import React from "react";
import HomePage from "./components/Pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Pages/Category";
import HowItsMade from "./components/components/InventoryPageByAhmad/HowItsMade";
import TestPageForInventoryPage from "./components/Pages/TestPageForInventoryPage";
import TestPageForLikedInventory from "./components/Pages/TestPageForLikedInventory";
import TestPageForProductDetails from "./components/Pages/TestPageForProductDetails";
import TestPageForInquiryForm from "./components/Pages/TestPageForInquiryForm";


export default function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/inventory" element={<TestPageForInventoryPage/>}/>
        <Route path="/liked" element={<TestPageForLikedInventory/>}/>
        <Route path="/:cata/:prodId" element={<TestPageForProductDetails/>}/>
        <Route path="/:cata" element={<Category/>}/>
        <Route path="/process" element={<HowItsMade/>}/>
      </Routes>
    </div>
  );
}
