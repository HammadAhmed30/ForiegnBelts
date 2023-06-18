import React from "react";
import "../../styles/TestPageForLikedInventory.css";
import LikedInventory from "../components/InventoryPageByAhmad/LikedInventory";
import SendAndCall from "../components/InventoryPageByAhmad/SendAndCall";

function TestPageForLikedInventory() {
  return (
    <div className="width-100">
      <LikedInventory />
      <SendAndCall />
    </div>
  );
}

export default TestPageForLikedInventory;
