"use client";

import { useState } from "react";
import Modal from "../app/modal"; // Importamos el componente Modal

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const onDeleteProduct = (product) => {
    const confirmDelete = window.confirm(`¿Seguro que quieres eliminar "${product.title}" del carrito?`);
    if (confirmDelete) {
      const results = allProducts.filter((item) => item.id !== product.id);
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
      setAllProducts(results);
    }
  };

  const onCleanCart = () => {
    const confirmClean = window.confirm("¿Seguro que quieres vaciar el carrito de compras?");
    if (confirmClean) {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);
    }
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  return (
    <header>
      <h1>Tienda de Libros</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    {/* Imagen del producto con evento para abrir modal */}
                    <img
                      src={product.urlImage}
                      alt={product.title}
                      className="product-image-cart"
                      style={{
                        width: "50px",
                        height: "75px",
                        objectFit: "cover",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => openModal(product)}
                    />
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">{product.quantity}</span>
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">${product.price}</span>
                    </div>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                      style={{ width: "20px", height: "20px", cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>

      {/* Modal para mostrar la información del libro */}
      {modalOpen && selectedBook && (
        <Modal book={selectedBook} onClose={() => setModalOpen(false)} />
      )}
    </header>
  );
};
