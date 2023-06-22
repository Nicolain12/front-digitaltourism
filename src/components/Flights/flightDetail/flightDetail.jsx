import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import './flightDetail.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Slider from '../../slider/slider';
import DeleteProduct from '../../Popups/deleteProduct/deleteProduct';
import IsPack from '../../Popups/isPack/isPack';

function FlightDetail() {
    const { id } = useParams();
    const [buttonPopup, setButtonPopup] = useState(false)
    const [packPopup, setPackPopup] = useState(false)
    const [packId, setPackId] = useState('')
    const [flight, setFlight] = useState({});
    const [flightImgs, setFlightImgs] = useState([]);
    const [isPack, setIsPack] = useState(false);
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
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))

    const refSliderDiv = useRef()
    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const flightData = await fetchApi(`http://localhost:3001/api/products/flight/${id}`, {
                    method: 'GET',
                    headers,
                });
                const parsedFlightData = {
                    ...flightData.data,
                };
                parsedFlightData.image = JSON.parse(flightData.data.image)
                const imagesToPush = []
                if (typeof parsedFlightData.image == 'object'); {
                    for (let key in parsedFlightData.image) {
                        if (parsedFlightData.image.hasOwnProperty(key)) {
                            imagesToPush.push(parsedFlightData.image[key])
                        }
                    }
                }
                setFlightImgs(imagesToPush)
                setFlight(parsedFlightData);
                if (flightData.info.packId) {
                    setIsPack(true)
                    setPackId(flightData.info.packId)
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    const deleteButton = () => {
        if (isPack) {
            setPackPopup(true)
        } else {
            setButtonPopup(true)
        }
    }

    const toEditFlight = () => {
        if (isPack) {
            setPackPopup(true)
        } else {
            window.location.href = `/flightsUpdate/${flight.id}`
        }
    }
    return (
        <div className="App-flightDetail">
            <main className="fd-main-detail-flight">
                <section className="fd-section-info">

                    <div ref={refSliderDiv} className="fd-carousel_detail-flight">
                        {flightImgs.length == 0 ? <h3>Loading...</h3> : <Slider type={'flight'} imgs={flightImgs} id={flight.user_id}></Slider>}
                    </div>

                    <div className="fd-detail-flight-info">
                        <div className="fd-detail-flight-info-title">
                            <h3>Trip information</h3>
                        </div>
                        <div className="fd-detail-flight-info-maininfo">
                            <div className="fd-detail-flight-info-header">
                                <h3>{flight.departure} ----- {flight.reach}</h3>
                            </div>
                            <div className="fd-detail-flight-info-data">
                                <div className="fd-detail-flight-departure">
                                    <h4 className="fd-detail-flight-h4">Departure Day Info:</h4>
                                    <p className="fd-detail-flight-date">{flight.departure_date}</p>
                                    <p className="fd-detail-flight-hour">{flight.departure_hour}</p>
                                </div>
                                <div className="fd-detail-flight-reach">
                                    <h4 className="fd-detail-flight-h4">Return Day Info:</h4>
                                    <p className="fd-detail-flight-date">{flight.reach_date}</p>
                                    <p className="fd-detail-flight-hour">{flight.reach_hour}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fd-detail-flight-info">
                        <div className="fd-detail-flight-info-title">
                            <h3>Airline information</h3>
                        </div>

                        <div className="fd-detail-flight-info-maininfo">
                            <div className="fd-detail-flight-info-header">
                                <h3>Airline: {flight.airline}</h3>
                            </div>
                            <div className="fd-detail-flight-info-data">
                                <div className="fd-detail-flight-departure">
                                    <h5>Cabina: {flight.cabin}</h5>
                                    <div className="fd-detail-flight-description">
                                        <h5>Description</h5>
                                        <p>{flight.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                {userLogged.id == flight.user_id ? <section className="fd-detail-flight-button-section">
                    <button onClick={toEditFlight} className="fd-detail-flight-button btn-df-edit">Edit</button>
                    <button onClick={deleteButton} className="fd-detail-flight-button btn-df-delete">Delete</button>
                </section> : <section className="fd-detail-flight-button-section">
                    <div className="fd-detail-flight-button-buy">
                        <p>Price: ${flight.price}</p>
                        <button className="fd-detail-flight-button btn-df-buy">Buy</button>
                    </div>
                </section>}

                <DeleteProduct product={'flight'} id={id} trigger={buttonPopup} setTrigger={setButtonPopup}></DeleteProduct>
                <IsPack packId={packId} trigger={packPopup} setTrigger={setPackPopup}></IsPack>
            </main>

        </div>
    );
}

export default FlightDetail;