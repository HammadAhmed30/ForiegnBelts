import React, { useState, useEffect } from "react";
import "../../../styles/Navbar.css";
import { commerce } from "../../../lib/commerce";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="width-100 navbar_main_navbar_cnt">
      <MainMenu menu={menu} setMenu={setMenu} />
      <SearchMenu search={search} setSearch={setSearch} />

      <div className="res-1440-40 navbar_flex_cnt">
        <Link to="/"><img className="navbar_logo_image_top" src="./images/Logo.png" alt="" /></Link>
        <div className="navbar_linker">
          <Link className="linker_a" to="/">
            Home
          </Link>
          <Link className="linker_a" to="/inventory">
            Inventory
          </Link>
          <Link className="linker_a" to="">
            Process
          </Link>
          <Link className="linker_a" to="">
            Contact
          </Link>
          <img
            onClick={() => {
              setMenu(false);
              setSearch(true);
            }}
            className="linker_search_image_icon"
            src="./images/search_icon.png"
            alt=""
          />
        </div>
        <img
          onClick={() => {
            setMenu(true);
          }}
          className="navbar_menu_icon_button"
          src="./images/menu.png"
          alt=""
        />
      </div>
    </div>
  );
}

// Main Menu Component

const MainMenu = ({ menu, setMenu }) => {
  return (
    <div className="main_menu_cnt" style={{ left: menu ? "0" : "100%" }}>
      <img
        onClick={() => {
          setMenu(false);
        }}
        className="navbar_menu_icon_button_cross"
        src="./images/close.png"
        alt=""
      />

      <div className="main_menu_links">
        <Link className="linker_a" to="/">
          Home
        </Link>
        <Link className="linker_a" to="/inventory">
          Inventory
        </Link>
        <Link className="linker_a" to="">
          Process
        </Link>
        <Link className="linker_a" to="">
          Contact
        </Link>
      </div>
    </div>
  );
};

// Search Component

const SearchMenu = ({ search, setSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [search_data, set_search_data] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    set_search_data(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      className="search_menu_cnt"
      style={{ right: search ? "15px" : "-100%" }}
    >
      <div className="search_div_menu">
        <input
          className="search_menu_input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <img
          onClick={() => {
            setSearch(false);
            setSearchText("");
          }}
          className="navbar_menu_icon_button_cross_search"
          src="./images/close.png"
          alt=""
        />
      </div>

      <div className="search_results" style={{display : searchText ? "flex" : "none"}}>
        {search_data.map((item, index) => {
          return (
            searchText !== "" &&
            item.name.toLowerCase().includes(searchText.toLowerCase()) && (
              <Link
                onClick={() => {
                  setSearchText("");
                }}
                className="search_results_a"
                to={`/${item.categories
                  .map((prod) => prod.slug)
                  .toString()}/${item.id}`}
              >
                {item.name}
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};
