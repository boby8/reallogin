import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
