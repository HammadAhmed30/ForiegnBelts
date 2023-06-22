import React, { useContext, useState, useEffect } from "react";
import LikedItemsContext from "../../context/LikedItemsContext";
import { commerce } from "../../../lib/commerce";

function LikedInventory() {
  const { likedItems } = useContext(LikedItemsContext);
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


  return (
    <div className="width-100 LIMainDiv">
      {products && (
        <div className="res-1440-in LISecDiv">
          <div className="LIHeadingDiv">
            <p className="LIHeadingText">Liked Inventory</p>
            <div className="LIheadingBrandingDiv">
              <p className="LIheadingBrandingMain">Foreignerbelts</p>
              <p className="LIheadingBrandingSub">originals</p>
            </div>
          </div>
          <div className="LIProductDiv">
            {likedItems.map((item, index) => {
              return <ProductDiv key={index} item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductDiv({ item }) {
  return (
    <div className="ProductDivMain">
      <div className="ProductDivImgMain">
        <img src={item.image.url} className="ProductDivImg" />
      </div>
      <div className="ProductDivContentMain">
        <div className="ProductDivContentHeading">
          <p className="ProductDivTitle">{item.name}</p>
        </div>
        <div className="ProductDivContentDesc">
          <p
            className="ProductDivDesc"
            dangerouslySetInnerHTML={{
              __html: item.description.slice(0, 200),
            }}
          />
        </div>
      </div>
      <div className="ProductDivSelectMain"></div>
    </div>
  );
}

export default LikedInventory;
