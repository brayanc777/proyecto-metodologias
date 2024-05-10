import React from 'react';
import Prendas from './Prendas';
import './Products.css';
import Header from '../Header';
import Footer from '../Footer';

const Products = () => {
  return (
    
    <div>
      <Header />
      <section className="products-section">
        <ul className="products-list">
          {Prendas.map((prenda, index) => (
            <li key={index} className="product-item">
              <div className="product-wrapper">
                <img src={prenda.imagen} alt={prenda.nombre} className="product-image" />
                <button className="buttonBag">A LA BOLSA</button>
              </div>
              <p className="product-name">{prenda.nombre}</p>
              <p className="product-size">{prenda.talla}</p>
              <p className="product-price">$ {prenda.precio}</p>
            </li>
          ))}
        </ul>
      </section>
      <Footer/>
    </div>
  );
};

export default Products;
