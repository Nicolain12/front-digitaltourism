import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="App-header">
            <header className="App-header">
                <div className="div-logo">
                    <Link to='/'>
                        <img className="logo-img" src="/images/partials/logo.jpeg" alt="Imagen Logo"></img>
                    </Link>
                </div>
                <div className="div-pages">
                    <ul type="none">
                        <li><Link to='/flights'>Vuelos</Link></li>
                        <li><Link to='/hotels'>Hoteles</Link></li>
                        <li><Link to='/packages'>Paquetes</Link></li>
                        <li><Link to='/createChoose'>Crear Producto</Link></li>
                    </ul>
                </div>

                <div className="div-links">
                    <div className="div-i-1">
                        <Link to='/cart'><i className="fa-solid fa-plane-up"></i></Link>
                    </div>
                    <div className="div-i-2">
                        <Link to='/choose '><i className="fa-solid fa-user"></i></Link>
                    </div>
                    <div className="burger-menu">
                        <Link to='#'><i className="fas fa-bars"></i></Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;



