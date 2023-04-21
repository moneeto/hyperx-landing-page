import React from "react";
import "./Models.scss";
import { Carrusel } from "./carrusel/Carrusel";

export const Models = () => {
  
  return (
    <section id="models-section">
      <div className="models-div">
        {/* <h1></h1>
        <p>
          
        </p> */}
        <div className="model-list">
          <div className="md-text-div">
            <h1 className="md-title-text">WE'RE ALL GAMERS</h1>
            <p className="md-p-text">Consola o PC, casual o profesional, no importa tu credo, color o cultura; todos somos jugadores y el equipo HyperX siempre está listo para jugar</p>
          </div>
          <Carrusel />
        </div>
      </div>
    </section>
  );
};
