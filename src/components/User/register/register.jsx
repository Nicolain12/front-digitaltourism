import React from 'react';
import './register.css';

function Register() {
    return (
        <div className="App-register">

            <main>
                <div className="main-error-div">
                    <h4 id='main-error-register' className="error-set"></h4>
                </div>
                <form className="form-register" id="form-register" enctype="multipart/form-data">
                    <p className="error-msg">
                    </p>
                    <h4>Formulario Registro</h4>


                    <div className="main-register-from-top-1">
                        <label for="userImg-register">Ingrese una foto:</label>
                        <input type="file" id="userImg-register" name="userImg"/>
                            <p className="error-msg">
                            </p>
                    </div>


                    <div className="register-top">
                        <div className="input-div">
                            <label className="first-label" for="name-register">Ingrese su Nombre:</label>
                            <h5 id='name-set-register' className="error-set"></h5>
                            <input className="controls-register" type="text" name="name" value="" id="name-register" />
                        </div>
                        <div className="input-div">
                            <label for="surname-register">Ingrese su Apellido:</label>
                            <h5 id='surname-set-register' className="error-set"></h5>
                            <input className="controls-register" type="text" name="surname"
                                value="" id="surname-register" />
                            <p className="error-msg">
                            </p>
                        </div>


                    </div>

                    <div className="register-middle">
                        <div className="input-div">
                            <label for="email-register">Ingrese su Email:</label>
                            <div className="set-password-div">
                                <h5 id='email-set-register' className="error-set"></h5>
                                <h5 id='email-set-alert-register' className="error-set"></h5>
                            </div>
                            <input className="controls-register" type="email" name="email" value="" id="email-register" />
                            <p className="error-msg">
                            </p>
                        </div>
                        <div className="age-type">
                            <div className="input-div">
                                <label for="age-register">Fecha de nacimiento:</label>
                                <h5 id='age-set-register' className="error-set"></h5>
                                <input className="controls-register" type="date" name="age" value="" id="age-register" />
                                <p className="error-msg">
                                </p>
                            </div>
                            <div className="input-div">
                                <label for="admin-register">Tipo de usuario:</label>
                                <h5 id='admin-set-register' className="error-set"></h5>
                                <select name="isAdmin" id="admin">
                                    <option value="false">Cliente</option>
                                    <option value="true">Administrador</option>
                                </select>
                                <p className="error-msg">
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="register-end">
                        <div className="input-div">
                            <label for="password-register">Ingrese su Contraseña:</label>
                            <div className="set-password-div">
                                <h5 className="password-set-register error-set"></h5>
                                <h5 className="password-num-register error-set"></h5>
                                <h5 className="password-cap-register error-set"></h5>
                                <h5 className="password-let-register error-set"></h5>
                            </div>
                            <input className="controls-register" type="password" name="password" id="password-register" />
                        </div>

                        <div className="input-div">
                            <label for="passwordConfirm">Confirme su Contraseña:</label>
                            <h5 id='passConfirm-set-register' className="error-set"></h5>
                            <input className="controls-register" type="password" name="passwordConfirm-register" id="passwordConfirm-register" />
                            <p className="error-msg">
                            </p>
                        </div>

                    </div>
                    <div className="boton-register">
                        <button className="botons-register">
                            Registrar
                        </button>
                    </div>
                    <p className="from-register-p">
                        <a href="/users/loggin">¿Ya tengo Cuenta?</a>
                    </p>
                </form>
            </main>
        </div>
    );
}

export default Register;


