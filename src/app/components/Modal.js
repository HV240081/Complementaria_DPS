import React from "react";

const Modal = ({ info, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{info.nombre}</h2>
        <img src={info.imagen} alt={info.nombre} className="modal-img" />
        <p>{info.descripcion}</p>
      </div>
    </div>
  );
};

export default Modal;
