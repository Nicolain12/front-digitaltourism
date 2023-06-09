import React, { useRef, useEffect, useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import Popup from '../Popups/Choose/choosePopup';
import PopupCreate from '../Popups/createChoose/createChoose';
import BurguerMenu from '../Popups/burgerMenu/burgerMenu';

function Header() {
    const [userPath, setUserPath] = useState(``)
    const [buttonPopup, setButtonPopup] = useState(false)
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [profileAllowed, setProfileAllowed] = useState(false)
    const refCreateProduct = useRef()
    const refCart = useRef()
    const refDivLinks = useRef()
    const [createPopup, setCreatePopup] = useState(false)



    useEffect(() => {
        const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
        if (!userLogged) {
            setProfileAllowed(false)
            refCart.current.style.display = 'none'
            refCart.current.style.width = 0
            refDivLinks.current.style.justifyContent = 'center'
            refCreateProduct.current.style.display = 'none'
            refCreateProduct.current.style.width = 0
        } else {
            setUserPath(`/profile/${userLogged.id}`)
            setProfileAllowed(true)
            if (!userLogged.admin) {
                refCreateProduct.current.style.display = 'none'
                refCreateProduct.current.style.width = 0
            }
        }
    }, [])

    const popupOpen = () => {
        if (profileAllowed) {
            window.location.href = userPath
        } else {
            if (buttonPopup) {
                setButtonPopup(false)
            } else {
                setButtonPopup(true)
            }
        }
    }
    const createPopupButton = () => {
        setCreatePopup(true)
    }
    const burgerMenuFunction = () => {
        if(!burgerMenu)setBurgerMenu(true)
        if(burgerMenu)setBurgerMenu(false)
    }

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
                        <li><Link to='/flights'>Flights</Link></li>
                        <li><Link to='/hotels'>Hotels</Link></li>
                        <li><Link to='/packages'>Packages</Link></li>
                        <li ref={refCreateProduct}><Link onClick={createPopupButton}>Create Service</Link></li>
                    </ul>
                </div>
                <PopupCreate trigger={createPopup} setTrigger={setCreatePopup}></PopupCreate>
                <div ref={refDivLinks} className="div-links">
                    <div className="div-i-1">
                        <Link ref={refCart} to='/cart'><i className="fa-solid fa-plane-up"></i></Link>
                    </div>
                    <div className="div-i-2">
                        <button onClick={popupOpen}><i className="fa-solid fa-user"></i></button>
                    </div>
                </div>
                    <div className="burger-menu">
                        <i onClick={burgerMenuFunction} className="fa-solid fa-bars"></i>
                    </div>
            </header>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
            <BurguerMenu trigger={burgerMenu} userPath={userPath} setTrigger={setBurgerMenu}></BurguerMenu>
        </div>
    );
}

export default Header;



