import React from "react";
import "./Category.scss";

export const Category = (props) => {
  return (
    <a className="category">
      <div className="category-img-div">
        <img 
        className="cat-img" 
        src={props.img} 
        alt={props.alt} 
        />
      </div>
      
      <h1 className="cat-name">{props.category}</h1>
    </a>
  );
};
