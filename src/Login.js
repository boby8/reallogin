import { useState } from "react";
import React from "react";

export default function Login() {
  const [login, setLogin] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function getLoginData() {
    let url = `https://secure-refuge-14993.herokuapp.com/login?username=${userName}&password=${password}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLogin(data);
        console.log(data);
      });
  }

  return (
    <>
      <main>
        <h1>Login here</h1>
        <label htmlFor="name">Fullname : </label>
        <input
          type="text"
          name="name"
          id="name"
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
        <button onClick={getLoginData}>Login</button>
      </main>
    </>
  );
}
