import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard";

export default function Login() {
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");

  const [loginData, setLoginData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [inValidError, setInValidError] = useState([]);
  const [id, setId] = useState("");

  function getLoginData() {
    let url = `https://secure-refuge-14993.herokuapp.com/login?username=${userName}&password=${password}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoginData(data);
        console.log(data);

        if (data.error == 1) {
          setInValidError(loginData.message);
        } else if (data.error == 0) {
          localStorage.setItem(id, "true");
          setInValidError("");
          console.log("0");
          alert("You Are Logined");
          setPassword("");
          setUserName("");
          dashBoard();
        }
      })
      
      .catch((error) => {
        console.log(error);
      });
  }

  const validateUserName = () => {
    if (userName.length == 0) {
      setErrorName("* Please Enter your Name to login");
    } else {
      setErrorName("");
    }
  };

  const validatePassword = () => {
    if (password.length == 0) {
      setErrorPassword("* Please Enter Your Password to login");
    } else {
      setErrorPassword("");
    }
  };

  const getData = () => {
    if (userName.length != 0 && password.length != 0 && password.length >= 0) {
      getLoginData();
      console.log(loginData, "5555555555555555555555");
    }
  };

  const dashBoard = () => {
    const data = localStorage.getItem(id);
    console.log(data);
    if (data === "true") {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <main>
        <h1>Login here</h1>

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
        <p>{errorName}</p>
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
        <p>{errorPassword}</p>
        <br />
        <button
          onClick={() => {
            validateUserName();
            validatePassword();
            getData();
          }}
        >
          Login
        </button>
        {/* <button onClick={() => navigate("/details")}></button> */}
        <p>{inValidError}</p>
      </main>
    </>
  );
}
