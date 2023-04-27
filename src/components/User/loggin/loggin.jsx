import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './loggin.css'

function Loggin() {
  // *****************************************************************************************************
  async function fetchApi(endpoint, config) {
    try {
      const response = await fetch(endpoint, config)
      const jsonResponse = await response.json()
      if (jsonResponse.info.status == 200) {
        console.log(jsonResponse);
        if(jsonResponse.info.token){
          console.log('TOKEN:');
          console.log(jsonResponse.info.token);
        }
        sessionStorage.setItem('userLogged', JSON.stringify(jsonResponse.data))
        window.location.href = '/'
      }
      if (jsonResponse.info.status == 400) {
        refPasswordError.current.innerHTML = jsonResponse.info.msg
        if (jsonResponse.info.msg == 'Invalid password') {
          refPasswordError.current.innerHTML = 'invalid password'
          refPassword.current.className = 'invalid-impunt'
        } if (jsonResponse.info.msg == 'Invalid information') {
          refEmailError.current.innerHTML = 'invalid information'
          refEmail.current.className = 'invalid-impunt'
        } 
      } 
    } catch (err) {
      refEmailError.current.innerHTML = 'Smoething goes wrong please try again'
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    }
  }
  // *****************************************************************************************************
  function addValueToArray(array, value) {
    if (!array.includes(value)) {
      array.push(value)
    } else {
      return array
    }
    return array
  }
  //***** States *****
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  // ***** References *****
  const refEmail = useRef()
  const refPassword = useRef()
  const refEmailError = useRef()
  const refPasswordError = useRef()

  //***** Changes *****
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    refEmailError.current.innerHTML = ''
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    refPasswordError.current.innerHTML = ''
  }
  const handleRememberChange = (event) => {
    setRemember(event.target.checked)
  }


  //***** Submit *****
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      email,
      password,
      remember
    }
    const loggAuth = []

    if (email === "") {
      refEmailError.current.innerHTML = 'Email is required'
      refEmail.current.className = 'invalid-input'
      addValueToArray(loggAuth, 'email')
    }

    if (email.length < 13) {
      refEmailError.current.innerHTML = 'Invalid email'
      refEmail.current.className = 'invalid-input'
      addValueToArray(loggAuth, 'email')
    } else {
      refEmail.current.className = 'controls'
    }
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[\W_]/.test(password)
    if (password.length < 8 || !hasUpperCase || !hasNumber || !hasSpecialChar) {
      refPasswordError.current.innerHTML = 'Invalid password'
      refPassword.current.className = 'invalid-input'
      addValueToArray(loggAuth, 'password')
    } else {
      refPassword.current.className = 'controls'
    }
    if (password === "") {
      refPasswordError.current.innerHTML = 'Password is required'
      refPassword.current.className = 'invalid-input'
      addValueToArray(loggAuth, 'password')
    }
    if (loggAuth.length == 0) {
      console.log('Fetch');

        return fetchApi('http://localhost:3001/api/users/loggin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })

    }
  }

  return (
    <div className="App-loggin">
      <main className="logginmain">
        <form className="form-login" id="form-login" onSubmit={handleSubmit}>
          <h4>Iniciar sesión </h4>
          <h6 className="error-msg" ref={refEmailError}></h6>
          <input
            className="controls"
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese su Correo"
            ref={refEmail}
            onChange={handleEmailChange}
          />
          <h6 className="error-msg" id="errors-password-loggin" ref={refPasswordError}></h6>
          <input
            className="controls"
            ref={refPassword}
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
              onChange={handleRememberChange}
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
  )
}

export default Loggin
