import React from 'react';
import './createChoose.css';

import { Link } from 'react-router-dom';

function CreateChoose() {
    return (
        <div className="App-createChoose">

            <main className="main-chooseCreate">
                <div className="chooseCreate-main-div">
                    <div className="chooseCreate-title">
                        <h3>Elige una opcion</h3>
                    </div>
                    <div className="chooseCreate-options">
                        <Link className="choose-create-a" to="/flightsCreate">vuelo</Link>
                        <Link className="choose-create-a" to="/hotelCreate">Hotel</Link>
                        <Link className="choose-create-a" to="/packageCreate">Paquete</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CreateChoose;
