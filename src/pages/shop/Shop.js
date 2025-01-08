import React, { useRef, useState, useEffect } from "react";
import "./shop.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import coffee3 from "../../assets/product/Wings-9-scaled.webp";
import coffee4 from "../../assets/product/Wings-10-scaled.webp";
import "../../componant/home-product/home-product.scss";

function Shop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

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
      <div className="parent shop-parent">
        <div className="cont shop-cont">
          <div className="shop-label" data-aos="fade-down">
            <div className="dropdown dropdown-main">
              <label>Sort By </label>
              <button
                className="btn-secondary dropdown-toggle dropdown-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Cards */}
          <div className="bottom-card">
            {products.map((item, index) => (
              <Link
                key={item.id}
                to={item.product_detail}
                className="swiper-box"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="fade-up"
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
