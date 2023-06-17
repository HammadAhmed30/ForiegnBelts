import React from "react";

export default function CustomerReviews() {
  return (
    <div className="width-100 customerReviewsMainDiv">
      <h1 className="customerReviewsH1">Customers' reviews</h1>
      <div className="res-1440-40 customerReviewsSecondaryDiv">
        <div className="customerReviewsReviewBoxGroup">
          <ReviewBox
            name="David Mavrick"
            text="I recently purchased a custom wrestling belt from this company and was blown away by the quality of the craftsmanship. The attention to detail was incredible and the materials used were top-notch. I couldn't be happier with my purchase and would highly recommend this company to any wrestler looking for a championship belt that will stand the test of time."
          />
          <ReviewBox
            name="Alex"
            text="I was in the market for a new wrestling belt and stumbled upon this company online. I was hesitant at first, but decided to take a chance and I'm so glad I did. The belt I received was even more impressive in person than it was on the website. The leather was soft yet sturdy and the metal plates were intricately designed"
          />
          <ReviewBox
            name="Morphy"
            text="The customer service at this company is second to none. I had a few questions before making my purchase and the team was incredibly helpful and knowledgeable. They even worked with me to create a custom design that perfectly matched my team's colors and logo. I couldn't be happier with the finished product and the level of service I received."
          />
          <ReviewBox
            name="John"
            text="I've been wrestling for years and have had my fair share of championship belts, but none have been as impressive as the one I received from this company. The attention to detail and quality of the materials used really set this belt apart from the rest. I've received so many compliments on it and am proud to wear it as a symbol of my hard work and dedication to the sport."
          />
          <div className="ourFeaturesMain">
            <div className="ourFeaturesBox">
              <img
                src="./images/image2.png"
                alt="truck"
                className="ourFeaturesImage"
              />
              <p className="ourFeaturesP">On time delivery</p>
            </div>
            <div className="ourFeaturesBox">
              <img
                src="./images/image1.png"
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
                src="./images/image3.png"
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
                src="./images/image4.png"
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
            <p className="orderNowAndSendinquiryButtonP">
              <a href="" className="orderNowAndSendinquiryButtonTag">
                Order Now
              </a>{" "}
              or{" "}
              <a href="" className="orderNowAndSendinquiryButtonTag">
                Send Inquiry
              </a>{" "}
              to place
              <br />
              order for your desire wrestling belts
            </p>
          </div>
          <img src="./images/Logo.png" alt="" className="ourFeaturesLogo" />
        </div>
      </div>
    </div>
  );
}

const ReviewBox = ({ name, text }) => {
  return (
    <div className="reviewBoxMain">
      <div className="emptyDiv"></div>
      <div className="reviewBoxSec">
        <div className="reviewBoxNameDiv">
          <h4 className="reviewBoxNameText">{name}</h4>
        </div>
        <div className="reviewBoxReviewDiv">
          <p className="reviewBoxReviewText">{text}</p>
        </div>
      </div>
    </div>
  );
};
