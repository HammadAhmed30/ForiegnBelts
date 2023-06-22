import React from "react";
import "../../../styles/HomePage.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="width-100 footer_container">
      <div className="">
        <div className="ourFeaturesMain res-1440-in" style={{zIndex:"100"}}>
          <div className="ourFeaturesBox">
            <img
              src="/images/image2.png"
              alt="truck"
              className="ourFeaturesImage"
            />
            <p className="ourFeaturesP">On time delivery</p>
          </div>
          <div className="ourFeaturesBox">
            <img
              src="/images/image1.png"
              alt=""
              className="ourFeaturesImage"
            />
            <p className="ourFeaturesP">
              Certified
              <br />
              Materials
            </p>
          </div>
          <div className="ourFeaturesBox">
            <img
              src="/images/image3.png"
              alt=""
              className="ourFeaturesImage"
            />
            <p className="ourFeaturesP">
              Quality
              <br />
              Checks
            </p>
          </div>
          <div className="ourFeaturesBox">
            <img
              src="/images/image4.png"
              alt=""
              className="ourFeaturesImage"
            />
            <p className="ourFeaturesP">
              After Sales
              <br />
              Customer Service
            </p>
          </div>
        </div>
        <div className="orderNowAndSendinquiryButtonMainDiv">
          
        </div>

        <div className="footer_main_content_linkers">
          <div className="footer_main_content_linkers_img_div">
          </div>
            <img
              className="footer_main_content_linkers_img"
              src="/images/Logo.png"
              alt=""
            />
          <div className="main_cnt_main_linker res-1440-in">
            <h1 className="main_cnt_main_linker_h1">Foreignerbelts.</h1>
            <div className="main_cnt_main_linker_div">
              <div className="footer_linker_category">
                <h1 className="footer_linker_category_h1">Categories</h1>
                <Link onClick={()=>{
                    window.scrollTo(0, 0);
                }} className="Linker_capi_L Linker_capi_L_1" to={"/prime"}>
                  Prime
                </Link>
                <Link onClick={()=>{
                    window.scrollTo(0, 0);
                }} className="Linker_capi_L" to={"/economy"}>
                  Economy
                </Link>
                <Link onClick={()=>{
                    window.scrollTo(0, 0);
                }} className="Linker_capi_L" to={"/classic"}>
                  Classic
                </Link>
                <Link onClick={()=>{
                    window.scrollTo(0, 0);
                }} className="Linker_capi_L" to={"/costum"}>
                  Custom
                </Link>
              </div>
              <div className="footer_linker_contact_info">
                <h1 className="footer_linker_contact_info_h1">Contact</h1>
                <p className="footer_linker_contact_info_p footer_linker_contact_info_p_1">
                  Allama Iqbal Chowk, Sialkot, Pakistan-51310
                </p>
                <p className="footer_linker_contact_info_p">
                  WhatsApp: +92 31217 87526
                </p>
                <p className="footer_linker_contact_info_p">
                  foreignersports09@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
