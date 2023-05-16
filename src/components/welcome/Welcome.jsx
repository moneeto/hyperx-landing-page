import React, { useState, useEffect } from "react";
import Logo from "../../media/auriculares.png";
import "./Welcome.scss";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Welcome = () => {
  const Carrusel = [
    "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpg/2022/03/26572.jpg",
    "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/QTB7IBPLSNBHPJGGJZLAAR6BAQ.jpg",
    "https://gnova.com.ar/wp-content/uploads/2022/10/The-World-Championship-in-League-of-Legends-in-North-America.jpg",
  ];

  const [segundos, setSegundos] = useState(0);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((segundos) => segundos + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (segundos % 6 === 0 && indice <= 2) {
      setIndice((indice) => indice + 1);
    } else if (indice == 2) {
      setIndice(0);
    }
  }, [segundos]);

  return (
    <section id="welcome-section">
      <div className="w-izquierda">
        <div className="welcome-main-text">
          <h1 className="welcome-main-title">When the sun shines...</h1>
          <p>It's time to improve yourself.</p>
        </div>

        <Link to={"/about"}>
          <label className="vm-label">
            <AiFillCaretRight />
            <input
              type="button"
              className="vm-button"
              value="View More"
            ></input>
          </label>
        </Link>
      </div>

      <div className="w-derecha">
        <div className="w-image-div">
          <img
            className="h-img"
            src={Carrusel[indice]}
            alt="HyperX Headphones"
          />
        </div>
      </div>
    </section>
  );
};
