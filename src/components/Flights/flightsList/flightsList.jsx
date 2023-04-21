import React from 'react';
import './flightList.css';

function FlightList() {
    return (
        <div className="App-flight-list">
            <main>

                <div className="main-flights">


                    <article className="article-flight">
                        <div className="img-flight">
                            <img src="/images/flights/logo2.jpg" alt=""></img>
                        </div>
                        <div className="info-flight-div">
                            <div className="info-flight-div-1">
                                <h3>Departure</h3>
                                <h3>------</h3>
                                <h3>Reach</h3>
                            </div>
                            <div className="info-flight-div-2">
                                <div className="departure-info">
                                    <div>
                                        <h4>Salida:</h4>
                                        <p className="date">dd/mm/aaaa</p>
                                        <section className="line-f"></section>
                                        <p className="hour">hh:mm</p>
                                    </div>
                                    <section className="date-f"></section>
                                    <div>
                                        <h4>Llegada:</h4>
                                        <p className="date">dd/mm/aaaa</p>
                                        <section className="line-f"></section>
                                        <p className="hour">A confirmar...</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cabin-type">
                                <h4>Tipo de Cabina:</h4>
                                <p className="cabin">"Cabina tal"</p>
                            </div>

                            <div className="info-flight-div-5">
                                <p>$ 9999999</p>
                                <a href=""><i className="fa-solid fa-plane-up add-cart-flight"></i></a>
                                <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a>
                            </div>
                        </div>
                    </article>


                </div>

            </main>

        </div>
    );
}

export default FlightList;
