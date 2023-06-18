import React from "react";
import HomePage from "./components/Pages/HomePage";
import TestPageForInventoryPage from "./components/Pages/TestPageForInventoryPage";
import TestPageForLikedInventory from "./components/Pages/TestPageForLikedInventory";

export default function MainApp() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <TestPageForInventoryPage /> */}
      <TestPageForLikedInventory />
    </div>
  );
}
