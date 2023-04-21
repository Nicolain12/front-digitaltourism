import React from 'react';
import './hotelDetail.css';

function HotelDetail() {
    return (
        <div className="App-hotelDetail">
            <main className="main-detail-flight">
                <section className="section-info">

                    <div className="carousel_detail-flight">
                        <img src="/images/flights/495536-lasvegas.webp" alt=""></img>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3></h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h4 className="detail-flight-h4">Hotel</h4>
                                    <p className="detail-flight-date">Nombre del hotel</p>
                                </div>
                                <div className="detail-flight-reach">
                                    <h4 className="detail-flight-h4">Ubicacion</h4>
                                    <p className="detail-flight-date">Ubicacion del Hotel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-title">
                            <h3>Informacion del servicio</h3>
                        </div>

                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3> Estrellas</h3>

                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <div >
                                    </div>
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

export default HotelDetail;
