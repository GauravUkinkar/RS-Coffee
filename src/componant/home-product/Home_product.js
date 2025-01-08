import React, { useEffect, useRef, useState } from "react";
import "./home-product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import Swiper Pagination styles
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import coffee1 from "../../assets/product/coffee-1.png";
import coffee2 from "../../assets/product/coffee-2.png";
import coffee3 from "../../assets/product/Wings-9-scaled.webp";
import coffee4 from "../../assets/product/Wings-10-scaled.webp";
import AOS from "aos";
import "aos/dist/aos.css";
// import { MdFavoriteBorder } from "react-icons/md";
// import { IoIosSearch } from "react-icons/io";
const Home_product = ({title}) => {
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
      product_detail: "/product-detail",
    },
    {
      id: 2,
      img1: coffee3,
      img2: coffee4,
      product_title: "Brazil – Diamond",
      product_desc: "Coffee",
      product_price: "42 – ر.ق140",
      product_detail: "/product-detail",
    },
    {
      id: 3,
      img1: coffee3,
      img2: coffee4,
      product_title: "Decaf Coffee",
      product_desc: "Coffee",
      product_price: "45 – ر.ق150",
      product_detail: "/product-detail",
    },
    {
      id: 4,
      img1: coffee1,
      img2: coffee2,
      product_title: "Drip Solo Bag",
      product_desc: "Drip Bags",
      product_price: "10 – ر.ق90",
      product_detail: "/product-detail",
    },
    {
      id: 5,
      img1: coffee3,
      img2: coffee4,
      product_title: "Ethiopia – Guji",
      product_desc: "Coffee",
      product_price: "45 –ق140",
      product_detail: "/product-detail",
    },
    {
      id: 6,
      img1: coffee3,
      img2: coffee4,
      product_title: "Honduras Coffee",
      product_desc: "Coffee",
      product_price: "45 –ق140",
      product_detail: "/product-detail",
    },
    {
      id: 7,
      img1: coffee3,
      img2: coffee4,
      product_title: "P51 Blend",
      product_desc: "Coffee",
      product_price: "45 –ق140",
      product_detail: "/product-detail",
    },
    {
      id: 8,
      img1: coffee3,
      img2: coffee4,
      product_title: "Panama Blend",
      product_desc: "Coffee",
      product_price: "45 –ق140",
      product_detail: "/product-detail",
    },
    {
      id: 9,
      img1: coffee3,
      img2: coffee4,
      product_title: "Peru Natural Coffee",
      product_desc: "Coffee",
      product_price: "45 –ق140",
      product_detail: "/product-detail",
    },
    {
      id: 10,
      img1: coffee3,
      img2: coffee4,
      product_title: "Peru Washed Coffee",
      product_desc: "Coffee",
      product_price: "45 –ق140",
      product_detail: "/product-detail",
    },
  ];
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
    
    });
  }, []);
  return (
    <div className="home-product-parent parent">
      <div className="home-product-cont cont">
        <h2>{title}</h2>
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
           
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            
            720: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when the viewport is 1024px or larger
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}


          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {products.map((item, index) => (
            <SwiperSlide key={item.id} >
              <Link
                to={item.product_detail}
                className="swiper-box"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="zoom-in"
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
                  {/* <Link to="#" className="favourite">
                  <MdFavoriteBorder />
                  </Link>
                  <Link to="#" className="btn-search">
                  <IoIosSearch />
                  </Link> */}
                </div>
                <div className="bottom-box" >
                  <div className="product-heading">{item.product_title}</div>
                  <p className="product-desc">{item.product_desc}</p>
                  <div className="product-price">{item.product_price}</div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home_product;
