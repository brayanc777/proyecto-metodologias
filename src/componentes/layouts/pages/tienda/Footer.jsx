import React from 'react';
import './Header.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>Cambios fáciles</h3>
                <p>Cambia o devuelve sin complicaciones</p>
            </div>
            <div className="footer-column">
                <h3>Compra segura</h3>
                <p>Compra 100% protegida</p>
            </div>
            <div className="footer-column">
                <h3>Múltiples medios de pago</h3>
                <p>Elige tus favoritos y paga como prefieras</p>
            </div>
            <div className="footer-column">
                <h3>Tienda abierta 24/7</h3>
                <p>Todos los días a cualquier hora</p>
            </div>
            <div className="footer-column newsletter">
                <h3>Stay tuned</h3>
                <p>Sé el primero en enterarte de nuestras novedades y promociones suscribiéndote ahora a nuestro newsletter</p>
                <button>SUSCRIBIRSE</button>
            </div>
            <div className="footer-info">
                <p>COMODÍN S.A.S / NIT:800069933-6 / Calle 14 # 52 A 372 Medellín, Colombia</p>
            </div>
        </footer>
    );
};

export default Footer;
