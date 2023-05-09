import React, { useRef, useEffect, useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    const [userPath, setUserPath] = useState('/choose')
    const refCreateProduct = useRef()
    const refCart = useRef()
    const refUser = useRef()
    const refDivLinks = useRef()

    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    useEffect(() => {
        if (!userLogged) {
            refCart.current.style.display = 'none'
            refCart.current.style.width = 0
            refDivLinks.current.style.justifyContent = 'center'
            refCreateProduct.current.style.display = 'none'
            refCreateProduct.current.style.width = 0
        } else {
            setUserPath(`/profile/${userLogged.id}`)
            if (!userLogged.admin) {
                refCreateProduct.current.style.display = 'none'
                refCreateProduct.current.style.width = 0
            }
        }
    }, []);
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
                        <li ref={refCreateProduct}><Link to='/createChoose'>Crear Producto</Link></li>
                    </ul>
                </div>

                <div ref={refDivLinks} className="div-links">
                    <div className="div-i-1">
                        <Link ref={refCart} to='/cart'><i className="fa-solid fa-plane-up"></i></Link>
                    </div>
                    <div ref={refUser} className="div-i-2">
                        <Link to={userPath}><i className="fa-solid fa-user"></i></Link>
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



