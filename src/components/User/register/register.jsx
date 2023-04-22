import React, { useState, useEffect, useRef } from "react";
import "./register.css";
console.log();
function Register() {
    // ***** States *****
    const [userImg, setUserImg] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState("");

    // ***** References *****
    // Imputs
    const refUserImg = useRef()
    const refName = useRef()
    const refSurname = useRef()
    const refEmail = useRef()
    const refAge = useRef()
    const refAdmin = useRef()
    const refPassword = useRef()
    // Errors
    const logginErrors = []
    //-----------------
    const userImgErr = useRef()
    const nameErr = useRef()
    const surnameErr = useRef()
    const emailErr = useRef()
    const ageErr = useRef()
    const adminErr = useRef()
    const passwordErr = useRef()

    // ***** Catching Changes *****
    const handleUserImgChange = (event) => {
        setUserImg(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
        nameErr.current.innerHTML = "";
    };
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
    const handleAdminChange = (event) => {
        setAdmin(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // ***** Validations *****
    const validationUserImg = (e) => {

    }
    const validationName = (e) => {
        if (name.length < 3) {
            refName.current.style.borderColor = 'red';
            nameErr.current.innerHTML = "Please enter a valid name.";
            nameErr.current.className = 'error-set-shown'
        } else {
            refName.current.style.borderColor = '#1f53c5';
            nameErr.current.innerHTML = "";
            nameErr.current.className = 'error-set-hidden'
        }
    }
    const validationSurname = (e) => {

    }
    const validationEmail = (e) => {

    }
    const validationAge = (e) => {

    }
    const validationAdmin = (e) => {

    }
    const validationPassword = (e) => {

    }

    // ***** Showing Requirements *****
    useEffect(() => {
        if (userImg) {
            console.log(`userImg: ${userImg}`);
        }
    }, [userImg])
    useEffect(() => {
        if (name) {
            console.log(`name: ${name}`);
        }
    }, [name])
    useEffect(() => {
        if (surname) {
            console.log(`surname: ${surname}`);
        }
    }, [surname])
    useEffect(() => {
        if (email) {
            console.log(`email: ${email}`);
        }
    }, [email])
    useEffect(() => {
        if (age) {
            console.log(`age: ${age}`);
        }
    }, [age])
    useEffect(() => {
        if (admin) {
            console.log(`admin: ${admin}`);
        }
    }, [admin])
    useEffect(() => {
        if (password) {
            console.log(`password: ${password}`);
        }
    }, [password])

    return (
        <div className="App-register">
            <main>
                <div className="main-error-div">
                    <h4 id="main-error-register" className="error-set-hidden"></h4>
                </div>
                <form
                    className="form-register"
                    id="form-register"
                    enctype="multipart/form-data"
                >
                    <p className="error-msg"></p>
                    <h4>Formulario Registro</h4>

                    <div className="main-register-from-top-1">
                        <label for="userImg-register">Ingrese una foto:</label>
                        <h5 ref={userImgErr} className="error-set-hidden"></h5>
                        <input
                            type="file"
                            id="userImg-register"
                            name="userImg"
                            value={userImg}
                            onChange={handleUserImgChange}
                            onBlur={validationUserImg}
                            ref={refUserImg}
                        />
                        <p className="error-msg"></p>
                    </div>
                    <div className="register-top">
                        <div className="input-div">
                            <label className="first-label" for="name-register">
                                Ingrese su Nombre:
                            </label>
                            <h5 ref={nameErr} className="error-set-hidden"></h5>
                            <input
                                className="controls-register"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                onBlur={validationName}
                                ref={refName}
                                id="name-register"
                            />
                        </div>
                        <div className="input-div">
                            <label for="surname-register">Ingrese su Apellido:</label>
                            <h5 ref={surnameErr} className="error-set-hidden"></h5>
                            <input
                                className="controls-register"
                                type="text"
                                name="surname"
                                value={surname}
                                onChange={handleSurnameChange}
                                onBlur={validationSurname}
                                ref={refSurname}
                                id="surname-register"
                            />
                            <p className="error-msg"></p>
                        </div>
                    </div>

                    <div className="register-middle">
                        <div className="input-div">
                            <label for="email-register">Ingrese su Email:</label>
                            <div className="set-password-div">
                                <h5 ref={emailErr} className="error-set-hidden"></h5>
                                <h5 id="email-set-alert-register" className="error-set-hidden"></h5>
                            </div>
                            <input
                                className="controls-register"
                                type="email"
                                name="email"
                                id="email-register"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={validationEmail}
                                ref={refEmail}
                            />
                            <p className="error-msg"></p>
                        </div>
                        <div className="age-type">
                            <div className="input-div">
                                <label for="age-register">Fecha de nacimiento:</label>
                                <h5 ref={ageErr} className="error-set-hidden"></h5>
                                <input
                                    className="controls-register"
                                    type="date"
                                    name="age"
                                    id="age-register"
                                    value={age}
                                    onChange={handleAgeChange}
                                    onBlur={validationAge}
                                    ref={refAge}
                                />
                                <p className="error-msg"></p>
                            </div>
                            <div className="input-div">
                                <label for="admin-register">Tipo de usuario:</label>
                                <h5 ref={adminErr} className="error-set-hidden"></h5>
                                <select name="isAdmin" id="admin" value={admin} onChange={handleAdminChange} ref={refAdmin} onBlur={validationAdmin}>
                                    <option value="false">Cliente</option>
                                    <option value="true">Administrador</option>
                                </select>
                                <p className="error-msg"></p>
                            </div>
                        </div>
                    </div>

                    <div className="register-end">
                        <div className="input-div">
                            <label for="password-register">Ingrese su Contraseña:</label>
                            <div className="set-password-div">
                                <h5 ref={passwordErr} className="error-set-hidden"></h5>
                                {/* password-num-register */}
                                <h5 className="error-set-hidden"></h5> 
                                {/* password-cap-register */}
                                <h5 className="error-set-hidden"></h5> 
                                {/* password-let-register */}
                                <h5 className="error-set-hidden"></h5> 
                            </div>
                            <input
                                className="controls-register"
                                type="password"
                                name="password"
                                id="password-register"
                                value={password}
                                onChange={handlePasswordChange}
                                onBlur={validationPassword}
                                ref={refPassword}
                            />
                        </div>

                        <div className="input-div">
                            <label for="passwordConfirm">Confirme su Contraseña:</label>
                            <h5 id="passConfirm-set-register" className="error-set-hidden"></h5>
                            <input
                                className="controls-register"
                                type="password"
                                name="passwordConfirm-register"
                                id="passwordConfirm-register"
                            />
                            <p className="error-msg"></p>
                        </div>
                    </div>
                    <div className="boton-register">
                        <button className="botons-register">Registrar</button>
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
