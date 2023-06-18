import React from "react";

export default function InventoryPageTop() {
  return (
    <div className="width-100">
      <div className="res-1440-in">
        <h1 className="hTopInven">
          Foreignerbelts
          <br />
          
          <span className="hTopInvenSpan">originals</span>
        </h1>
      </div>
      <div className="inventoryPage res-1440-in">
        <div className="inventoryPageImage">
          <img
            className="inventoryPageImageImg"
            src="./images/roman_reains.jpg"
            alt=""
          />
        </div>
        <div className="inventoryPageContent">
          <img
            className="inventoryPageContentLogo"
            src="./images/logo_with_heading.png"
            alt=""
          />
          <p className="invenPara">
            Our wrestling manufacturing company offers four distinct categories
            of championship belts:
            <ul>
              <li>Prime</li>
              <li>Classic</li>
              <li>Economy</li>
              <li>Custom</li>
            </ul>
            Each category boasts unique designs and styles, ensuring that there
            is a belt to fit every wrestler's taste and budget. From classic
            designs to custom creations, we have a championship belt for
            everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
