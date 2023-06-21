import React, { SyntheticEvent, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const USERNAME = "jcamacho@gmail.com";
const PASSWORD = "123456";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();
    if (username === USERNAME && password === PASSWORD) {
        window.localStorage.setItem('isLogged', 'true')
        navigate('/search')
    } else {
        setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="loginContainer">
      <h1 className="loginContainer__title">Login</h1>
      <form
        name="loginForm"
        className="loginContainer__form"
        onSubmit={handleLogin}
      >
        <label className="loginContainer__form--label" htmlFor="username">
          Usuario
        </label>
        <input
          className="loginContainer__form--input"
          name="username"
          type="email"
          placeholder="Usuario"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />

        <label className="loginContainer__form--label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="loginContainer__form--input"
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        {error && (<p>{error}</p>)}
        <button className="loginContainer__form--button" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
