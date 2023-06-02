import React, { useEffect, useState, useRef } from 'react';
import './flightList.css';

function FlightList() {

    async function fetchApi(endpoint, config) {
        try {
            const response = await fetch(endpoint, config);
            const jsonResponse = await response.json();
            if (jsonResponse.info.status === 200) {
                return jsonResponse

            }
            if (jsonResponse.info.status === 400) {
                console.log(jsonResponse);
            }
        } catch (err) {
            console.error(err);
        }
    }
    function objToArray (obj) {
        const imagesToArray = []
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    imagesToArray.push(obj[key])
                }
        }
        return imagesToArray
    }
    function ImageCarousel({ imgArray, id }) {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
            }, 3000);
    
            return () => clearInterval(interval);
        }, [imgArray]);
    
        return <img className='img-flight-list' src={`http://localhost:3001/images/flights/product_${id}/${imgArray[currentImageIndex]}`} alt="" />;
    }

    const [flightsData, setFlightsData] = useState([])

const refCartPlane = useRef()
    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const flightData = await fetchApi(`http://localhost:3001/api/products/flights`, {
                    method: 'GET',
                    headers,
                });
                setFlightsData(flightData.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

const articleClick = (id)=>{
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    if(userLogged) window.location.href = `/flightsDetail/${id}`
    if(!userLogged) window.location.href = `/loggin`
}

const planeButton = () => {

}
    return flightsData.length == 0 ? (<h2>Loading...</h2>) : (
        <div className="App-flight-list">
            <main>
                <div className="main-flights">


                {flightsData.map((flight) => (
                        <article onClick={() => articleClick(flight.id)} className="article-flight" key={flight.id}>
                            <div className="img-flight">
                            <ImageCarousel imgArray={objToArray(JSON.parse(flight.image))} id={flight.user_id}/>
                            </div>
                            <div className="info-flight-div">
                                <div className="info-flight-div-1">
                                    <h3>{flight.departure}</h3>
                                    <h3>------</h3>
                                    <h3>{flight.reach}</h3>
                                </div>
                                <div className="info-flight-div-2">
                                    <div className="departure-info">
                                        <div>
                                            <h4>Departure:</h4>
                                            <p className="date">{flight.departure_date}</p>
                                            <section className="line-f"></section>
                                            <p className="hour">{flight.departure_hour}</p>
                                        </div>
                                        <section className="date-f"></section>
                                        <div>
                                            <h4>Return:</h4>
                                            <p className="date">{flight.reach_date}</p>
                                            <section className="line-f"></section>
                                            <p className="hour">{flight.reach_hour}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="cabin-type">
                                    <h4>Cabin type:</h4>
                                    <p className="cabin">{flight.cabin}</p>
                                </div>
                                <div className="cabin-type">
                                    <h4>Description:</h4>
                                    <p className="cabin">{flight.description}</p>
                                </div>

                                <div className="info-flight-div-5">
                                    <p>$ {flight.price}</p>
                                    <i className="fa-solid fa-plane-up add-cart-flight"></i>
                                    {/* <i className='fa-solid fa-plane-circle-check added-cart-flight'></i> */}
                                </div>
                            </div>
                        </article>
                    ))}

                </div>

            </main>

        </div>
    );
}

export default FlightList;
