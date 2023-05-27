import React, { useEffect, useState, useRef } from 'react';
import './flightDetail.css';
import { useParams } from 'react-router-dom';

function FlightDetail() {
    const { id } = useParams();
    const [flight, setFlight] = useState({});
    const [flightImgs, setFlightImgs] = useState([]);
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
                setFlight(flightData.data);
                setFlightImgs(flightData.data.image)
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    console.log(flight);
    console.log(flightImgs);

    return (
        <div className="App-flightDetail">
            <main className="fd-main-detail-flight">
                <section className="fd-section-info">

                    <div id="slider-root" ref={refSliderDiv} className="fd-carousel_detail-flight">
                        {/********************** SLIDER HERE **********************/}
                    </div>

                    <div className="fd-detail-flight-info">
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
                            <h3>Informacion de la aerolinea</h3>
                        </div>

                        <div className="fd-detail-flight-info-maininfo">
                            <div className="fd-detail-flight-info-header">
                                <h3>Airline: {flight.airline}</h3>
                            </div>
                            <div className="fd-detail-flight-info-data">
                                <div className="fd-detail-flight-departure">
                                    <h5>Cabina: {flight.cabin}</h5>
                                    <div className="fd-detail-flight-description">
                                        <h5>Descripcion</h5>
                                        <p>{flight.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="fd-detail-flight-button-section">
                    <button className="fd-detail-flight-button btn-df-edit">Editar</button>
                    <button className="fd-detail-flight-button btn-df-delete">Eliminar</button>
                    <div className="fd-detail-flight-button-buy">
                        <p>Price: $999999</p>
                        <button className="fd-detail-flight-button btn-df-buy">Comprar</button>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default FlightDetail;