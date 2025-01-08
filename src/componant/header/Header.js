import React, { useState } from "react";
import "./header.scss";
import header_logo from "../../assets/Wings-Logo-White-without-BG.webp";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div class="parent header-parent">
        <div class="cont header-cont">
          <Link to="/" class="header-logo">
            <img className="img-heade-logo" src={header_logo} alt="" />
          </Link>
          <div class="nav-section">
            <Link to="/">Home</Link>
            <Link to="/our-coffee">Our Coffee</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div class="search-div">
            <span>
              {" "}
              <IoSearchOutline />
            </span>
            <span>
              <BsCart />
            </span>
          </div>
        </div>
        <div class="hamburger-menu">
          <div className="ham-burger">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
