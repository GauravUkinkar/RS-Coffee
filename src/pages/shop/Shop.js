import React, { useRef, useState, useEffect } from "react";
import "./shop.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import coffee3 from "../../assets/product/Wings-9-scaled.webp";
import coffee4 from "../../assets/product/Wings-10-scaled.webp";
import "../../componant/home-product/home-product.scss";
import { IoSearchOutline } from "react-icons/io5";
import img1 from "../../assets/coffee.png";
import { IoMdStar } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { BsCart } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { TbCategory } from "react-icons/tb";

function Shop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);

  const [bottomNav, setBottmNav] = useState(false);

  const [likeBtn, setLikeBtn] = useState(false);

  const toggleLike = (index) => {
    setLikeBtn((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

 


  const products = [
    {
      product_name: "A-10 Blend",
      product_price: "250 ر.",
      product_img: img1,
    },
    {
      product_name: "Brazil – Diamond",
      product_price: "250 ر.",
      product_img: img1,
    },
    {
      product_name: "Decaf Coffee",
      product_price: "250 ر.",
      product_img: img1,
    },
    {
      product_name: "Drip Solo Bag",
      product_price: "250 ر.",
      product_img: img1,
    },
    {
      product_name: "Ethiopia – Guji",
      product_price: "250 ر.",
      product_img: img1,
    },
    {
      product_name: "Honduras Coffee",
      product_price: "250 ر.",
      product_img: img1,
    },
  ];

  const category = [
    {
      category: "Category 2",
    },
    {
      category: "Category 2",
    },
  ];

  const filters = [
    {
      category: "Category",
    },
    {
      category: "Price",
    },
    {
      category: "Discount",
    },
  ];

  return (
    <>
      <div className="parent shop-parent">
        <div className="cont shop-cont">
          <div className="shop-label" data-aos="fade-down">
            <div className="dropdown dropdown-main">
              <div className="search-field">
                <input type="text" placeholder="Search" />
                <span className="search-icon-shop">
                  <IoSearchOutline />
                </span>
              </div>
              {filters.map((item, index) => (
                <button
                  className="btn-secondary dropdown-toggle dropdown-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {item.category}
                </button>
              ))}
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {category.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {item.category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cards */}
          <div className="bottom-card" data-aos="fade-down">
            {products.map((item, index) => (
              <Link class="category-box">
                <div class="top-category">
                  {" "}
                  <img src={item.product_img} alt="" />
                </div>
                <div class="bottom-category">
                  <h3>{item.product_name}</h3>
                  <span>{item.product_price}</span>
                  <div class="star">
                    <span>
                      <IoMdStar />
                    </span>
                    <span>
                      <IoMdStar />
                    </span>
                    <span>
                      <IoMdStar />
                    </span>
                    <span>
                      <IoMdStar />
                    </span>
                  </div>
                  <div className="addtocart">
                    <Link class="addto">
                      <span>
                        <BsCart />
                      </span>
                      <span className="add-to-name">Add To Cart</span>
                    </Link>
                    <span
                      onClick={() => toggleLike(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {likeBtn[index] ? (
                        <FcLike />
                      ) : (
                        <IoIosHeart style={{ color: "var(--accent3)" }} />
                      )}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div class={bottomNav ? "shop-bottom-mov" : "shop-bottom-mov"}>
        <div class="category-div">
          <span>
            <TbCategory />
          </span>
          <span>Category</span> 
        </div>
        <div class="price-div">
          <span>
            <TbCategory />
          </span>
          <span>Price</span>
        </div>
        <div class="discount-div">
          <span>
            <TbCategory />
          </span>
          <span>Discount</span>
        </div>
      </div>
    </>
  );
}

export default Shop;
