import { useState } from "react";
import React from "react";

export default function Login() {
  const [loginData, setLoginData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsz, setErrorMsz] = useState([]);

  function getLoginData() {
    let url = `https://secure-refuge-14993.herokuapp.com/login?username=${userName}&password=${password}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoginData(data);
        console.log(data);
      });
  }

  const loginError = () => {
    console.log("error");
    loginData.map((msz) => {
      setErrorMsz(msz.error);
      return errorMsz;
    });
  };

  
  return (

    <>
      <main>
        {/* <div>
        {login.map((msz)=>{
          return setError(msz.error);
        })}
        </div> */}

        <h1>Login here</h1>
        
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
        <button onClick={loginError}>error</button>
    
      </main>
    </>
  );
}
