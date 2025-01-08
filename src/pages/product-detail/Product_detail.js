import React, { useState } from "react";
import "./product_detail.scss";
import img1 from "../../assets/gallery/coffee.webp";
import img2 from "../../assets/gallery/coffee1.webp";
import img3 from "../../assets/gallery/coffee2.webp";
import Home_product from "../../componant/home-product/Home_product";

const Product_detail = () => {
  const images = [img1, img2, img3];
  const [counter, setCounter] = useState(0);
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default to the first image

  return (
    <div className="product-detail-parent parent">
      <div className="product-detail-cont cont">
        <div className="product-detail-top">
          {/* Product Images */}
          <div className="product-detail-top-left">
            <div className="product-box-left">
              {images.map((image, index) => (
                <div
                  className="product-box-l-top bg-img-cover"
                  key={index}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                ></div>
              ))}
            </div>

            <div
              className="product-box-right bg-img-cover"
              style={{
                backgroundImage: `url(${selectedImage})`,
              }}
            ></div>
          </div>

          {/* Product-all-Details */}
          <div className="product-detail-top-right">
            <h2 className="product-title">Your Coffee Name</h2>
            <div className="line"></div>
            <h3 className="price">Rs. 140 - 580.</h3>
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
              fugit rem mollitia enim debitis ipsum praesentium consectetur et
              voluptatum!
            </p>
            <div className="line"></div>

            <label htmlFor="plan" className="grind-size">
             Grind Size:
            </label>
            <select id="plan">
              <option value="">Choose an option</option>
              <option value="beans">Beans</option>
              <option value="french-press">French Press</option>
              <option value="pour-over">Pour Over</option>
              <option value="espress">Espresso</option>
              <option value="turkish">Turkish</option>
            </select>
            <div className="line"></div>
            <label htmlFor="plan" className="weight">
              Weight:
            </label>
            <select id="plan">
              <option value="">Choose an option</option>
              <option value="tfgram">250g</option>
              <option value="fhundredgram">500g</option>
              <option value="onekilo">1kg</option>
            </select>
            <div className="line"></div>

            <div className="counter">
              <button
                className="counter-btn"
                onClick={() => setCounter(counter - 1)}
              >
                -
              </button>
              <span className="counter-value">{counter}</span>
              <button
                className="counter-btn"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
              <div className="btn-new">Add To Cart</div>
            </div>
          </div>
        </div>

        {/* bottom side product details */}
        <div className="product-detail-bottom">
          <div className="top-top">
            <div
              className={`btn-box1 ${activeTab === "details" ? "active" : ""}`}
              onClick={() => setActiveTab("details")}
            >
              Product Details
            </div>
            <div
              className={`btn-box2 ${
                activeTab === "additional" ? "active" : ""
              }`}
              onClick={() => setActiveTab("additional")}
            >
              Additional Information
            </div>
          </div>
          {activeTab === "details" && (
            <p className="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              blanditiis cum quas voluptatibus ipsum architecto quo magni soluta
              laudantium nam quae nisi neque repellat maiores, quam sed, impedit
              veniam laboriosam aut iure nemo sint, obcaecati earum.
            </p>
          )}
          {activeTab === "additional" && (
            <p className="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem laborum, impedit excepturi hic assumenda quod
              officia architecto recusandae ratione ipsa!
            </p>
          )}
        </div>


        {/* product swiper added Here */}
        <Home_product title="Related Products"/>
      </div>
    </div>
  );
};

export default Product_detail;
