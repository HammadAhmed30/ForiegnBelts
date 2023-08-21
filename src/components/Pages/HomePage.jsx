import React, { useEffect } from "react";
import LandingPage from "../components/Home Page/LandingPage";
import AnyDesire from "../components/Home Page/AnyDesire";
import "../../styles/HomePage.css";
import QualityandRelation from "../components/Home Page/QualityandRelation";
import Assure from "../components/Home Page/Assure";
import CustomerReviews from "../components/Home Page/CustomerReviews";

export default function HomePage() {
  useEffect(()=>{
    document.title="Foriegner Belts"
  },[])
  return (
    <div className="width-100">
      <LandingPage />
      <AnyDesire />
      <QualityandRelation />
      <Assure />
      <CustomerReviews />
    </div>
  );
}
