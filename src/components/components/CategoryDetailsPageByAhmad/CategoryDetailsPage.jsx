import React, { useState, useEffect } from "react";
import "../../../styles/TestPageForProductDetails.css";
import "../../../styles/TestPageForLikedInventory.css";
import { commerce } from "../../../lib/commerce";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function CategoryDetailsPage() {
  const { cata, prodId } = useParams();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.slug).toString() === cata
  );

  return (
    <div className="width-100 PDMain">
      <div className="res-1440-in PDSec">
        <div className="PDHeader">
          <p className="PDCategoryPath">Inventory/prime/product 2147</p>
          <div className="PDBrandingDiv">
            <p className="PDBrandingMain">
              Foreignerbelts
              <p className="PDBrandingSub">Originals</p>
            </p>
          </div>
        </div>
        <div className="PDCategoryImgCard">
          <img
            className="PDCategoryImg"
            src="./images/productDetailsCategoryImage.png"
          />
          {/* <span className="PDBestSellingTag">
            <img className="PDBestSellingTagStar" src="./images/BSStar.png" />
            <p className="PDBestSellingTagText">Best Selling</p>
          </span>
          <div className="PDCategoryImgZoomButton">
            <img
              className="PDCategoryImgZoomButtonImg"
              src="./images/Magnify.png"
            />
          </div> */}
        </div>

        <div className="PDDetailsView">
          <div className="PDDetailsViewSec">
            <p className="PDDetailsTitle">
              WWE® Raw Tag
              <br /> Team Title
            </p>
            <p className="PDDetailsDescriptionH">Description</p>
            <p className="PDDetailsDescripton">
              1/8” thick engraved metal plates
              <br /> Hand-tooled leather strap (your choice of color)
              <br /> Unlimited color fill on plates
              <br /> Center plate measures approx. 10” x 10”Side plates
              <br /> measure approx. 4” x 4”Stacked plates available for an
              <br /> additional fee
            </p>
          </div>
          <div className="PDDetailsViewTer">
            <div className="PDDetailBeltView">
              <img className="PDDetailsBeltImg" src="./images/shape1.png" />
              <img className="PDDetailsBeltImg" src="./images/shape2.png" />
            </div>
            <p className="PDDetailsTerH">Details</p>
            <p className="PDDetailsTerDescription">
              • &nbsp; Price will be given after quotation call
              <br /> • &nbsp; Top Notch materials
              <br /> • &nbsp; On time delivery worldwide
            </p>
          </div>
        </div>
        <div className="PDDetailsProductRatingView">
          <img
            className="PDDetailsProductRatingStars"
            src="./images/ReviewStars.png"
          />
          <p className="PDDetailsProductRatingReviews">(125+ reviews)</p>
        </div>
        <div className="btnForSendInquiry">
          <button className="btnForSendInquirySend">Send Inquiry</button>
          <button className="btnForSendInquiryCancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetailsPage;
