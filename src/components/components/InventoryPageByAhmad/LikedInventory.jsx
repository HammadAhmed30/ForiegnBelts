import React from "react";

function LikedInventory() {
  return (
    <div className="width-100 LIMainDiv">
      <div className="res-1440-in LISecDiv">
        <div className="LIHeadingDiv">
          <p className="LIHeadingText">Liked Inventory</p>
          <div className="LIheadingBrandingDiv">
            <p className="LIheadingBrandingMain">Foreignerbelts </p>
            <p className="LIheadingBrandingSub">originals</p>
          </div>
        </div>
        <div className="LIProductDiv">
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
        </div>
        <div className="btnForSendInquiry">
          <button className="btnForSendInquirySend">Send Inquiry</button>
          <button className="btnForSendInquiryCancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

function ProductDiv() {
  return (
    <div className="ProductDivMain">
      <div className="ProductDivImgMain">
        <img src="./images/LIProductBelt.png" className="ProductDivImg" />
      </div>
      <div className="ProductDivContentMain">
        <div className="ProductDivContentHeading">
          <p className="ProductDivTitle">WWE® Raw Tag Team Title</p>
        </div>
        <div className="ProductDivContentDesc">
          <p className="ProductDivDesc">
            1/8” thick engraved metal plates Hand-tooled leather strap (your
            choice of color) Unlimited color fill on plates Center plate
            measures approx. 10” x 10”Side plates measure approx. 4” x 4”Stacked
            plates available for an additional fee
          </p>
        </div>
      </div>
      <div className="ProductDivSelectMain">
      </div>
    </div>
  );
}

export default LikedInventory;
