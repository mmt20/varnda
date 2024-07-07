import React from 'react'
import "./Cards.css"
import img1 from "../../images/2.png";
import img2 from "../../images/3.png";
import img3 from "../../images/4.png";
import { Link } from "react-router-dom";
export default function Cards() {
  return (
    <div className="cards container my-5">
    <Link to="/areaPage" className="card-image">
      <img src={img3} alt="" />
    </Link>

    <Link to="/findHomePage" className=" card-image">
      <img src={img2} alt="" />
    </Link>

    <Link to="/companyPage" className="card-image">
      <img src={img1} alt="" />
    </Link>
  </div>
  )
}
