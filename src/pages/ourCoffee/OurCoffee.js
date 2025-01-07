import React from "react";
import "./ourCoffee.scss";
import { GiCoffeeBeans } from "react-icons/gi";

function OurCoffee() {
  const data = [
    {
      count: "84+",
      icon: <GiCoffeeBeans />,
      title: "Happy Customers Served",
      content:
        "Cafes, restaurants, eateries, and retail consumers receive our      high-quality supplies.",
    },
    {
      count: "86+",
      icon: <GiCoffeeBeans />,
      title: "Happy Customers Served",
      content:
        "Cafes, restaurants, eateries, and retail consumers receive our      high-quality supplies.",
    },
    {
      count: "90+",
      icon: <GiCoffeeBeans />,
      title: "Happy Customers Served",
      content:
        "Cafes, restaurants, eateries, and retail consumers receive our      high-quality supplies.",
    },
  ];

  return (
    <>
      {/* first section */}
      <div className="parent parent-our-coffee">
        <div className="cont cont-our-coffee">
          <div class="left-our-coffee ">
            <div class="img-coffee-boy bg-img-cover"></div>
          </div>
          <div class="right-our-coffee">
            <h2>At WCR we source our coffee directly from Origin.</h2>
            <p>
              Our direct sourcing principal allows us to work closer with the
              producers. This has the following benefits for our clients:
            </p>
            <div class="two-points">
              <div class="bullet">
                <span>
                  <GiCoffeeBeans />
                </span>
                <p>
                  Fixed prices for at least 6 months due to direct relationship
                  with farmers
                </p>
              </div>
              <div class="bullet">
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
      <div class="parent second-section-parent">
        <div class="cont second-section-cont">
          <p>
            All our coffees are Grade 1 Arabica. This is the highest grade of
            beans, and to be classified as Grade 1 Coffee, the beans need to
            have no primary defects and 0-3 full defects, with a maximum of 5%
            above and below the specified screen size.
          </p>
        </div>
      </div>

      {/* counter section */}

      <div class="parent counter-parent">
        <div class="cont counter-cont">
          <h2 className="cont-main-heading">
            We constantly source coffee from the following main origins
          </h2>
          <div class="counter-box-main">
            {data.map((item, index) => (
              <div class="one-counter counter-box">
                <div class="no-count">
                  <h2>{item.count}</h2>
                  <span>{item.icon}</span>
                </div>
                <div class="count-content">
                  <div class="count-heading">
                    <h4>{item.title}</h4>
                  </div>
                  <div class="count-para">
                    <p className="para">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="parent parent-our-coffee-third bg-img-cover">
        <div className="cont cont-our-coffee-third">
          <div class="left-our-coffee">
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
          <div class="right-our-coffee ">
            <div class="img-coffee-customization bg-img-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCoffee;
