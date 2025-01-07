import React from "react";
import "./contact.scss";
import { SlLocationPin } from "react-icons/sl";
import { LiaMailBulkSolid } from "react-icons/lia";
import { MdOutlinePhone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
function Contact() {
  const data = [
    {
      icon: <LiaMailBulkSolid />,
      name: "Mail",
      des: "info@wingscoffeedoha.com",
    },

    {
      icon: <MdOutlinePhone />,
      name: "Mobile",
      des: "+974 55398248",
      des2: "+974 55016107",
    },
    {
      icon: <SlLocationPin />,
      name: "Address",
      des: "Al Bidda Park, Shop no1. 1 Zoon12, Doha",
    },
  ];

  return (
    <>
     <div class="parent main-parent bg-img-cover">
      <div class="cont main-cont">
      <div className=" contact-parent">
        <div className=" contact-cont">
          <h2>Contact Us</h2>

          <div class="contact-company-info">
            {data.map((item, index) => (
              <div class="location-main-box location-box">
                <span className="contact-icons">{item.icon}</span>
                <h4>{item.name}</h4>
                <p style={{margin:"0px"}}>{item.des}</p>
                <p>{item.des2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* form */}
      <div className=" contact-parent-form">
        <div className=" contact-cont-form">
          <div className="contact-left">
            <h4>Get in touch</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              maiores eius iste nesciunt quia quae eius iste nesciunt quia quae
              iste nesciunt quia quae
            </p>
            <form class="form">
              <div class="name-last">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Email" />
              </div>
              <div class="name-last">
                <input type="text" placeholder="Contact " />
                <input type="text" placeholder="Email" />
              </div>
              <textarea placeholder="Message" rows="4" cols="50"></textarea>
              <div class="btn-div">
                <button type="submit" className="btn">
                  Submit
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
     </div>
    </>
  );
}

export default Contact;
