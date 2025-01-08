import React from "react";
import "./pageNotFound.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function PageNotFound() {
  return (
    <>
      <div class="pagenotfound-parent parent bg-img-cover">
        <div class="cont pagenotfound-cont">
          <div className="headding-div">
            <h2 className="head1">404</h2>
            <h3 className="head2">Page Not Found</h3>
          </div>

          <Link to="/" className="btn">
            Back To Home
            <div className="icon">
              <FaArrowRightLong />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
