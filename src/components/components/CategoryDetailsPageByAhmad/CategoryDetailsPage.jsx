import React, { useState, useEffect } from "react";
import "../../../styles/TestPageForProductDetails.css";
import "../../../styles/TestPageForLikedInventory.css";
import { commerce } from "../../../lib/commerce";
import { useParams } from "react-router";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";


function CategoryDetailsPage() {
  const { cata, prodId } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    document.title = "Belts | Foreignerbelts";
  }, []);

  const particular_data = products.find((prod) => prod.id === prodId);

  return (
    <div className="width-100 PDMain">
      {loading && <Spinner />}
      {particular_data && (
        <div className="res-1440-in PDSec">
          <div className="PDHeader">
            <p className="PDCategoryPath">Inventory/prime/Product</p>
            <div className="PDBrandingDiv">
              <p className="PDBrandingMain">
                Foreignerbelts
                <p className="PDBrandingSub">Originals</p>
              </p>
            </div>
          </div>
          <div className="PDCategoryImgCard">
            <img className="PDCategoryImg" src={particular_data.image.url} />
          </div>

          <div className="PDDetailsView">
            <div className="PDDetailsViewSec">
              <p className="PDDetailsTitle">{particular_data.name}</p>
              <p className="PDDetailsDescriptionH">Description</p>
              <p
                className="PDDetailsDescripton"
                dangerouslySetInnerHTML={{
                  __html: particular_data.description,
                }}
              />
            </div>
            <div className="PDDetailsViewTer">
              <div className="PDDetailBeltView">
                <img
                  className="PDDetailsBeltImg"
                  src="../../images/shape1.png"
                />
                <img
                  className="PDDetailsBeltImg"
                  src="../../images/shape2.png"
                />
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
              src="../../images/ReviewStars.png"
            />
            <p className="PDDetailsProductRatingReviews">(125+ reviews)</p>
          </div>
          <div className="btnForSendInquiry">
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to={`/${particular_data.categories.map((prod) => prod.slug).toString()}/${
                particular_data.id
              }/inquiry`}
            >
              <button className="btnForSendInquirySend">Send Inquiry</button>
            </Link>
            <button className="btnForSendInquiryCancel">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryDetailsPage;
