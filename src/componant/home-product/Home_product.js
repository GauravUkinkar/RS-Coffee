import React from "react";
import "./home-product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import Swiper Pagination styles
import { Pagination } from "swiper/modules"; // Import Pagination module
import { Link } from "react-router-dom";

const Home_product = () => {
  return (
    <div className="home-product-parent parent">
      <div className="home-product-cont cont">
        <Swiper
          slidesPerView={3} 
          spaceBetween={10} // Space between slides
          pagination={{
            clickable: true, // Enable clickable pagination
          }}
          modules={[Pagination]} // Load the Pagination module
          className="mySwiper"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="swiper-box">
              <div className="top-box ">
                <div className="coffee-image bg-img-contain"></div>
                <Link className="btn-n">Add To Cart</Link>
              </div>
              <div className="bottom-box">
                <div className="product-heading">Coffee One</div>
                <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus.</p>
                <div className="product-price">Rs. 280.00</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">Slide Content 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">Slide Content 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">Slide Content 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">Slide Content 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">Slide Content 6</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home_product;
