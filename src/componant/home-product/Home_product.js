import React, { useState } from "react";
import "./home-product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import Swiper Pagination styles
import { Pagination } from "swiper/modules"; // Import Pagination module
import { Link } from "react-router-dom";
import coffee1 from "../../assets/product/coffee-1.png"
import coffee2 from "../../assets/product/coffee-2.png"
const Home_product = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const products = [
    {
      id: 1,
      img1: coffee1,
      img2: coffee2,
      product_title: "Product One",
      product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus.",
      product_price: "Rs. 280.00",
    },
    {
      id: 2,
      img1: "image2.jpg",
      img2: "image2-hover.jpg",
      product_title: "Product Two",
      product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus.",
      product_price: "Rs. 320.00",
    },
    {
      id: 3,
      img1: "image3.jpg",
      img2: "image3-hover.jpg",
      product_title: "Product Three",
      product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus.",
      product_price: "Rs. 150.00",
    },
    {
      id: 4,
      img1: "image4.jpg",
      img2: "image4-hover.jpg",
      product_title: "Product Four",
      product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus.",
      product_price: "Rs. 400.00",
    },
  ];

  return (
    <div className="home-product-parent parent">
      <div className="home-product-cont cont">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className="swiper-box"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="top-box">
                  <div
                    className="coffee-image bg-img-contain"
                    style={{
                      backgroundImage: `url(${hoveredIndex === index ? item.img2 : item.img1})`,
                    }}
                  ></div>
                  <Link to="#" className="btn-n">
                    Add To Cart
                  </Link>
                </div>
                <div className="bottom-box">
                  <div className="product-heading">{item.product_title}</div>
                  <p className="product-desc">{item.product_desc}</p>
                  <div className="product-price">{item.product_price}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home_product;
