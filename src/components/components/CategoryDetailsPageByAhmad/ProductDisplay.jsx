/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function ProductDisplay() {
  return (
    <div className="PDisplayMainDiv">
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
    <span className="PDisplaySpan">
      <img src="./images/LIProductBelt.png" className="PDisplaySpanImg" />
      <div className="PDisplaySpanTitleView">
        <div className="PDisplayTitleDiv">
          <p className="PDisplaySpanTitle">WWE® Raw Tag Team Title</p>
          <p className="PDisplaySpanSubtitle">Product Code: 7584231</p>
        </div>
        <div className="PDisplayLikeView">
          <img src="" className="PDisplaySpanLikeImg" />
          <p className="PDisplaySpanLikeText">Like</p>
        </div>
      </div>
      <div className="PDisplayRatingView">
        <img src="./images/ReviewStars.png" className="PDisplayRatingImg" />
        <p className="PDisplayRatingText">(125+ reviews)</p>
      </div>
    </span>
  );
}

export default ProductDisplay;
