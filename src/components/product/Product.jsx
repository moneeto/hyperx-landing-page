import React from "react";
import "./Product.scss";
import KeyboardImg from "../../media/hyper-alloy-fps.png";
import KeyboardBackground from "../../media/alloy-fps-02.jpg";

export const Product = () => {
  return (
    <section id="product-section">
      <div className="product-img-div">
        <img
          className="product-background-img"
          src={KeyboardBackground}
          alt="HyperX Alloy FPS background"
        />
        <img className="product-img" src={KeyboardImg} alt="HyperX Alloy FPS" />
      </div>
      <div className="product-text-div">
        <h1 className="product-title">HyperX Alloy FPS</h1>
        <p className="product-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          repellendus ratione voluptatem dignissimos non quo amet sequi officia,
          aspernatur, ea, dolores enim officiis expedita placeat nemo reiciendis
          tenetur totam ipsum!
        </p>
      </div>
    </section>
  );
};
