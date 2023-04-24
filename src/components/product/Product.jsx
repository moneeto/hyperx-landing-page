import React, { useState } from "react";
import "./Product.scss";
import KeyboardImg from "../../media/hyper-alloy-fps.png";
import KeyboardBackground from "../../media/alloy-fps-02.jpg";

export const Product = () => {

  const [shown, setShown] = useState(false)

  return (
    <section id="product-section">
        <div className="product-text-div">
          <h1 className="product-title">HyperX Alloy FPS</h1>
          <p className="product-p">
            Confortable and confident mechanical keyboard
          </p>
        </div>
        <div className="product-img-div" onMouseEnter={() => {setShown(true)}} onMouseLeave={() => {setShown(false)}}>
          <img
            className="product-background-img"
            src={KeyboardBackground}
            alt="HyperX Alloy FPS background"
          />
          <a
            href="https://www.youtube.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className="product-img"
              src={KeyboardImg}
              alt="HyperX Alloy FPS"
            />{shown ? <p className="hover-p">HyperX Alloy FPS</p> : null}
          </a>
        </div>
    </section>
  );
};
