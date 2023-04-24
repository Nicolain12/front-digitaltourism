import React, { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';
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
    const [passwordConfirm, setPasswordConfirm] = useState("");

    // ***** References *****
    // Imputs
// *****************************
    const refUserImg = useRef()
// *****************************
    const refName = useRef()
    const refSurname = useRef()
    const refEmail = useRef()
    const refAge = useRef()
    const refAdmin = useRef()
    const refPassword = useRef()
    const refPasswordConfirm = useRef()
    // Errors
    const logginAuth = {
        userImg: false,
        name: false,
        surname: false,
        email: false,
        age: false,
        admin: false,
        password: false,
        passwordConfirm: false
    }
    const userImgErr = useRef()
    const nameErr = useRef()
    const surnameErr = useRef()
    const emailErr = useRef()
    const ageErr = useRef()
    const adminErr = useRef()
    const passwordErr = useRef()
    const passwordConfirmErr = useRef()
    const capPass = useRef()
    const speCarPass = useRef()
    const numPass = useRef()

    // ***** Catching Changes *****
// *******************************************
    const handleUserImgChange = (event) => {
        setUserImg(event.target.files[0])
    };
// *******************************************

    const handleNameChange = (event) => {
        setName(event.target.value);
        nameErr.current.innerHTML = "";
    };
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
        surnameErr.current.innerHTML = "";
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        emailErr.current.innerHTML = "";
    };
    const handleAgeChange = (event) => {
        setAge(event.target.value);
        ageErr.current.innerHTML = "";
    };
    const handleAdminChange = (event) => {
        setAdmin(event.target.value);
        adminErr.current.innerHTML = "";
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        passwordErr.current.innerHTML = "";
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;
        const passwordValue = event.target.value;
        if (passwordValue.length < 8) {
            passwordErr.current.innerHTML = `Characters: ${passwordValue.length}/8`;
            passwordErr.current.className = "error-set-shown";
        } else {
            passwordErr.current.innerHTML = `Characters: 8/8`;
            passwordErr.current.className = "error-set-shown-correct";
        }
        if (!uppercaseRegex.test(passwordValue)) {
            capPass.current.innerHTML = "You must include at least one capital letter";
            capPass.current.className = "error-set-shown";
        } else {
            capPass.current.className = "error-set-shown-correct";
        }
        if (!numberRegex.test(passwordValue)) {
            numPass.current.innerHTML = "You must include at least one number";
            numPass.current.className = "error-set-shown";
        } else {
            numPass.current.className = "error-set-shown-correct";
        }
        if (!specialCharRegex.test(passwordValue)) {
            speCarPass.current.innerHTML = "You must include at least one special character";
            speCarPass.current.className = "error-set-shown";
        } else {
            speCarPass.current.className = "error-set-shown-correct";
        }
    };
    const handlePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value)
        const passwordConf = event.target.value
        if (password != passwordConf) {
            passwordConfirmErr.current.innerHTML = "The passwords dosn't match"
            passwordConfirmErr.current.className = 'error-set-shown'
        } else {
            passwordConfirmErr.current.innerHTML = "The passwords match"
            passwordConfirmErr.current.className = 'error-set-shown-correct'
        }
    }

    useEffect(() => {
        setPasswordConfirm('')
        refPasswordConfirm.current.style.borderColor = '#1f53c5'
    }, [password]);


    // ***** Validations *****
    const validationName = (e) => {
        if (name.length < 3) {
            refName.current.style.borderColor = 'red';
            nameErr.current.innerHTML = "Please enter a valid name.";
            nameErr.current.className = 'error-set-shown'
            if (logginAuth.name) {
                logginAuth.name = false
            }
        } else {
            refName.current.style.borderColor = 'green';
            nameErr.current.innerHTML = "";
            nameErr.current.className = 'error-set-hidden'
            if (!logginAuth.name) {
                logginAuth.name = true
            }
        }
    }
    const validationSurname = (e) => {
        if (surname.length < 3) {
            refSurname.current.style.borderColor = 'red';
            surnameErr.current.innerHTML = "Please enter a valid surname.";
            surnameErr.current.className = 'error-set-shown'
            if (logginAuth.surname) {
                logginAuth.surname = false
            }
        } else {
            refSurname.current.style.borderColor = 'green';
            surnameErr.current.innerHTML = "";
            surnameErr.current.className = 'error-set-hidden'
            if (!logginAuth.surname) {
                logginAuth.surname = true
            }
        }
    }
    const validationEmail = (e) => {
        if (email.length < 13) {
            refEmail.current.style.borderColor = 'red';
            emailErr.current.innerHTML = "Please enter a valid email";
            emailErr.current.className = 'error-set-shown'
            if (logginAuth.email) {
                logginAuth.email = false
            }
        } else {
            refEmail.current.style.borderColor = 'green';
            emailErr.current.className = 'error-set-hidden'
            if (!logginAuth.email) {
                logginAuth.email = true
            }
        }
    }
    const validationAge = (e) => {
        const birthdate = e.target.value;
        const today = new Date();
        const birthdateObj = new Date(birthdate);
        let age = today.getFullYear() - birthdateObj.getFullYear();
        const monthDiff = today.getMonth() - birthdateObj.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
            age--;
        }
        if (age < 18) {
            refAge.current.style.borderColor = 'red';
            ageErr.current.innerHTML = "You have to be older";
            ageErr.current.className = 'error-set-shown'
            if (logginAuth.age) {
                logginAuth.age = false
            }
        } else {
            refAge.current.style.borderColor = 'green';
            ageErr.current.innerHTML = "";
            ageErr.current.className = 'error-set-hidden'
            if (!logginAuth.age) {
                logginAuth.age = true
            }
        }
    };
    const validationAdmin = (e) => {
        refAdmin.current.style.borderColor = 'green'
    }
    const validationPassword = (e) => {
        capPass.current.className = "error-set-hidden";
        numPass.current.className = "error-set-hidden";
        speCarPass.current.className = "error-set-hidden";
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        if (password.length < 8 || !uppercaseRegex.test(password) || !numberRegex.test(password) || !specialCharRegex.test(password)) {
            refPassword.current.style.borderColor = 'red';
            passwordErr.current.innerHTML = "Please enter a valid password";
            passwordErr.current.className = 'error-set-shown'
            if (logginAuth.password) {
                logginAuth.password = false
            }
        } else {
            refPassword.current.style.borderColor = 'green';
            passwordErr.current.innerHTML = "";
            passwordErr.current.className = 'error-set-hidden'
            if (!logginAuth.password) {
                logginAuth.password = true
            }
        }

    }
    const validationPasswordConfirm = (e) => {
        const passwordConfirm = e.target.value
        passwordConfirmErr.current.className = 'error-set-hidden'
        passwordConfirmErr.current.innerHTML = ""
        if (password != passwordConfirm) {
            refPasswordConfirm.current.style.borderColor = 'red'
            if (logginAuth.passwordConfirm) {
                logginAuth.passwordConfirm = false
            }
        } else {
            refPasswordConfirm.current.style.borderColor = 'green';
            if (!logginAuth.passwordConfirm) {
                logginAuth.passwordConfirm = true
            }
        }
    }
// *******************************
    const submitFetch = (e) => {
        e.preventdefault()
        
        const data = {
            userImg,
            name,
            surname,
            email,
            age,
            admin,
            password
        }

        console.log(data);
    }
// *******************************


    return (
        <div className="App-register">
            <main>
                <div className="main-error-div">
                    <h4 id="main-error-register" className="error-set-hidden"></h4>
                </div>
                <form
                    className="form-register"
                    id="form-register"
                    encType="multipart/form-data"
                    onSubmit={submitFetch}
                >
                    <p className="error-msg"></p>
                    <h4>Formulario Registro</h4>

                    <div className="main-register-from-top-1">
                        <label htmlFor="userImg-register">Ingrese una foto:</label>
                        <h5 ref={userImgErr} className="error-set-hidden"></h5>
                        <input
                            type="file"
                            id="userImg-register"
                            name="userImg"
                            value={userImg}
                            onChange={handleUserImgChange}
                            ref={refUserImg}
                        />
                        <p className="error-msg"></p>
                    </div>
                    <div className="register-top">
                        <div className="input-div">
                            <label className="first-label" htmlFor="name-register">
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
                            <label htmlFor="surname-register">Ingrese su Apellido:</label>
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
                            <label htmlFor="email-register">Ingrese su Email:</label>
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
                                <label htmlFor="age-register">Fecha de nacimiento:</label>
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
                                <label htmlFor="admin-register">Tipo de usuario:</label>
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
                            <label htmlFor="password-register">Ingrese su Contraseña:</label>
                            <div className="set-password-div">
                                <h5 ref={passwordErr} className="error-set-hidden"></h5>
                                {/* password-cap-register */}
                                <h5 ref={capPass} className="error-set-hidden"></h5>
                                {/* password-num-register */}
                                <h5 ref={numPass} className="error-set-hidden"></h5>
                                {/* password-let-register */}
                                <h5 ref={speCarPass} className="error-set-hidden"></h5>
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
                            <label htmlFor="passwordConfirm">Confirme su Contraseña:</label>
                            <h5 ref={passwordConfirmErr} className="error-set-hidden"></h5>
                            <input
                                className="controls-register"
                                type="password"
                                name="passwordConfirm-register"
                                id="passwordConfirm-register"
                                value={passwordConfirm}
                                onChange={handlePasswordConfirm}
                                onBlur={validationPasswordConfirm}
                                ref={refPasswordConfirm}
                            />
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
