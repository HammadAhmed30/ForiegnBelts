import React, {useEffect} from "react";
import "../../styles/TestPageForLikedInventory.css";
import "../../styles/TestPageForInventoryPage.css";
import LikedInventory from "../components/InventoryPageByAhmad/LikedInventory";
import LikedBar from "../components/Header Footer/LikedBar";

function TestPageForLikedInventory() {
  useEffect(()=>{
    document.title="Your Liked Items | Foreignerbelts"
  },[])
  return (
    <div className="width-100">
      <LikedBar/>
      <LikedInventory />
    </div>
  );
}

export default TestPageForLikedInventory;
