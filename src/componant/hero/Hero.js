import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="hero-parent parent">
      <div className="hero-cont cont">
        <div className="hero-left">
          <h1 className="hero-heading">Wings Coffee Roasters</h1>
          <p className="hero-desc">
            Roast coffee with aviation precision. Roast coffee with aviation
            precision. Roast coffee with aviation precision.
          </p>
          <Link to="#" className="btn">
            Shop Now <FaArrowRightLong />
          </Link>

          <div className="main-box">
            <div className="box">
              <div className="number">
                50 <span>+</span>
              </div>
              <div className="descs">ITEM OF COFFEE</div>
            </div>
            <div className="box">
              <div className="number">
                50 <span>+</span>
              </div>
              <div className="descs">ORDER RUNNIG</div>
            </div>
            <div className="box">
              <div className="number">
                5k <span>+</span>
              </div>
              <div className="descs">HAPPY CUSTOMER</div>
            </div>
          </div>
        </div>
        <div className="hero-right bg-img-contain"></div>
        <div className="heading-text">Wings Coffee</div>
      </div>
    </div>
  );
};

export default Hero;
