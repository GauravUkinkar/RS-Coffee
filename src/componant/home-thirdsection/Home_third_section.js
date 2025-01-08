import React, { useEffect } from "react";
import "./home-third_section.scss";
import { GiCoffeeBeans } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Home_third_section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animations trigger only once
    });
  }, []);

  return (
    <>
      <div
        className="home-third-section-parent parent bg-img-cover"
        data-aos="zoom-in"
      >
        <div className="home-third-section-cont cont">
          <div
            className="home-third-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="heading-new">Roasting Coffee with aviation standards</h2>
            <div className="cards">
              <div className="card-n" data-aos="fade-up" data-aos-delay="300">
                <div className="card-left">
                  <GiCoffeeBeans />
                </div>
                <div className="card-right">
                  <div className="heading">Wings Coffee Roasters (WCR)</div>
                  <p className="sub-heading">
                    WINGS COFFEE ROASTERS (WCR) is a collection of dedicated
                    professionals who share a passion for pushing their
                    technical and creative boundaries outside of their everyday
                    career titles and the love of coffee to deliver you any
                    coffee you are looking for.
                  </p>
                </div>
              </div>

              <div className="card-n" data-aos="fade-down" data-aos-delay="400">
                <div className="card-left">
                  <GiCoffeeBeans />
                </div>
                <div className="card-right">
                  <div className="heading">Speciality Coffee</div>
                  <p className="sub-heading">
                    Whether you are looking for coffee to drink at home or into
                    speciality coffee and enjoy extracting coffee in different
                    methods or you have a cafe or restaurant and looking for a
                    fresh roasted coffee in a customized way to differentiate
                    your cup of coffee from competitors.
                  </p>
                </div>
              </div>

              <div className="card-n" data-aos="fade-up" data-aos-delay="500">
                <div className="card-left">
                  <GiCoffeeBeans />
                </div>
                <div className="card-right">
                  <div className="heading">We source the best coffee for you</div>
                  <p className="sub-heading">
                    <ul className="pointer">
                      <li>Brazil – Natural – Cupping Score 84+</li>
                      <li>Rwanda – Fully Washed – Cupping Score 86+</li>
                      <li>
                        Panama – Natural, Maceration and Fully Washed – Cupping
                        score 88+ and 90+
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="home-third-right bg-img-cover"
            data-aos="zoom-in"
            data-aos-delay="600"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home_third_section;
