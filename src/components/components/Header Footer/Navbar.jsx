import React from 'react'
import "../../../styles/Navbar.css"



export default function Navbar() {
  return (
    <div className='width-100 navbar_main_navbar_cnt'>
        <div className="res-1440-40 navbar_flex_cnt">
            <img className='navbar_logo_image_top' src="./images/Logo.png" alt="" />
            <div className="navbar_linker">
                <a className='linker_a' href="">Home</a>
                <a className='linker_a' href="">Inventory</a>
                <a className='linker_a' href="">Process</a>
                <a className='linker_a' href="">Contact</a>
                <img className='linker_search_image_icon' src="./images/search_icon.png" alt="" />
            </div>
            <img className='navbar_menu_icon_button' src="/./images/menu.png" alt="" />
        </div>
    </div>
  )
}
