import React from 'react';
import './mainIndex.css';

function MainIndex() {
    return (
        <div className="App-mainIndex">
            <main className="mainIndex">
                {/* <div>
                    <img src="/images/flights/495536-lasvegas.webp" alt=""></img>
                </div> */}
                <section className="section-nav">
                    <div className="div-top">
                        <div className="busca-paquete">
                            <h4>Busca tu paquete aqui</h4>
                        </div>
                        <div className="div-filters">
                            <div className="main-select">
                                <select name="" id="">
                                    <option value="none">Tipo de Cabina</option>
                                    <option value="">Economy</option>
                                    <option value="">Premium</option>
                                    <option value="">Premium vip</option>
                                </select>
                            </div>
                            <div className="main-select">
                                <select name="" id="">
                                    <option value="none">Tipo de servicio</option>
                                    <option value="">2 Estrellas</option>
                                    <option value="">3 Estrellas</option>
                                    <option value="">4 Estrellas</option>
                                    <option value="">5 Estrellas</option>
                                </select>
                            </div>
                            <div className="main-select">
                                <select name="" id="">
                                    <option value="none">Pasajeros</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 o mas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <form className="nav-gaps" action="">
                        <div className="div-origen-destino">
                            <div className="div-origen">
                                <label className="main-label" htmlFor="Origen"><i className="fa-solid fa-plane-departure"></i></label>
                                <input className="main-input" type="text" id="Origen" name="Origen" placeholder="Origen"></input>
                            </div>
                            <div className="div-destino">
                                <label className="main-label" htmlFor="destino"><i className="fa-solid fa-location-dot"></i></label>
                                <input className="main-input" type="text" id="destino" name="destino" placeholder="Destino"></input>
                            </div>
                        </div>
                        <div className="div-ida-vuelta">
                            <div className="div-ida">
                                <label className="main-label" htmlFor="ida">Fecha ida</label>
                                <input className="main-input" type="date" id="ida" name="ida"></input>
                            </div>
                            <div className="div-vuelta">
                                <label className="main-label" htmlFor="vuelta">Fecha vuelta</label>
                                <input className="main-input" type="date" id="vuelta" name="vuelta"></input>
                            </div>
                        </div>
                        <div className="div-search">
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </div>
                    </form>

                </section>
                <div className="title-div">
                    <h2 className="articles-title">Paquetes mas comprados</h2>
                </div>
            </main>
        </div>
    );
}

export default MainIndex;
