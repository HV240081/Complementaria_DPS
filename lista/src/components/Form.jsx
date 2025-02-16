"use client";

import React, { useState, useEffect } from 'react';
import Product from './Product';
import styles from "../app/page.module.css";

const Form = () => {
  const [product, setProduct] = useState({ name: '', brand: '', quantity: 0, price: 0 });
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleClick = () => {
    if (!product.name || !product.brand || product.quantity <= 0 || product.price <= 0) {
      alert('Todos los campos son obligatorios y deben ser válidos.');
      return;
    }
    setProducts([...products, product]);
    setProduct({ name: '', brand: '', quantity: 0, price: 0 });
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  useEffect(() => {
    const newTotal = products.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
    setTotal(newTotal);
  }, [products]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Nombre del Producto</label><br />
        <input className={styles.form_input} type="text" name='name' value={product.name} onChange={handleChange} /><br />
        <label>Marca</label><br />
        <input className={styles.form_input} type="text" name='brand' value={product.brand} onChange={handleChange} /><br />
        <label>Cantidad</label><br />
        <input className={styles.form_input} type="number" name='quantity' value={product.quantity} onChange={handleChange} /><br />
        <label>Precio</label><br />
        <input className={styles.form_input} type="number" name='price' value={product.price} onChange={handleChange} /><br />
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
      </form>
      <h2>Total: ${total.toFixed(2)}</h2>
      {
        products.map((value, index) => (
          <Product 
            product={value} 
            key={index} 
            index={index} 
            deleteProduct={deleteProduct} 
          />
        ))
      }
    </>
  );
};

export default Form