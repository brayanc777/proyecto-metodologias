import React from 'react';
import Prendas from '../productos/Prendas';
import Header from '../Header';
import Footer from '../Footer';

const Accesorios = () => {
  const accesoriosPrendas = Prendas.filter(prenda => prenda.Tipo_prenda === "accesorio");

  return (
    <div>
      <Header />
      <h2>ACCESORIOS</h2>
      <section className="products-section">
        <ul className="products-list">
          {accesoriosPrendas.map((prenda, index) => (
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
      <Footer />
    </div>
  );
};

export default Accesorios;
