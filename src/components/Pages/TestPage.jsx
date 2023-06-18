import React from "react";
import HowitsMade from "../components/InventoryPageByAhmad/HowItsMade";
import "../../styles/TestPage.css";
import InventoryPageTop from "../components/InventoryPageByHammad/InventoryPageTop";
import ExploreMore from "../components/InventoryPageByHammad/exploreMore";

function TestPage() {
  return (
    <div className="width-100">
      <InventoryPageTop/>
      <ExploreMore/>
      <HowitsMade />

    </div>
    

  );
}

export default TestPage;
