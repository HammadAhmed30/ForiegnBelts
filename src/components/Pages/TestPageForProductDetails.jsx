import React from "react";
import ProductDisplay from "../components/CategoryDetailsPageByAhmad/ProductDisplay";
import CategoryDetailsPage from "../components/CategoryDetailsPageByAhmad/CategoryDetailsPage";
import LikedBar from "../components/Header Footer/LikedBar";


function TestPageForProductDetails() {
  return (
    <div className="width-100">
      <LikedBar/>
      <CategoryDetailsPage />
      <ProductDisplay />
    </div>
  );
}

export default TestPageForProductDetails;
