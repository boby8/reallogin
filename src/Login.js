import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  

  const [loginData, setLoginData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const [id, setId] = useState(false);
  function getLoginData() {
    let url = `https://secure-refuge-14993.herokuapp.com/login?username=${userName}&password=${password}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoginData(data);
        console.log(data);
        setId(true);
      });
  }

  const validateUserName = () => {
    if (userName.length == 0) {
      setErrorName("* Please Enter your Name");
    } else {
      setErrorName("");
    }
  };

  const validatePassword = () => {
    if (password.length == 0) {
      setErrorPassword("* Please Enter Your Password ");
    } else {
      setErrorPassword("");
    }
  };

  return (
    <>
      <main>
        <h1>Login here</h1>
        <form >
          <label htmlFor="name">Fullname : </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />

          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button
            onClick={() => navigate("dashboard")}>
            Login
          </button>
        </form>
      </main>
    </>
  );
}
