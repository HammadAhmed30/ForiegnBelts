import React from "react";
import "../../../styles/TestPageForProductDetails.css";
import { Link } from "react-router-dom";

function ProductDisplay() {
  return (
    <div className="PDisplayMainDiv res-1440-in">
      <div className="PDisplayHeadingDiv">
        <p className="PDisplayHeading">
          View more products from our other categories.
        </p>
      </div>
      <div className="PDisplaySpanDiv">
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/prime"
        >
          <ProductView name={"Prime"} img={"/images/Image prime.png"} />
        </Link>

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/classic"
        >
          <ProductView name={"Classic"} img={"/images/image classic.png"} />
        </Link>

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/economy"
        >
          <ProductView name={"Economy"} img={"/images/image economy.png"} />
        </Link>

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/custom"
        >
          <ProductView name={"Custom"} img={"/images/Image Custom.png"} />
        </Link>
      </div>
    </div>
  );
}

function ProductView({ name, img }) {
  return (
    <div className="PDisplaySpan" style={{ color: "black" }}>
      <img src={img} className="PDisplaySpanImg" />
      <div className="PDisplaySpanTitleView">
        <div className="PDisplayTitleDiv">
          <p className="PDisplaySpanTitle">{name}</p>
        </div>
        <div className="PDisplayLikeView">
          <div></div>
          <div className="PDisplayRatingView">
            <img src="/images/ReviewStars.png" className="PDisplayRatingImg" />
            <p className="PDisplayRatingText">(125+ reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
