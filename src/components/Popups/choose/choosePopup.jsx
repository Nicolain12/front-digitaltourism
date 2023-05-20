import React, {useEffect} from 'react'
import "./choosePopup.css";
import { Link } from 'react-router-dom';

function Popup(props) {


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
        <div onClick={closePopup} className="App-choose">
            <div className="main-choose">
                <div className="choose-main-div">
                    <div className='close-popup'><i onClick={closePopup} className="fa-solid fa-xmark"></i></div>
                    <div className="choose-title">
                        <h3>Choose an option</h3>
                    </div>
                    <div className="choose-options">
                        <Link onClick={closePopup} to="/register">Register</Link>
                        <Link onClick={closePopup} to="/loggin">Login</Link>
                    </div>
                </div>
            </div>
        </div>) : ''
}
export default Popup