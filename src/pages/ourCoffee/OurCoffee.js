import React from "react";
import "./ourCoffee.scss";

function OurCoffee() {
  return (
    <>
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
                <span>.</span>
                <p>
                  Fixed prices for at least 6 months due to direct relationship
                  with farmers
                </p>
              </div>
              <div class="bullet">
                <span>.</span>
                <p>
                  Consistent quality guaranteed due to origin visit’s before
                  shipment dispatch to Qatar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCoffee;
