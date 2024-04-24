import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div>
                    <button id="btnCategorias">&#9776;</button>
                </div>
                <ul>
                    <li><Link to="/hombre">Hombre</Link></li>
                    <li><Link to="/mujer">Mujer</Link></li>
                    <li><Link to="/accesorios">Accesorios</Link></li>
                </ul>
            </nav>
            <h1><Link to="/">LOGIA</Link></h1>
            <section>
                <Link to="/buscar"><img src="https://icons8.com/icon/83218/search" alt="" /></Link>
                <Link to="/login"><img src="../img/icons8-user-64.png" alt="" /></Link>
                <Link to="/carrito"><img src="../img/icons8-paper-bag-50.png" alt="" /></Link>
            </section>
        </header>
        
    );
};

export default Header;
