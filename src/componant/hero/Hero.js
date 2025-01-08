import React, { useEffect } from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <div className="hero-parent parent">
      <div className="hero-cont cont">
        <div className="hero-left" data-aos="zoom-in" data-aos-delay="200">
          <h1 className="hero-heading">Wings Coffee Roasters</h1>
          <p
            className="hero-desc"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Roast coffee with aviation precision. Roast coffee with aviation
            precision. Roast coffee with aviation precision.
          </p>
          <Link
            to="#"
            className="btn"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Shop Now
            <div className="icon">
              <FaArrowRightLong />
            </div>
          </Link>

          <div className="main-box" data-aos="fade-up" data-aos-delay="800">
            <div className="box" data-aos="fade-up" data-aos-delay="1000">
              <div className="number">
                50 <span>+</span>
              </div>
              <div className="descs">ITEM OF COFFEE</div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-delay="1200">
              <div className="number">
                50 <span>+</span>
              </div>
              <div className="descs">ORDER RUNNING</div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-delay="1400">
              <div className="number">
                5k <span>+</span>
              </div>
              <div className="descs">HAPPY CUSTOMER</div>
            </div>
          </div>
        </div>
        <div
          className="hero-right bg-img-contain"
          data-aos="fade-up"
         
        ></div>
        <div
          className="heading-text"
         
        >
          Wings Coffee
        </div>
      </div>
    </div>
  );
};

export default Hero;
