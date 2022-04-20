import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Login from "./Login";
import Signup from "./Signup";
import NoMatch  from "./NoMatch";
import Navbar from "./Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="details" element={<Details/>}></Route>
      <Route path="*" element={<NoMatch />}></Route>
      </Routes>
   
    </>
  );
}

export default App;
