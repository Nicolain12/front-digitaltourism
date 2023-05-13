import React from 'react';
import './profile.css';

function Profile() {
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))

    const loggOutButton = () => {
        sessionStorage.clear()
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <div className="App-profile">
            <main>
                <div className="main-profile-div">
                    <section className="img-profile">
                        <img src="/images/users/default.jpg" alt="Imagen del usuario"></img>
                    </section>
                    <section className="main-info-profile">
                        <div className="name-profile">
                            <h5>Name:</h5>
                            <p>{userLogged.firstName}</p>
                        </div>
                        <div className="surname-profile">
                            <h5>Surname:</h5>
                            <p>{userLogged.lastName}</p>
                        </div>
                        <div className="email-profile">
                            <h5>Email:</h5>
                            <p>{userLogged.email}</p>
                        </div>
                        <div className="ageType-profile">
                            <div className="age">
                                <h5>Age:</h5>
                                <p>{userLogged.age}</p>
                            </div>
                            <div className="type">
                                <h5>Type Of User:</h5>
                                <p>{userLogged.admin ? 'Admin' : 'User'}</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="button-profile">
                    <a className="edit-button-profile" href="/users/update">Edit User</a>
                    <button className="loggout-button-profile" onClick={loggOutButton}>Logg Out</button>
                    <a className="delete-button-profile" href="/users/delete">Delete User</a>
                </div>
            </main>

        </div>
    );
}

export default Profile;


