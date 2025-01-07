import React, { useState } from "react";
import "./product_detail.scss";
const Product_detail = () => {
  const [counter, setcounter] = useState(0);
  const [activeTab, setActiveTab] = useState("details");
  return (
    <div className="product-detail-parent parent">
      <div className="product-detail-cont cont">
        <div className="product-detail-top">
          {/* Product Images  */}
          <div className="product-detail-top-left">
            <div className="product-box-left">
              <div className="product-box-l-top"></div>
              <div className="product-box-l-top"></div>
            </div>
            <div className="product-box-right"></div>
          </div>

          {/* Product-all- DEtails */}
          <div className="product-detail-top-right">
            <h2 className="product-title">Lorem, ipsum dolor.</h2>
            <div className="line"></div>
            <h3 className="price">Rs. 140 - 580.</h3>
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
              fugit rem mollitia enim debitis ipsum praesentium consectetur et
              voluptatum!
            </p>
            <div className="line"></div>

            <label htmlFor="plan">Our Plan:</label>
            <select id="plan">
              <option value="">Choose a plan</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <div className="line"></div>
            <label htmlFor="plan">Our Plan:</label>
            <select id="plan">
              <option value="">Choose a plan</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <div className="line"></div>
            <div className="counter">
              <button onClick={() => setcounter(counter - 1)}>-</button>
              <span>{counter}</span>
              <button onClick={() => setcounter(counter + 1)}>+</button>

              <div className="btn">Add To Cart</div>
            </div>
          </div>
        </div>



        <div className="product-detail-bottom">
      <div className="top-top">
        <div
          className={`btn-box1 ${activeTab === "details" ? "active" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Product Details
        </div>
        <div
          className={`btn-box2 ${activeTab === "additional" ? "active" : ""}`}
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
          veniam laboriosam aut iure nemo sint, obcaecati earum. Neque iusto
          eos dolor atque velit est non aut inventore eius, esse eum porro,
          pariatur sint vitae impedit quasi. Ipsum animi dolore laboriosam
          tenetur aliquid excepturi magnam exercitationem quod corporis
          dolores, libero illo sunt autem corrupti recusandae minus porro
          iste, ea nemo harum quisquam incidunt eligendi accusamus earum!
          Praesentium cupiditate minima et vitae dolor minus, deleniti alias
          ad, tempore consequatur, esse molestiae quos quam repellat officiis
          magnam? Tempore, nesciunt officiis hic earum dignissimos quisquam
          vitae eligendi quos dolorum rem possimus nisi doloremque voluptas
          consequuntur autem eaque laborum fuga obcaecati vel? Autem beatae
          nemo cupiditate accusantium. Accusamus aperiam fugit velit, vitae
          corporis illo dolore temporibus harum reprehenderit non voluptatum
          veritatis iste. Expedita corrupti placeat sed.
        </p>
      )}
      {activeTab === "additional" && (
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem laborum, impedit excepturi hic assumenda quod officia
          architecto recusandae ratione ipsa!
        </p>
      )}
    </div>
      </div>
    </div>
  );
};

export default Product_detail;
