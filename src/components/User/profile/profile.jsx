import React, { useState } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import LoggOut from '../../Popups/loggout/loggOut'
import DeleteUser from '../../Popups/deleteUser/deleteUser'

function Profile() {
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopupDelete, setButtonPopupDelete] = useState(false)
    const loggOutButton = () => {
        setButtonPopup(true)
    }
    const deleteButton = () => {
        setButtonPopupDelete(true)
    }

    return (
        <div className="App-profile">
            <main>
                <div className="main-profile-div">
                    <section className="img-profile">
                        <img src={`http://localhost:3001/images/users/${userLogged.image}`} alt="Imagen del usuario"></img>
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
                    <Link to={'/editUser'} className="edit-button-profile" href="/users/update">Edit User</Link>
                    <button className="loggout-button-profile" onClick={loggOutButton}>Logg Out</button>
                    <a onClick={deleteButton} className="delete-button-profile" >Delete User</a>
                </div>
            <LoggOut trigger={buttonPopup} setTrigger={setButtonPopup}></LoggOut>
            <DeleteUser trigger={buttonPopupDelete} setTrigger={setButtonPopupDelete}></DeleteUser>
            </main>
        </div>
    );
}

export default Profile;


