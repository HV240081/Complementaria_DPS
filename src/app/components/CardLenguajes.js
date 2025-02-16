import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const CardLenguajes = () => {
  const [lenguajes, setLenguajes] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);

  useEffect(() => {
    fetch("/data/lenguajes.json")
      .then((response) => response.json())
      .then((data) => setLenguajes(data));
  }, []);

  return (
    <div className="grid-container">
      {lenguajes.map((lenguaje, index) => (
        <div key={index} className="card">
          <img src={lenguaje.imagen} alt={lenguaje.nombre} className="card-img" />
          <h3>{lenguaje.nombre}</h3>
          <button class="info" onClick={() => setModalInfo(lenguaje)}>Ver más</button>
        </div>
      ))}
      {modalInfo && <Modal info={modalInfo} onClose={() => setModalInfo(null)} />}
    </div>
  );
};

export default CardLenguajes;
