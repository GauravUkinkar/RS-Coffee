import React, { useState } from "react";
import "./ourcart.scss";
import img1 from "../../assets/gallery/coffee2.webp";
import { IoClose } from "react-icons/io5";

const Our_cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: img1, details: "Product 1 details", quantity: 2, price: 210 },
    { id: 2, image: img1, details: "Product 2 details", quantity: 1, price: 700 },
    { id: 3, image: img1, details: "Product 3 details", quantity: 4, price: 500 },
    { id: 4, image: img1, details: "Product 4 details", quantity: 2, price: 500 },
    { id: 5, image: img1, details: "Product 5 details", quantity: 3, price: 400 },
    { id: 6, image: img1, details: "Product 6 details", quantity: 1, price: 200 },
    { id: 7, image: img1, details: "Product 7 details", quantity: 2, price: 100 },
    { id: 8, image: img1, details: "Product 8 details", quantity: 1, price: 300 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = cartItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="ourcart-parent parent bg-img-cover">
      <div className="ourcart-cont cont">
        <div className="top-cart">
        <table className="product-table">
          <thead>
            {/* <tr>
              <th>Product Image</th>
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr> */}
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt="Product"
                    className="product-image"
                  />
                </td>
                <td>{item.details}</td>
                <td>
                  <div className="counter">
                    <button
                      className="counter-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="counter-value">{item.quantity}</span>
                    <button
                      className="counter-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <button className="remove-btn" aria-label="Remove item">
                    <IoClose />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      <div className="bottom-cart">
 {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

       
      </div>
    </div>
  );
};

export default Our_cart;
