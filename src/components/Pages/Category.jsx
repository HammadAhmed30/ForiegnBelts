import React, { useState, useEffect } from "react";
import "../../styles/TestPageForInventoryPage.css";
import "../../styles/TestPageForProductDetails.css";
import { commerce } from "../../lib/commerce";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LikedBar from "../components/Header Footer/LikedBar";
import Spinner from "../components/Spinner/Spinner";

export default function Category() {
  const [loading, setLoading] = useState(true)
  const { cata } = useParams();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
    setLoading(false)
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.slug).toString() === cata
  );

  return (
    <div className="productCategoryPageCnt">
      <LikedBar/>
      <div className="res-1440-in">
        <h1 className="hTopInven">
          Foreignerbelts
          <br />
          <span className="hTopInvenSpan">originals</span>
        </h1>
      </div>
      <div className="PDisplaySpanDiv">
      {loading && <Spinner/>}
        {filteredProducts.map((item, index) => {
          return (
            <Link
              to={`/${item.categories.map((prod) => prod.slug).toString()}/${
                item.id
              }`}
              key={index}
            >
              <ProductView itemName={item.name} itemImg={item.image.url} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ProductView({itemName, itemImg}) {
  return (
    <div className="PDisplaySpan" style={{color:"black"}}>
      <img src={itemImg} className="PDisplaySpanImg" />
      <div className="PDisplaySpanTitleView">
        <div className="PDisplayTitleDiv">
          <p className="PDisplaySpanTitle">{itemName}</p>
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
