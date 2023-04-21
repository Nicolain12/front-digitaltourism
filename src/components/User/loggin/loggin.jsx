import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './loggin.css';

function Loggin() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setEmailError("Tienes que ingresar un email");
      setValidEmail(false);
    }
    if (email.length < 10) {
      setEmailError("Tienes que ingresar un email valido");
      setValidEmail(false);
    }
    if (password === "") {
      setPasswordError("Tienes que ingresar una contraseña");
      setValidPassword(false);
    }
    if (password.length < 6) {
      setPasswordError("Tienes que ingresar una contraseña valida");
      setValidPassword(false);
    }
    if (email.length >= 10) {
      setEmailError("");
      setValidEmail(true);
    }
    if (password.length >= 6) {
      setPasswordError("");
      setValidPassword(true);
    }
    if (email.length >= 10 && password.length >= 6) {

      

      const apiFetch = async function logginApi() {
        const fetchLoggin = await fetch("http://localhost:3001/api/users/loggin", {
          method: "POST",
          body: JSON.stringify({ email, password, remember }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        const jsonApi = await fetchLoggin.json()
        return jsonApi
      }
      console.log();


      // if (apiFetch.info.status == 200) {
      //   delete apiFetch.data.password
      //   // sessionStorage.setItem("userLogged", JSON.stringify(resApi.data));
      //   // history.push("/");
      //   console.log(apiFetch.data);
      // }
      // if (apiFetch.info.status == 400) {
      //   if (
      //     apiFetch.info.msg === "Contraseña invalida" ||
      //     apiFetch.info.msg === "Informacion invalida"
      //   ) {
      //     setEmailError(apiFetch.info.msg);
      //   } else {
      //     setEmailError("Informacion invalida");
      //   }
      // }
    }
  };

  // -------------------------------------------------------------
  // async function enviarDatos(email, password) {
  //   const data = { email: email, password: password };
  //   const opciones = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   };
  //   const respuesta = await fetch('http://localhost:3001/api/users/loggin', opciones);
  //   const jsonRespuesta = await respuesta.json();
  //   console.log(jsonRespuesta);
  // }
  // enviarDatos('ejemplo@gmail.com', 'password123');
  // -------------------------------------------------------------

  return (
    <div className="App-loggin">
      <main>
        <form className="form-login" id="form-login" onSubmit={handleSubmit}>
          <h4>Iniciar sesión </h4>
          <h6 className="error-msg" id="errors-email-loggin">{emailError}</h6>
          <input
            className={`${validEmail ? "controls" : "invalid-input"}`}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese su Correo"
            onChange={handleEmailChange}
          />
          <h6 className="error-msg" id="errors-password-loggin">{passwordError}</h6>
          <input
            className={`${validPassword ? "controls" : "invalid-input"}`}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Ingrese su Contraseña"
            onChange={handlePasswordChange}
          />
          <label htmlFor="remember">
            <input
              id="remember"
              type="checkbox"
              name="remember"
              checked={remember} 
              onChange={(e) => setRemember(e.target.checked)}
            />
            Recordarme
          </label>
          <div className="button-loggin-div">
            <button id="button-loggin" className="botons" type="submit">Iniciar sesion</button>
          </div>
          <p> ¿Se te olvidó tu contraseña?<Link to="#"> Click Aqui</Link></p>
        </form>
      </main>
    </div>
  );
}

export default Loggin;
