"use client";

export default function Modal({ book, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <button className="btn-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
