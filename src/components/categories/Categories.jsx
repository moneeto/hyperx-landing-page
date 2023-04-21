import React from "react";
import { Category } from "./category/Category.jsx";
import "./Categories.scss";
import Headphones from "../../media/auriculares.png"
import Microphone from "../../media/hyperx-microfono.png"
import Mouse from "../../media/hyperx-mouse.png"

export const Categories = (props) => {
  return (
    <section id="categories-section">
      <div className="categories-content">
        <h1 className="cat-main-title">Principales categorías</h1>
        <div className="categories-list">
          <Category
          category="Headphones"
          img={Headphones}
          alt={"HyperX Headphones"}
           />
          <Category
          category="Microphone"
          img={Microphone}
          alt={"HyperX QuadCast microphone"}
           />
          <Category
          category="Mouse"
          img={Mouse}
          alt={"HyperX Mouse"}
           />
        </div>
      </div>
    </section>
  );
};
