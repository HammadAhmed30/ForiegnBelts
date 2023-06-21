import React from "react";
import { Link } from "react-router-dom";

export default function ExploreMore() {
  return (
    <div className="width-100">
      <div className="res-1440-in">
        <p className="hExplore">Explore more</p>
        <CategoryImage name="Prime" imgUrl="./images/image prime.png" />
        <CategoryImage name="Classic" imgUrl="./images/image classic.png" />
        <CategoryImage name="Economy" imgUrl="./images/image economy.png" />
        {/* <CategoryImage name="Custom" imgUrl="./images/image Custom.png" /> */}
      </div>
    </div>
  );
}

const CategoryImage = ({ name, imgUrl }) => {
  return (
    <div className="CategoryImage">
      <Link to={`/${name.toLowerCase()}`}>
        <img className="CategoryImageImg" src={imgUrl} alt="" />
        <h1 className="CategoryImageH1">{name.toUpperCase()}</h1>
      </Link>
    </div>
  );
};
