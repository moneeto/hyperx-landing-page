import React, { useState } from "react";
import { Model } from "../model/Model";
import "./Carrusel.scss";

export const Carrusel = () => {
  const listaDeModelos = [
    <Model img="https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_stinger_1_main.jpg?v=1662420667" title="Cloud Stinger 2"/>, // 0
    <Model img="https://www.invidcomputers.com/thumb/000000000041423942383414239--1-_800x800.png" title="Cloud Flight"/>, // 1
    <Model img="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/HyperX_Cloud_II_Pink_1_Main.jpg" title="Cloud II Pink"/>, // 2
    <Model img="https://www.precio-calidad.com.ar/wp-content/uploads/2020/12/HYPERX-CLOUDX-CHAT-XBOX-1.jpg" title="Cloud X ChatBox"/>, // 3
    <Model img="https://s3-sa-east-1.amazonaws.com/saasargentina/JOYUWDyFg2QEoARiTKOd/imagen" title="Cloud Stinger"/>, // 4
    <Model img="https://s3-sa-east-1.amazonaws.com/saasargentina/CAXXXr7wutUOysMz6otw/imagen " title="Cloud Flight Pro" />, // 5
    <Model img="https://m.media-amazon.com/images/I/61eLIOaniJL.jpg" title="Cloud X" />, // 6
    <Model img="https://storage.googleapis.com/file-computeandmore/images/daa1210d-677b-4130-808e-3f59a44bf2db.jpg" title="Cloud Earbuds" />, // 7
  ];

  const [cambiarLista, setCambiarLista] = useState(false)
  const [nuevaListaDeModelos, setNuevaListaDeModelos] = useState([
    listaDeModelos[0],
    listaDeModelos[1],
    listaDeModelos[2],
    listaDeModelos[3],
  ]);

  const moverElementos = (valor) => {
    let nuevoArray = [];
    for (let index = valor; index < (valor + 4); index++) {
      const element = listaDeModelos[index];
      nuevoArray.push(element);
    }
    setNuevaListaDeModelos(nuevoArray);
    setCambiarLista(!cambiarLista)
  };
  

  return (
    <div className="carrusel">
      <div className="arriba">
        <button
          className="cr-boton left-button"
          onClick={() => {
            moverElementos(cambiarLista ? 0 : 4)
          }}
        >
          ◄
        </button>
        <div className="image-list">{nuevaListaDeModelos}</div>
        <button
          className="cr-boton right-button"
          onClick={() => {
            moverElementos(cambiarLista ? 0 : 4)
          }}
        >
          ►
        </button>
      </div>

      <div className="abajo">
        <a className="puntos">•</a>
      </div>
    </div>
  );
};
