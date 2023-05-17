import React, { useEffect, useState, useRef } from "react";
import "./Product.scss";
import KeyboardBackground from "../../media/alloy-fps-02.jpg";

export const Product = () => {
  const [dosSegundos, setDosSegundos] = useState(false);
  const [widthChanged, setWidthChanged] = useState(false);

  const temporizador = () => {
    const timer = setTimeout(() => {
      setDosSegundos(true);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const [showComponent, setShowComponent] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {

    const handleWindowSize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
          setWidthChanged(true)
    }
  }

    function handleScroll() {
      if (componentRef.current) {
        const { top } = componentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setShowComponent(true);
          temporizador();
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="product-section" ref={componentRef}>
      {showComponent && (
        <div className="product-content">
          <div className="product-text-div box">
            <div className="hola">
              <div className={dosSegundos ? "nine content" : "nine non-display"}>
                <h1>
                  HYPERX ALLOY FPS
                  <span>Mechanical and confortable keyboard</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="product-img-div box-1">
            <div className="content-1">
              <img
                className="product-background-img"
                src={KeyboardBackground}
                alt="HyperX Alloy FPS background"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
