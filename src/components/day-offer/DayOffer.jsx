import React from "react";
import "./DayOffer.scss"
import {AiOutlineShoppingCart, AiFillTags} from "react-icons/ai"

export const DayOffer = () => {
  return (
    <section id="dayOffer1-section">  
      <div className="dOffer-izquierda">
        <div className="dOffer-img-div">
          <img className="dOffer-img" src="https://o.remove.bg/downloads/328d0da3-2d5e-4206-9067-421a1a394a56/1547144217_big_hxmc004b-removebg-preview.png" alt="" />
        </div>
      </div>
      <div className="dOffer-derecha">
        <div className="dOffer-text-div">
          <h1 className="dOffer-title">HyperX Pulsefire</h1>
          <p className="dOffer-p">An incredible and confortable mouse ready to shoot all to your enemies</p>
        </div>
        <div className="dOffer-button-div">
          <a className="add-to-cart">
            <AiOutlineShoppingCart />
            <span> Add to cart</span>
          </a>
          <a className="buy-now">
            <AiFillTags />
            <span> Buy Now!</span>
          </a>
        </div>
      </div>
    </section>
  );
};
