import React from "react";
import "./NewProducts.scss";
import MouseImg from "../../media/mousehyperx.png.png"; // vite no usa require, sino que hay que importar la imagen

export const NewProducts = () => {
  return (
    <section id="newproducts-section">
      <div className="np-izquierda">
        <div className="np-main-text">
          <h1 className="np-main-title">NEW PRODUCT</h1>
          <p className="np-subtitle">Cloud Stinger 2.</p>
        </div>
        <a
          href="https://www.google.com"
          target="_self"
          rel="noopener noreferrer"
        >
          <div className="background-img">
            <img
							className="np-img"
              src="https://cdn.shopify.com/s/files/1/0564/3612/9997/files/HyperX_Cloud_Stinger_2_Wireless_1_main_540x.png?v=1677182589"
              alt="Cloud Stinger 2"
            />
          </div>
        </a>
      </div>

      <div className="np-derecha">
        <div className="np-main-text">
          <p className="np-subtitle">Carbon mecha V2.</p>
					<h1 className="np-main-title">NEW PRODUCT</h1>
        </div>
        <a
          href="https://www.google.com"
          target="_self"
          rel="noopener noreferrer"
        >
          <div className="background-img">
            <img
							className="np-img"
              src={MouseImg}
              alt="Cloud Stinger 2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
