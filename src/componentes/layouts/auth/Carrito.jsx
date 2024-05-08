import React from "react";

const Product = ({ product, onAddProduct }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddProduct(product)}>Add to Cart</button>
    </div>
  );
};

const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, { ...product, quantity: 1 }]);
  };

  return (
    <div>
      {allProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddProduct={onAddProduct}
        />
      ))}
    </div>
  );
};

const Carrito = () => {
  // Definir el estado necesario para el carrito aquí
  const [allProducts, setAllProducts] = React.useState([]);
  const [countProducts, setCountProducts] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      {/* Renderizar el componente ProductList y pasar las props necesarias */}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
};

export default Carrito;
