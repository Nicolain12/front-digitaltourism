import React, {useEffect} from 'react'
import "./createChoose.css";
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
                        <Link onClick={closePopup} to="/flightsCreate">Flight</Link>
                        <Link onClick={closePopup} to="/hotelCreate">Hotels</Link>
                        <Link onClick={closePopup} to="/packageCreate">Package</Link>
                    </div>
                </div>
            </div>
        </div>) : ''
}
export default Popup