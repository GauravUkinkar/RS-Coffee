import React from "react";
import "./home-third_section.scss";
import { GiCoffeeBeans } from "react-icons/gi";
const Home_third_section = () => {
  return (
    <>
      <div className="home-third-section-parent parent bg-img-cover">
        <div className="home-third-section-cont cont">
          <div className="home-third-left">
            <h2 className="heading-new">
              {" "}
              Roasting Coffee with aviation standards
            </h2>
            <div className="cards">
              <div className="card-n">
                <div className="card-left ">
                  <GiCoffeeBeans />
                </div>
                <div className="card-right">
                  <div className="heading">Wings Coffee Roasters (WCR)</div>
                  <p className="sub-heading">
                    WINGS COFFEE ROASTERS (WCR) is a collection of dedicated
                    professionals who share a passion for pushing their
                    technical and creative boundaries outside of their every day
                    career titles and the love of coffee to deliver you any
                    coffee you are looking for.
                  </p>
                </div>
              </div>
              <div className="card-n">
                <div className="card-left ">
                  <GiCoffeeBeans />
                </div>
                <div className="card-right">
                  <div className="heading">Speciality Coffee</div>
                  <p className="sub-heading">
                    whether you are looking for coffee to drink at home or into
                    speciality coffee and enjoy extracting coffee in different
                    methods or you have a cafe or restaurant and looking for a
                    fresh roasted coffee in a customized way to differentiate
                    your cup of coffee from competitors.
                  </p>
                </div>
              </div>

              <div className="card-n">
                <div className="card-left ">
                  <GiCoffeeBeans />
                </div>
                <div className="card-right">
                  <div className="heading">
                    We source the best coffee for you
                  </div>
                  <p className="sub-heading">
                    <ul className="pointer">
                      <li> Brazil – Natural – Cupping Score 84+</li>
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
          <div className="home-third-right bg-img-cover"></div>
        </div>
      </div>
    </>
  );
};

export default Home_third_section;
