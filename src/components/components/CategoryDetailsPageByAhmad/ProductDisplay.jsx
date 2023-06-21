import React from "react";
import "../../../styles/TestPageForProductDetails.css";

function ProductDisplay() {
  return (
    <div className="PDisplayMainDiv res-1440-in">
      <div className="PDisplayHeadingDiv">
        <p className="PDisplayHeading">
          View more products from our other categories.
        </p>
      </div>
      <div className="PDisplaySpanDiv">
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
      </div>
    </div>
  );
}

function ProductView() {
  return (
    <div className="PDisplaySpan">
      <img src="./images/LIProductBelt.png" className="PDisplaySpanImg" />
      <div className="PDisplaySpanTitleView">
        <div className="PDisplayTitleDiv">
          <p className="PDisplaySpanTitle">WWE® Raw Tag Team Title</p>
        </div>
        <div className="PDisplayLikeView">
          <img
            onClick={(e) => {
              e.target.src = "./images/filledheart.png";
            }}
            src="./images/heart.png"
            className="PDisplaySpanLikeImg"
          />
          <div className="PDisplayRatingView">
            <img src="./images/ReviewStars.png" className="PDisplayRatingImg" />
            <p className="PDisplayRatingText">(125+ reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
