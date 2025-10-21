import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Rodriguez Store</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="/productos" className="navbar-link">Productos</a>
          </li>
          <li className="navbar-item">
            <a href="/categorias" className="navbar-link">Categorías</a>
          </li>
          <li className="navbar-item">
            <a href="/contacto" className="navbar-link">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;