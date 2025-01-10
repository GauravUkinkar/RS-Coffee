import React, { useEffect } from "react";
import "./home-about.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { VscCoffee } from "react-icons/vsc";
import Button from "../Button/Button";

const Home_about = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <>
      <div className="home-about-parent parent">
        <div className="home-about-cont cont">
          <div
            className="home-about-left"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              className="coffee-image bg-img-cover"
              // data-aos="zoom-in"
              // data-aos-delay="400"
            ></div>
          </div>
          <div
            className="home-about-right"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2
              className="home-about-heading"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Professional Roast Master: Justus du Toit (SCA)
            </h2>
            <p
              className="home-about-desc"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              All WCR "HANGARS" as they are called, are owned by professionals
              in either the engineering or aviation fields, making it truly a
              collection of very technical minds to source, roast and supply the
              freshest possible coffee to small markets that normally would not
              have access to such a premium quality product.
            </p>
            <Button  url="/our-coffee" btntxt="Read More"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about;
