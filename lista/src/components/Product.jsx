import React from 'react';
import styles from "../app/page.module.css";

const Product = ({ product, index, deleteProduct }) => {
  return (
    <div className={styles.list}>
      <h3>{product.name}</h3>
      <p>Marca: {product.brand}</p>
      <p>Cantidad: {product.quantity}</p>
      <p>Precio: ${product.price}</p>
      <button className={styles.btn_delete} onClick={() => deleteProduct(index)}>X</button>
    </div>
  );
};

export default Product;