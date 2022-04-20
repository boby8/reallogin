import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[errorPassword,setErrorPassword]=useState("");
  const[roleError,setRoleError]=useState("");

  const getSignUpData = () => {
    let url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${userName}&password=${password}&role=${role}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSignUp(data);
        console.log(data);
      });
  };

  const validateUserName = () => {
    if (userName.length == 0) {
      setErrorMessage("* Please Enter your Name");
     
    } else {
      setErrorMessage("");
    }
  };

  const validatePassword =()=>{
    if(password.length == 0){
      setErrorPassword("* Please Enter Your Password ");
    }
    else if(password.length < 8){
      setErrorPassword("* Please Enter Minimum 8 character");
    }
    else{
      setErrorPassword("")
    }
  }
  const validateRole = () =>{
    if(role.length== 0){
      setRoleError("* Please select your role")
    }
    else{
      setRoleError("");
    }
  }

  const errorr = () =>{
    console.log(signUp.message)
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
          value={userName}
          autoComplete="off"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <p>{errorMessage}</p>
        <br />
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <p>{errorPassword}</p>
        <br />
        <label htmlFor="roll">Roll : </label>
        <select
          name="roll"
          id="roll"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="Front-end developer">Front-end developer</option>
          <option value="Back-end developer">Back-end developer</option>
          <option value="Full-Stack-Developer">Full-Stack-Developer</option>
          <option value="Graphic designer">Graphic designer</option>
        </select>
        <br />
        <p>{roleError}</p>
        <br />
        <button
          onClick={() => {
           
            validateUserName();
            validatePassword();
            validateRole();
            getSignUpData();
            errorr();
          }}
        >
          Sign Up
        </button>
        <br />
        <br />
        {/* <button onClick={() => navigate("login")}>Login</button>
        <button onClick={()=> navigate("details")}></button> */}
      </main>
    </>
  );
}
