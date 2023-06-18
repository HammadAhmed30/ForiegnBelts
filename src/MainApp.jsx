import React from "react";
import HomePage from "./components/Pages/HomePage";
import TestPageForInventoryPage from "./components/Pages/TestPageForInventoryPage";
import TestPageForLikedInventory from "./components/Pages/TestPageForLikedInventory";
import TestPageForProductDetails from "./components/Pages/TestPageForProductDetails";

export default function MainApp() {
  return (
    <div >
      {/* <HomePage /> */}
      {/* <TestPageForInventoryPage /> */}
      {/* <TestPageForLikedInventory /> */}
      <TestPageForProductDetails />
    </div>
  );
}
