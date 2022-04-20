import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import DashBoard from "./DashBoard";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="dashboard" element={<DashBoard/>}></Route>
    </Routes>
   
    </>
  );
}

export default App;
