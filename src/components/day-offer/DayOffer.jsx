import React from "react";
import "./DayOffer.scss";
import { AiOutlineShoppingCart, AiFillTags } from "react-icons/ai";
import { CountdownTimer } from "../../hooks/timer/CountdownTimer.jsx";

export const DayOffer = (props) => {
  const targetDate = 1 * 24 * 60 * 60 * 1000;
  const targetDateInMs = new Date().getTime();

  const dateTime = targetDateInMs + targetDate;

  return (
    <section id={props.id}>
      <div className="dOffer-izquierda">
        <div className="dOffer-img-div">
          <img className="dOffer-img" src={props.img} alt={props.title} />
        </div>
      </div>

      <div className="dOffer-derecha" style={props.fontColor}>
        <div className="dOffer-arriba">
          <div className="timer">
            <h1 className="dOffer-title">Daily Offer #{props.number}</h1>
            <CountdownTimer targetDate={dateTime} />
          </div>
        </div>

        <div className="dOffer-abajo">
          <div className="dOffer-text-div">
            <h1 className="dOffer-title">{props.title}</h1>
            <p className="dOffer-p">{props.paragraph}</p>
          </div>

          <div className="dOffer-price">
            <h1 className="price">{props.price}</h1>
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
      </div>
    </section>
  );
};
