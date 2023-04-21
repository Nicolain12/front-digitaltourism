import React from 'react';
import './packageUpdate.css';

function PackageUpdate() {
    return (
        <div className="App-packageUpdate">
            <main>
                <form action="" method="POST" enctype="multipart/form-data" className="crate-package">

                    <div className="create-package-discount">
                        <label for="discount">Ingrese el descuento (%):</label>
                        <input value="" type="number" name="discount" id="discount"></input>
                    </div>
                    <div className="create-package-main-div">
                        <section>
                            <h2>Vuelo</h2>
                            <div className="create-package-flight">

                                <div className="form-pack-flight-top-1">
                                    <input value="" type="file" id="input-flight-create" name="productFile" required></input>
                                        <label className="add-img-label-pack-flight" for="input-flight-create">Ingrese una foto
                                            del producto:</label>
                                        <label for="input-flight-create"><i className="fa-solid fa-image"></i></label>
                                </div>
                                <div className="form-pack-flight-top-2">

                                    <div className="form-pack-flight-top-2-div">
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="airline">Aerolinea:</label>
                                            <input value="" className="form-pack-flight-input" type="text" id="airline" name="airline" placeholder="Aerolinea"></input>
                                        </div>
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="description">Descripcion:</label>
                                            <input value="" className="form-pack-flight-input" type="text" id="description" name="description" placeholder="Descripcion"></input>
                                        </div>
                                    </div>

                                    <div className="form-pack-flight-top-2-div">
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="departure"><i
                                                className="fa-solid fa-plane-departure"></i></label>
                                            <input value="" className="form-pack-flight-input" type="text" id="departure" name="departure" placeholder="Origen"></input>
                                        </div>
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="reach"><i
                                                className="fa-solid fa-location-dot"></i></label>
                                            <input value="" className="form-pack-flight-input" type="text" id="reach" name="reach" placeholder="Destino"></input>
                                        </div>
                                    </div>

                                    <div className="form-pack-flight-top-2-div">
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="departureDate">Fecha de
                                                ida</label>
                                            <input value="" className="form-pack-flight-input" type="date" id="departureDate" name="departureDate"></input>
                                        </div>
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="reachDate">Fecha de
                                                vuelta</label>
                                            <input value="" className="form-pack-flight-input" type="date" id="reachDate" name="reachDate"></input>
                                        </div>
                                    </div>

                                    <div className="form-pack-flight-top-2-div">

                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="departureHour">Hora de
                                                salida</label>
                                            <input value="" className="form-pack-flight-input" type="time" id="departureHour" name="departureHour"></input>
                                        </div>
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="reachHour">Hora de
                                                llegada</label>
                                            <input value="" className="form-pack-flight-input" type="time" id="reachHour" name="reachHour"></input>
                                        </div>

                                    </div>

                                    <div className="form-pack-flight-top-2-div">

                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="cabin.">Tipo de cabina:</label>
                                            <select name="cabin" id="cabin">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                        </div>
                                        <div className="form-pack-flight-inputDiv">
                                            <label className="form-pack-flight-label" for="price">Precio:</label>
                                            <input value="" className="form-pack-flight-input" type="number" id="price" name="price"></input>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="section-pack-2">
                            <h2>Hotel</h2>
                            <div className="create-package-hotel">
                                <div className="form-pack-flight-top-1">
                                    <input value="" type="file" id="input-flight-create" name="productFile" required></input>
                                        <label className="add-img-label-pack-flight" for="input-flight-create">Ingrese una foto
                                            del
                                            producto:</label>
                                        <label for="input-flight-create"><i className="fa-solid fa-image"></i></label>
                                </div>

                                <div className="pack-hotel-top-2">
                                    
                                    <section className="pack-hotel-name-spot">
                                        <div className="pack-hotel-inputDiv">
                                            <label className="pack-hotel-label" for="name">Nombre:</label>
                                            <input value="" className="pack-hotel-input" type="text" id="name" name="name"></input>
                                        </div>
                                        <div className="pack-hotel-inputDiv">
                                            <label className="pack-hotel-label" for="spot">Ubicacion:</label>
                                            <input value="" className="pack-hotel-input" type="text" id="spot" name="spot"></input>
                                        </div>
                                    </section>
                                    
                                    <section className="pack-hotel-description">
                                        <div className="pack-hotel-inputDiv">
                                            <label className="pack-hotel-label" for="descriptionH">Agregue una
                                                descripcion:</label>
                                            <input value="" className="pack-hotel-input" type="textarea" name="descriptionH" id="descriptionH"></input>
                                        </div>
                                    </section>
                                    
                                    <section className="pack-hotel-service ">
                                        <div className="pack-hotel-inputDiv">
                                            <label className="pack-hotel-label" for="service">Calidad de servico:</label>
                                            <select name="service" id="service">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div className="pack-hotel-inputDiv">
                                            <label className="pack-hotel-label" for="price">Precio por noche:</label>
                                            <input value="" className="pack-hotel-input" type="number" name="price" id="price"></input>
                                        </div>
                                    </section>
                                    

                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="pack-hotel-button">
                        <button className="" type="submit">Crear</button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default PackageUpdate;