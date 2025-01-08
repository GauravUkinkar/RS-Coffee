import React, { useEffect } from "react";
import "./ourCoffee.scss";
import { GiCoffeeBeans } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

function OurCoffee() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Customize duration as needed
  }, []);

  const data = [
    {
      count: "84+",
      icon: <GiCoffeeBeans />,
      title: "Happy Customers Served",
      content:
        "Cafes, restaurants, eateries, and retail consumers receive our high-quality supplies.",
    },
    {
      count: "86+",
      icon: <GiCoffeeBeans />,
      title: "Happy Customers Served",
      content:
        "Cafes, restaurants, eateries, and retail consumers receive our high-quality supplies.",
    },
    {
      count: "90+",
      icon: <GiCoffeeBeans />,
      title: "Happy Customers Served",
      content:
        "Cafes, restaurants, eateries, and retail consumers receive our high-quality supplies.",
    },
  ];

  return (
    <>
      {/* first section */}
      <div className="parent parent-our-coffee" data-aos="fade-up">
        <div className="cont cont-our-coffee">
          <div className="left-our-coffee">
            <div className="img-coffee-boy bg-img-cover"></div>
          </div>
          <div className="right-our-coffee">
            <h2>At WCR we source our coffee directly from Origin.</h2>
            <p>
              Our direct sourcing principal allows us to work closer with the
              producers. This has the following benefits for our clients:
            </p>
            <div className="two-points">
              <div className="bullet" data-aos="zoom-in">
                <span>
                  <GiCoffeeBeans />
                </span>
                <p>
                  Fixed prices for at least 6 months due to direct relationship
                  with farmers
                </p>
              </div>
              <div className="bullet" data-aos="zoom-in">
                <span>
                  <GiCoffeeBeans />
                </span>
                <p>
                  Consistent quality guaranteed due to origin visit’s before
                  shipment dispatch to Qatar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="parent second-section-parent" data-aos="fade-up">
        <div className="cont second-section-cont">
          <p>
            All our coffees are Grade 1 Arabica. This is the highest grade of
            beans, and to be classified as Grade 1 Coffee, the beans need to
            have no primary defects and 0-3 full defects, with a maximum of 5%
            above and below the specified screen size.
          </p>
        </div>
      </div>

      {/* counter section */}
      <div className="parent counter-parent" data-aos="fade-up">
        <div className="cont counter-cont">
          <h2 className="cont-main-heading">
            We constantly source coffee from the following main origins
          </h2>
          <div className="counter-box-main">
            {data.map((item, index) => (
              <div className="one-counter counter-box" data-aos="zoom-in" key={index}>
                <div className="no-count">
                  <h2>{item.count}</h2>
                  <span>{item.icon}</span>
                </div>
                <div className="count-content">
                  <div className="count-heading">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="count-para">
                    <p className="para">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* third section */}
      <div
        className="parent parent-our-coffee-third bg-img-cover"
        data-aos="fade-up"
      >
        <div className="cont cont-our-coffee-third">
          <div className="left-our-coffee">
            <h2>Customization</h2>
            <p>
              To offer complexity and uniqueness, we create customized blends
              for our customers with our three main origins.
            </p>
            <p>
              The ratio of the blend will become the signature of that specific
              customer and will not be repeated for any other customer – while
              using Wings as the supplier.
            </p>
          </div>
          <div className="right-our-coffee">
            <div className="img-coffee-customization bg-img-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCoffee;
