import React from 'react';
import './flightUpdate.css';

function FlightUpdate() {
    return (
        <div className="App-flightUpdate">
             <main>
                <form action="" method="POST" enctype="multipart/form-data" className="crate-flight">

                    <div className="form-createFlight-top">
                        <div className="form-createFlight-top-1">
                            <input value="" type="file" id="input-flight-create" name="productFile" required></input>
                            <label className="add-img-label-flight" for="input-flight-create">Ingrese una foto del producto:</label>
                            <label for="input-flight-create"><i className="fa-solid fa-image"></i></label>
                        </div>
                        <div className="form-createFlight-top-2">
                            
                            <div className="form-createFlight-top-2-div">
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="airline">Aerolinea:</label>
                                    <input value="" className="form-createFlight-input" type="text" id="airline" name="airline" placeholder="Aerolinea"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="description">Descripcion:</label>
                                    <input value="" className="form-createFlight-input" type="text" id="description" name="description" placeholder="Descripcion"></input>
                                </div>
                            </div>

                            <div className="form-createFlight-top-2-div">
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="departure"><i className="fa-solid fa-plane-departure"></i></label>
                                    <input value="" className="form-createFlight-input" type="text" id="departure" name="departure" placeholder="Origen"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="reach"><i className="fa-solid fa-location-dot"></i></label>
                                    <input value="" className="form-createFlight-input" type="text" id="reach" name="reach" placeholder="Destino"></input>
                                </div>
                            </div>

                            <div className="form-createFlight-top-2-div">
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="departureDate">Fecha de ida</label>
                                    <input value="" className="form-createFlight-input" type="date" id="departureDate" name="departureDate"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="reachDate">Fecha de vuelta</label>
                                    <input value="" className="form-createFlight-input" type="date" id="reachDate" name="reachDate"></input>
                                </div>
                            </div>

                            <div className="form-createFlight-top-2-div">

                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="departureHour">Hora de salida</label>
                                    <input value="" className="form-createFlight-input" type="time" id="departureHour" name="departureHour"></input>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="reachHour">Hora de llegada</label>
                                    <input value="" className="form-createFlight-input" type="time" id="reachHour" name="reachHour"></input>
                                </div>

                            </div>

                            <div className="form-createFlight-top-2-div">

                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="cabin.">Tipo de cabina:</label>
                                    <select name="cabin" id="cabin">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                                <div className="form-createFlight-inputDiv">
                                    <label className="form-createFlight-label" for="price">Precio:</label>
                                    <input value="" className="form-createFlight-input" type="number" id="price" name="price"></input>
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

export default FlightUpdate;