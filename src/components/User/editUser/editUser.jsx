import React from 'react';
import './editUser.css';

function EditUser() {
    return (
        <div className="App-editUser">
             <main>
                <form action="" enctype="multipart/form-data" method="POST" className="main-profile-div-EDIT">
                    <section className="img-profile-EDIT">
                        <label for="fileEdit">
                            <img src="/images/users/default.jpg" alt="Imagen del usuario"></img>
                            <p>Editar foto</p>
                        </label>
                        <input type="file" value="" name="fileEdit" id="fileEdit"></input>
                    </section>
                    <section className="main-info-profile-EDIT">
                        <div className="name-edit">
                            <label for="">Nombre:</label>
                            <input type="text" value="" name="nameEdit" id="nameEdit"></input>
                        </div>
                        <div className="surname-edit">
                            <label for="surnameEdit">Apellido:</label>
                            <input type="text" value="" name="surnameEdit" id="surnameEdit"></input>
                        </div>
                        <div className="email-edit">
                            <label for="emailEdit">Email:</label>
                            <input type="email" value="" name="emailEdit" id="emailEdit"></input>
                        </div>
                        <div className="button-profile-edit">
                            <button type="submit">Editar</button>
                        </div>
                    </section>


                </form>
            </main>

        </div>
    );
}

export default EditUser;
