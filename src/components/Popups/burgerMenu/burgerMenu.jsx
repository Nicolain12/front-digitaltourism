import React, { useEffect } from 'react'
import "./burgerMenu.css";
import { Link } from 'react-router-dom';

function burguerMenu(props) {

  const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))

  const closePopup = () => {
    props.setTrigger(false)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closePopup()
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (props.trigger) ? (
    <div onClick={closePopup} className="bm-App-choose">
      <div className="bm-main-choose">
        <div className="bm-choose-main-div">
        <div className='close-popup'><i onClick={closePopup} className="fa-solid fa-xmark"></i></div>
          {userLogged ?
            <div className="bm-choose-options">
              <Link className='bm-link' onClick={closePopup} to="/flights">Flights</Link>
              <Link className='bm-link' onClick={closePopup} to="/hotels">Hotels</Link>
              <Link className='bm-link' onClick={closePopup} to="/packages">Packages</Link>
              {userLogged.admin?<Link className='bm-link' onClick={closePopup} to="">Create service</Link>:null}
              <Link className='bm-link' onClick={closePopup} to="/cart">My travels</Link>
              <Link className='bm-link' onClick={closePopup} to={props.userPath} >Profile</Link>
            </div> :
            <div className="bm-choose-options">
              <Link className='bm-link' onClick={closePopup} to="/loggin">Loggin</Link>
              <Link className='bm-link' onClick={closePopup} to="/register">Register</Link>
            </div>
          }
          
        </div>
      </div>
    </div>) : ''
}
export default burguerMenu