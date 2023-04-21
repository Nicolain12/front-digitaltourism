import React from 'react';
import './flightDetail.css';

function FlightDetail() {
    return (
        <div className="App-flightDetail">
               <main className="main-detail-flight">
                <section className="section-info">

                    <div className="carousel_detail-flight">
                        <img src="/images/flights/495536-lasvegas.webp" alt=""></img>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>Departure ----- Reach</h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h4 className="detail-flight-h4">Salida:</h4>
                                    <p className="detail-flight-date">Date</p>
                                    <p className="detail-flight-hour">Hour</p>
                                </div>
                                <div className="detail-flight-reach">
                                    <h4 className="detail-flight-h4">Llegada:</h4>
                                    <p className="detail-flight-date">Date</p>
                                    <p className="detail-flight-hour">Hour</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-title">
                            <h3>Informacion de la aerolinea</h3>
                        </div>

                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>Airline: "Airline"</h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h5>Cabina: "Tal Cabina"</h5>
                                    <div className="detail-flight-description">
                                        <h5>Descripcion</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Officiis minima maxime voluptatibus, magni delectus culpa, assumenda eum m
                                            inus deserunt enim nulla, quam debitis modi et perspiciatis sint consequatur
                                            sapiente praesentium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="detail-flight-button-section">
                    <button className="detail-flight-button btn-df-edit">Editar</button>
                    <button className="detail-flight-button btn-df-delete">Eliminar</button>
                    <div className="detail-flight-button-buy">
                        <p>Price: $999999</p>
                        <button className="detail-flight-button btn-df-buy">Comprar</button>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default FlightDetail;