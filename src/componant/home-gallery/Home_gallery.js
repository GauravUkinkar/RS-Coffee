import React, { useState } from "react";
import "./home-gallery.scss";
import img1 from "../../assets/gallery/coffee.webp";
import img2 from "../../assets/gallery/coffee1.webp";
import img3 from "../../assets/gallery/coffee2.webp";
import img4 from "../../assets/gallery/coffee3.webp";
import img5 from "../../assets/gallery/coffee4.webp";
import img6 from "../../assets/gallery/coffee6.webp";
import img7 from "../../assets/gallery/coffee7.webp";
import img8 from "../../assets/gallery/coffee8.webp";
import { IoClose } from "react-icons/io5";
const Home_gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home-gallery-parent parent bg-img-cover">
      <div className="home-gallery-cont cont">
        <h2>Our Gallery</h2>
      </div>
      <div className="images-box">
        {images.map((image, index) => (
          <div
            key={index}
            className="new-box bg-img-cover"
            style={{
              backgroundImage: `url(${image})`,
            }}
            onClick={() => openLightbox(image)}
          >
            <div className="overlay"></div>
            <div className="icon">+</div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected" />
            <span className="close-btn" onClick={closeLightbox}>
              <IoClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home_gallery;
