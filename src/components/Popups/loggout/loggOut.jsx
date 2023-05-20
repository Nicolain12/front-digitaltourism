import React, {useEffect} from 'react'
import "./loggOut.css";
import { Link } from 'react-router-dom';

function loggOut(props) {


    const closePopup = () => {
        props.setTrigger(false)
    }
    const closeSessions = () => {
        sessionStorage.clear()
        localStorage.clear()
        window.location.href = '/'
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
        <div onClick={closePopup} className="App-choose-lo">
            <div className='main-choose-lo'>
                <div className="choose-main-div-lo">
                    <div className='close-popup-lo'><i onClick={closePopup} className="fa-solid fa-xmark"></i></div>
                    <div className="choose-title-lo">
                        <h3>The session active will be close</h3>
                    </div>
                    <div className="choose-options-lo">
                        <Link className='loggout-cancel-btn' onClick={closePopup}>Cancel</Link>
                        <Link className='loggout-btn' onClick={closeSessions}>Logg Out</Link>
                    </div>
                </div>
            </div>
        </div>) : ''
}
export default loggOut