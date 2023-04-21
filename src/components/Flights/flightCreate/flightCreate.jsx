import React from 'react';
import './flightCreate.css';

function FlightCreate() {
    return (
        <div className="App-flightCreate">
            <main>
                <form action="" method="POST" enctype="multipart/form-data" className="crate-flight">

                    <div className="form-createFlight-top">
                        <div className="form-createFlight-top-1">
                            <input type="file" id="input-flight-create" name="productFile" required></input>
                            <label className="add-img-label-flight" htmlFor="input-flight-create">Ingrese una foto del producto:</label>
                            <label htmlFor="input-flight-create"><i className="fa-solid fa-image"></i></label>
                        </div>
                        <div className="form-createFlight-top-2">

                            <div className="form-createFlight-top-2-div">
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="airline">Aerolinea:</label>
                                    <input className="form-createFlight-input" type="text" id="airline" name="airline" placeholder="Aerolinea"></input>

                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="description">Descripcion:</label>
                                    <input className="form-createFlight-input" type="text" id="description" name="description" placeholder="Descripcion"></input>

                                </div>
                            </div>

                            <div className="form-createFlight-top-2-div">
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="departure"><i className="fa-solid fa-plane-departure"></i></label>
                                    <input className="form-createFlight-input" type="text" id="departure" name="departure" placeholder="Origen"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="reach"><i className="fa-solid fa-location-dot"></i></label>
                                    <input className="form-createFlight-input" type="text" id="reach" name="reach" placeholder="Destino"></input>

                                </div>
                            </div>

                            <div className="form-createFlight-top-2-div">
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="departureDate">Fecha de ida</label>
                                    <input className="form-createFlight-input" type="date" id="departureDate" name="departureDate"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="reachDate">Fecha de vuelta</label>
                                    <input className="form-createFlight-input" type="date" id="reachDate" name="reachDate"></input>
                                </div>
                            </div>

                            <div className="form-createFlight-top-2-div">

                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="departureHour">Hora de salida</label>
                                    <input className="form-createFlight-input" type="time" id="departureHour" name="departureHour"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="reachHour">Hora de llegada</label>
                                    <input className="form-createFlight-input" type="time" id="reachHour" name="reachHour"></input>
                                </div>

                            </div>

                            <div className="form-createFlight-top-2-div">

                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="cabin.">Tipo de cabina:</label>
                                    <select name="cabin" id="cabin">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" htmlFor="price">Precio:</label>
                                    <input className="form-createFlight-input" type="number" id="price" name="price"></input>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="form-createFlight-bottom">
                        <button className="mary" type="submit">Crear</button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default FlightCreate;