import React from 'react';
import './hotelUpdate.css';

function HotelUpdate() {
    return (
        <div className="App-hotelUpdate">
              <main>
                <form action="" method="POST" enctype="multipart/form-data" className="crate-hotel">

                    <div className="create-hotel-top">

                        <div className="create-hotel-top-1">
                            <input value="" type="file" id="input-hotel-create" name="productFile" required></input>
                            <label className="add-img-label-hotel" for="input-hotel-create">Ingrese una foto del
                                producto:</label>
                            <label className="crate-hotel-img-i" for="input-hotel-create"><i
                                    className="fa-solid fa-image"></i></label>
                        </div>

                        <div className="create-hotel-top-2">
                            
                            <section className="create-hotel-name-spot">
                                <div className="create-hotel-inputDiv">
                                    <label className="create-hotel-label" for="name">Nombre:</label>
                                    <input value="" className="create-hotel-input" type="text" id="name" name="name"></input>
                                </div>
                                <div className="create-hotel-inputDiv">
                                    <label className="create-hotel-label" for="spot">Ubicacion:</label>
                                    <input value="" className="create-hotel-input" type="text" id="spot" name="spot"></input>
                                </div>
                            </section>
                            
                            <section className="create-hotel-description">
                                <div className="create-hotel-inputDiv">
                                    <label className="create-hotel-label" for="descriptionH">Agregue una descripcion:</label>
                                    <input value="" className="create-hotel-input" type="textarea" name="descriptionH" id="descriptionH"></input>
                                </div>
                            </section>
                            
                            <section className="create-hotel-service ">
                                <div className="create-hotel-inputDiv">
                                    <label className="create-hotel-label" for="service">Calidad de servico:</label>
                                    <select name="service" id="service">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="create-hotel-inputDiv">
                                    <label className="create-hotel-label" for="price">Precio por noche:</label>
                                    <input value="" className="create-hotel-input" type="number" name="price" id="price"></input>
                                </div>
                            </section>
                            

                        </div>
                    </div>

                    <div className="crate-hotel-button">
                        <button className="" type="submit">Crear</button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default HotelUpdate;