import React, { useRef, useState } from "react";
import "./shop.scss";
import { Link } from "react-router-dom";
import coffee3 from "../../assets/product/Wings-9-scaled.webp";
import coffee4 from "../../assets/product/Wings-10-scaled.webp";
import "../../componant/home-product/home-product.scss";

function Shop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const products = [
    {
      id: 1,
      img1: coffee3,
      img2: coffee4,
      product_title: "A-10 Blend",
      product_desc: "Coffee",
      product_price: "42 – ر.ق140",
      product_detail: "link1",
    },
    {
      id: 2,
      img1: coffee3,
      img2: coffee4,
      product_title: "Brazil – Diamond",
      product_desc: "Coffee",
      product_price: "42 – ر.ق140",
      product_detail: "link2",
    },
    {
      id: 3,
      img1: coffee3,
      img2: coffee4,
      product_title: "Decaf Coffee",
      product_desc: "Coffee",
      product_price: "45 – ر.ق150",
      product_detail: "link3",
    },
  ];

  return (
    <>
      <div class="parent shop-parent">
        <div class="cont shop-cont">
          <div class="shop-label">
            <div class="dropdown dropdown-main">
              <label for="">Sort By </label>
              <button
                class="btn-secondary dropdown-toggle dropdown-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* cards */}
          <div class="bottom-card">
            {products.map((item, index) => (
              <Link
                to={item.product_detail}
                className="swiper-box"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="top-box"
                  onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
                  onMouseLeave={() =>
                    swiperRef.current?.swiper.autoplay.start()
                  }
                >
                  <div
                    className="coffee-image bg-img-cover"
                    style={{
                      backgroundImage: `url(${
                        hoveredIndex === index ? item.img2 : item.img1
                      })`,
                    }}
                  ></div>
                  <Link to="/about" className="btn-n">
                    Add To Cart
                  </Link>
                </div>
                <div className="bottom-box">
                  <div className="product-heading">{item.product_title}</div>
                  <p className="product-desc">{item.product_desc}</p>
                  <div className="product-price">{item.product_price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
