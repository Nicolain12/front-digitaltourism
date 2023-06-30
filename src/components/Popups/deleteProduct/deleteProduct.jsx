import React, { useEffect } from 'react'
import "./deleteProduct.css";
import { Link } from 'react-router-dom';

function deleteProduct(props) {
    async function fetchApi(endpoint, config) {
        try {
            const responseApi = await fetch(endpoint, config)
            const jsonResponse = await responseApi.json()
            if (jsonResponse.info.status == 200) {
                return jsonResponse
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
    console.log();
    const deleteProductFunction = () => {
        const permanentToken = localStorage.getItem('token');
        const token = sessionStorage.getItem('token');
        const headers = {}
        if (permanentToken) headers.authorization = permanentToken
        if (token) headers.authorization = token

        if (props.product === 'flight') {
            async function deleteProduct() {
                const fetchSend = await fetchApi(`http://localhost:3001/api/products/delete/flight/${props.id}`, {
                    method: 'DELETE',
                    headers,
                });
                if(fetchSend.info.status === 200) window.location.href = '/flights'
                if(fetchSend.info.status === 400) console.log(fetchSend);
            }
            deleteProduct()
        }
        if (props.product === 'hotel') {
            async function deleteProduct() {
                const fetchSend = await fetchApi(`http://localhost:3001/api/products/delete/hotel/${props.id}`, {
                    method: 'DELETE',
                    headers,
                });
                if(fetchSend.info.status === 200) window.location.href = '/hotels'
                if(fetchSend.info.status === 400) console.log(fetchSend);
            }
            deleteProduct()
        }
        if (props.product === 'package') {
            async function deleteProduct() {
                const fetchSend = await fetchApi(`http://localhost:3001/api/products/delete/package/${props.id}`, {
                    method: 'DELETE',
                    headers,
                });
                if(fetchSend.info.status === 200) window.location.href = '/packages'
                if(fetchSend.info.status === 400) console.log(fetchSend);
            }
            deleteProduct()
        }


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
                        <Link className='loggout-btn' onClick={deleteProductFunction}>Delete</Link>
                    </div>
                </div>
            </div>
        </div>) : ''
}
export default deleteProduct