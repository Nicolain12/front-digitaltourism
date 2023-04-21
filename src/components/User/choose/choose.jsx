import React from 'react';
import './choose.css';
import { Link } from 'react-router-dom';

function Choose() {
    return (
        <div className="App-choose">
            <main className="main-choose">
                <div className="choose-main-div">
                    <div className="choose-title">
                        <h3>Elige una opcion</h3>
                    </div>
                    <div className="choose-options">
                        <Link to="/register">Register</Link>
                        <Link to="/loggin">Login</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Choose;
