import React from "react";
import "./home-about.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Home_about = () => {
  return (
    <>
      <div className="home-about-parent parent">
        <div className="home-about-cont cont">
          <div className="home-about-left ">
            <div className="coffee-image bg-img-cover"></div>
          </div>
          <div className="home-about-right">
            <h2 className="home-about-heading">
              Professional Roast Master: Justus du Toit (SCA)
            </h2>
            <p className="home-about-desc">
              All WCR "HANGARS" as they are called, are owned by professionals
              in either the engineering or aviation fields, making it truly a
              collection of very technical minds to source, roast and supply the
              freshest possible coffee to small markets that normally would not
              have access to such a premium quality product.
            </p>
            <Link className="btn">
              Read More{" "}
              <div className="icon">
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about;
