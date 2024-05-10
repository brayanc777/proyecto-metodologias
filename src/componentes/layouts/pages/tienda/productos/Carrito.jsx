import React from 'react';
import Products from './Products';

const Carrito = () => {
  // Define el estado y las funciones necesarias para el carrito aquí

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {/* Pasa las props necesarias al componente Carrito */}
      <Carrito
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        total={total}
        setTotal={setTotal}
        onAddProduct={onAddProduct} 
      />
    </div>
  );
};

export default Carrito;
