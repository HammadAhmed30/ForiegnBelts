import React, { useState, useEffect, useContext } from "react";
import "../../styles/TestPageForInventoryPage.css";
import "../../styles/TestPageForProductDetails.css";
import { commerce } from "../../lib/commerce";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LikedBar from "../components/Header Footer/LikedBar";
import Spinner from "../components/Spinner/Spinner";
import LikedItemsContext from "../context/LikedItemsContext";

export default function Category() {
  const [loading, setLoading] = useState(true);
  const { cata } = useParams();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    document.title=`${cata.toUpperCase()} Belts | Foreignerbelts`
    fetchProducts();

  }, []);

  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.slug).toString() === cata
  );

  return (
    <div className="width-100">
      <LikedBar />
      <div className="productCategoryPageCnt res-1440-in">
        <div className="res-1440-in">
          <h1 className="hTopInven">
            Foreignerbelts
            <br />
            <span className="hTopInvenSpan">originals</span>
          </h1>
        </div>
        <div className="PDisplaySpanDiv">
          {loading && <Spinner />}
          {filteredProducts.map((item, index) => {
            return (
              <ProductView
                key={index}
                itemName={item.name}
                itemImg={item.image.url}
                itemId={item.id}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProductView({ itemName, itemImg, itemId, item }) {
  const { addToLikedItems } = useContext(LikedItemsContext);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddLike = (id) => {
    let foundObject = products.find((obj) => obj.id === id);
    addToLikedItems(foundObject);
  };

  return (
    <div className="PDisplaySpan" style={{ color: "black" }}>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/${item.categories.map((prod) => prod.slug).toString()}/${
          item.id
        }`}
      >
        <img src={itemImg} className="PDisplaySpanImg" />
      </Link>
      <div className="PDisplaySpanTitleView">
        <div className="PDisplayTitleDiv">
          <p className="PDisplaySpanTitle">{itemName}</p>
        </div>
        <div className="PDisplayLikeView">
          <img
            onClick={(e) => {
              e.target.src = "./images/filledheart.png";
              handleAddLike(itemId);
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
