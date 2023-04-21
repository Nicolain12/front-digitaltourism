import React from 'react';
import './profile.css';

function Profile() {
    return (
        <div className="App-profile">
            <main>
                <div className="main-profile-div">
                    <section className="img-profile">
                        <img src="/images/users/default.jpg" alt="Imagen del usuario"></img>
                    </section>
                    <section className="main-info-profile">
                        <div className="name-profile">
                            <h5>Nombre:</h5>
                            <p>The name goes here</p>
                        </div>
                        <div className="surname-profile">
                            <h5>Apellido:</h5>
                            <p>the surname goes here</p>
                        </div>
                        <div className="email-profile">
                            <h5>Email:</h5>
                            <p>The email goes here</p>
                        </div>
                        <div className="ageType-profile">
                            <div className="age">
                                <h5>Edad:</h5>
                                <p>The age goed here</p>
                            </div>
                            <div className="type">
                                <h5>Tipo de usuario:</h5>
                                <p>The type goes here</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="button-profile">
                    <a className="edit-button-profile" href="/users/update">Editar Usuario</a>
                    <form className="loggout-button-profile" action="/users/loggOut" method="post">
                        <button type="submit">Cerrar sesion</button>
                    </form>
                    <a className="delete-button-profile" href="/users/delete">Eliminar Usuario</a>
                </div>
            </main>

        </div>
    );
}

export default Profile;


