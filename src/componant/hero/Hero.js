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
        </div>
        <div
          className="hero-right bg-img-contain"
          data-aos="fade-up"
        >
          <div className="animation">
            <div className="p2"></div>
            <div className="p1"></div>
          </div>
        </div>
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
