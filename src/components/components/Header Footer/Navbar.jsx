import React, { useState } from 'react'
import "../../../styles/Navbar.css"



export default function Navbar() {

  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  return (
    <div className='width-100 navbar_main_navbar_cnt'>

      <MainMenu menu={menu} setMenu={setMenu}/>
      <SearchMenu search={search} setSearch={setSearch}/>

        <div className="res-1440-40 navbar_flex_cnt">
            <img className='navbar_logo_image_top' src="./images/Logo.png" alt="" />
            <div className="navbar_linker">
                <a className='linker_a' href="">Home</a>
                <a className='linker_a' href="">Inventory</a>
                <a className='linker_a' href="">Process</a>
                <a className='linker_a' href="">Contact</a>
                <img onClick={()=>{
                  setMenu(false)
                  setSearch(true)
                }} className='linker_search_image_icon' src="./images/search_icon.png" alt="" />
            </div>
            <img onClick={()=>{
              setMenu(true)
            }} className='navbar_menu_icon_button' src="./images/menu.png" alt="" />
        </div>
    </div>
  )
}


const MainMenu = ({menu, setMenu}) =>{
  return(
    <div className='main_menu_cnt' style={{ left: menu ? "0" : "100%" }} >
      <img onClick={()=>{
        setMenu(false)
      }} className='navbar_menu_icon_button_cross' src="./images/close.png" alt="" />
      
      <div className="main_menu_links">
      <a className='linker_a' href="">Home</a>
      <a className='linker_a' href="">Inventory</a>
      <a className='linker_a' href="">Process</a>
      <a className='linker_a' href="">Contact</a>
      </div>

    </div>
  )
}
const SearchMenu = ({search, setSearch}) =>{
  return(
    <div className='search_menu_cnt' style={{ right: search ? "15px" : "-100%" }} >
      <div className='search_div_menu'>
        <input className='search_menu_input' type="text" placeholder='Search'/>

      <img onClick={()=>{
        setSearch(false)
      }} className='navbar_menu_icon_button_cross_search' src="./images/close.png" alt="" />
      </div>

      <div className="search_results">

      </div>
    </div>
  )
}