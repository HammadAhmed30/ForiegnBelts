import React, {useEffect} from "react";
import HowitsMade from "../components/InventoryPageByAhmad/HowItsMade";
import "../../styles/TestPageForInventoryPage.css";
import InventoryPageTop from "../components/InventoryPageByHammad/InventoryPageTop";
import ExploreMore from "../components/InventoryPageByHammad/exploreMore";
import LikedBar from "../components/Header Footer/LikedBar";

function TestPageForInventoryPage() {
  useEffect(()=>{
    document.title="Inventory | Foreignerbelts"
  },[])
  return (
    <div className="width-100">
      <LikedBar/>
      <InventoryPageTop />
      <ExploreMore />
      <HowitsMade />
    </div>
  );
}

export default TestPageForInventoryPage;
