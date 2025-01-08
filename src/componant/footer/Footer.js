import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { LiaMailBulkSolid } from "react-icons/lia";
import { MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div class="parent footer-parent">
        <div class="cont footer-cont">
          <div class="company-details">
            <div className="footer-logo bg-img-cover"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, Libero
              itaque nulla hic facere.
            </p>
          </div>
          <div class="footer-pages">
            <div class="page-heading">
              <h4>Pages</h4>
            </div>
            <div class="pages-link">
              <Link>Home</Link>
              <Link>Our Coffee</Link>
              <Link>Shop</Link>
              <Link>Contact</Link>
            </div>
          </div>
          <div class="footer-social-media">
            <div class="footer-social-media-heading">
              <h4>Follow Us</h4>
            </div>
            <div class="footer-social-media-link">
              <Link>Facebook</Link>
              <Link>Instagram</Link>
            </div>
          </div>
          <div class="footer-contact">
            <div class="contact-footer-page">
              <h4>Contact</h4>
            </div>

            <div class="location-phone-email">
              <div class="icons-details-address">
                <span className="footer-iconss">
                  <LiaMailBulkSolid />
                </span>
                <Link className="content-icons">info@wingscoffeedoha.com</Link>
              </div>

              <div class="icons-details-address">
                <span>
                  <MdOutlinePhone className="footer-iconss" />
                </span>
                <Link className="content-icons">+ 974 55398248, </Link>
                <Link className="content-icons">+ 974 55016107</Link>
              </div>

              <div class="icons-details-address">
                <span>
                  <SlLocationPin className="footer-iconss" />
                </span>
                <Link className="content-icons">
                  Al Bidda Park, Shop no1. 1 Zoon12, Doha
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
