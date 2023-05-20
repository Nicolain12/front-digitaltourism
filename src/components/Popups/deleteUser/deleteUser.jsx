import React, {useEffect} from 'react'
import "./deleteUser.css";
import { Link } from 'react-router-dom';

function deleteUser(props) {
    async function fetchApi(endpoint, config) {
        try {
            const responseApi = await fetch(endpoint, config)
            const jsonResponse = await responseApi.json()
            if (jsonResponse.info.status == 200) {
                sessionStorage.clear()
                localStorage.clear()
                window.location.href = '/'
            } else {
                return null
            }
        } catch (err) {
            return null
        }
    }
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    const closePopup = () => {
        props.setTrigger(false)
    }
    const deleteUser = () => {
        const permanentToken = localStorage.getItem('token');
        const token = sessionStorage.getItem('token');
        const headers = {}
        if (permanentToken) headers.authorization = permanentToken
        if (token) headers.authorization = token

        fetchApi(`http://localhost:3001/api/users//delete/${userLogged.id}`, {
            method: 'DELETE',
            headers,
        });
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
                        <Link className='loggout-btn' onClick={deleteUser}>Delete</Link>
                    </div>
                </div>
            </div>
        </div>) : ''
}
export default deleteUser