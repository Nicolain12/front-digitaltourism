import React, {useEffect} from 'react'
import "./isPack.css";
import { Link } from 'react-router-dom';

function isPack(props) {
    const closePopup = () => {
        props.setTrigger(false)
    }

    const toPackage = () => {
        window.location.href = `/packageDetail/${props.packId}`
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
                        <h3>This product is linked to a package, to continue click below</h3>
                    </div>
                    <div className="choose-options-lo">
                        <Link className='loggout-cancel-btn' onClick={toPackage}>Package</Link>
                    </div>
                </div>
            </div>
        </div>) : ''
}
export default isPack