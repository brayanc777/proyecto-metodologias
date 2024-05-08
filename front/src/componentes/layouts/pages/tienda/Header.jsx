import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (<body>
    <header className="header">
      <nav>
        <button className="btnCategorias" onClick={toggleMenu}>&#9776;</button>
        <aside ref={menuRef} className={`menuMarcas ${menuOpen ? "open" : ""}`}>
          <h2>MARCAS</h2>
          <div className="marcas">
            <Link to="">AMERICAN BRANDS</Link>
            <Link to="">ESPRINT</Link>
            <Link to="">RIFLE</Link>
            <Link to="">MNG</Link>
          </div>
        </aside>
      </nav>
      <h1>
        <h1>LOGIA</h1>
      </h1>
      <section>
        <Link to="/buscar"><img src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" /></Link>
        <Link to="/"><img src="https://img.icons8.com/fluency-systems-filled/48/user.png" alt="user" /></Link>
        <Link to="/carrito"><img src="https://img.icons8.com/ios-filled/50/shopping-bag.png" alt="shopping-bag" /></Link>
      </section>
    </header>
    <section className="banner">
    <img src="https://webnovant.com/media/news/1a35a6157554541821388ff45639cb64.jpg" alt="" />
    </section>
  </body>

  );
};

export default Header;
