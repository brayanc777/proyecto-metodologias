import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <nav>
          <button id="btnCategorias">&#9776;</button>
      </nav>
      <h1>
        <Link to="/">LOGIA</Link>
      </h1>
      <section>
        <Link to="/buscar"></Link>
        <Link to="/"><img src="https://img.icons8.com/windows/32/gender-neutral-user.png" alt="gender-neutral-user"/></Link>
        <Link to="/carrito"></Link>
      </section>
      
    </header>
    
  );
};

export default Header;
