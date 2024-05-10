import React from 'react';
import Prendas from '../productos/Prendas';
import Header from '../Header';
import Footer from '../Footer';

const Esprint = () => {
  const esprintPrendas = Prendas.filter(prenda => prenda.marca === "Esprint");

  return (
    <div>
      <Header />
      <h2>ESPRINT</h2>
      <section className="products-section">
        <ul className="products-list">
          {esprintPrendas.map((prenda, index) => (
            <li key={index} className="product-item">
              <div className="product-wrapper">
                <img src={prenda.imagen} alt={Prendas.nombre} className="product-image" />
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

export default Esprint;

