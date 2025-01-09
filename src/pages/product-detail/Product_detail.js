import React, { useState } from "react";
import "./product_detail.scss";
import img1 from "../../assets/gallery/coffee.webp";
import img2 from "../../assets/gallery/coffee1.webp";
import img3 from "../../assets/gallery/coffee2.webp";
import img4 from "../../assets/gallery/coffee3.webp";
import img5 from "../../assets/gallery/coffee6.webp";
import Home_product from "../../componant/home-product/Home_product";

const Product_detail = () => {
  const images = [img1, img2, img3, img4, img5];
  const [counter, setCounter] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="product-detail-parent parent">
      <div className="product-detail-cont cont bg-img-cover">
        <div className="product-detail-top">
          {/* Product Images */}
          <div className="product-detail-top-left">
            <div className="product-box-left">
              {images.map((image, index) => (
                <div
                  className={`product-box-l-top bg-img-contain ${
                    selectedImage === image ? "active" : ""
                  }`}
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
            <h2 className="product-title">A-10 Blend</h2>
            <div className="line"></div>
            <div className="price-box">
              {" "}
              <h3 className="price">Rs. 240</h3>
              <h3 className="price-old">
                <s>Rs. 280</s>
              </h3>
            </div>

            <p className="product-desc">
            A mixture between a Flowery beans – Ethiopia  and a Fruity beans – Rwanda to create this unique amazing blend.
              
            </p>
            <div className="line"></div>
            <div className="product-size">
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
            </div>
            <div className="line"></div>
<div className="product-weight">
<label htmlFor="plan" className="weight">
              Weight:
            </label>
            <select id="plan">
              <option value="">Choose an option</option>
              <option value="tfgram">250g</option>
              <option value="fhundredgram">500g</option>
              <option value="onekilo">1kg</option>
            </select>
</div>
            
           
            <div className="line"></div>

            <div className="counter">
              <button
                className="counter-btn"
                onClick={() => setCounter(counter - 1)}
                disabled={counter === 1}
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eaque perferendis consectetur voluptatibus quam quidem eligendi
              aperiam perspiciatis vitae accusantium laboriosam totam
              repudiandae unde, dolore obcaecati! Laudantium quae quos enim
              culpa obcaecati, amet hic, delectus tenetur dolorem illum beatae
              sint et mollitia dicta nesciunt. Enim magni dicta numquam sunt
              maxime?
            </p>
          )}
          {activeTab === "additional" && (
            <p className="details">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eaque perferendis consectetur voluptatibus quam quidem eligendi
              aperiam perspiciatis vitae accusantium laboriosam totam
              repudiandae unde, dolore obcaecati! Laudantium quae quos enim
              culpa obcaecati, amet hic, delectus tenetur dolorem illum beatae
              sint et mollitia dicta nesciunt. Enim magni dicta numquam sunt
              maxime? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nostrum eaque perferendis consectetur voluptatibus quam quidem
              eligendi aperiam perspiciatis vitae accusantium laboriosam totam
              repudiandae unde, dolore obcaecati! Laudantium quae quos enim
              culpa obcaecati, amet hic, delectus tenetur dolorem illum beatae
              sint et mollitia dicta nesciunt. Enim magni dicta numquam sunt
              maxime?
            </p>
          )}
        </div>
      </div>
      {/* product swiper added Here */}
      <Home_product title="Related Products" />
    </div>
  );
};

export default Product_detail;
