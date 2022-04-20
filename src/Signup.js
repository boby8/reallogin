import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function getSignUpData() {
    let url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${userName}&password=${password}&role=${role}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSignUp(data);
        console.log(data);
      });
  }

  return (
    <>
      <main>
       
        <h1>Sign-up here</h1>
        <label htmlFor="name">Fullname : </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="roll">Roll : </label>
        <select
          name="roll"
          id="roll"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="Front-end developer">Front-end developer</option>
          <option value="Back-end developer">Back-end developer</option>
          <option value="Full-Stack-Developer">Full-Stack-Developer</option>
        </select>
        <br />
        <br />

        <button onClick={getSignUpData}>Sign Up</button>  <br />
        <br />
        <button onClick={() => navigate("login")}>Login</button>
      </main>
    </>
  );
}
