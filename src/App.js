import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import NoMatch  from "./NoMatch";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";


function App() {
  const[path,setPath]=useState("");

  useEffect(()=>{ 
    
  const data=  localStorage.getItem("id");
    console.log(data,"66666");
    if(data == "true"){
      setPath("dashboard");
    }
    else{
      setPath("/")
    }
  },[])

  return (
    <> 
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>     
    <Route path={path} element={<Dashboard/>}></Route>
      <Route path="*" element={<NoMatch />}></Route>
      </Routes>
   
    </>
  );
}

export default App;
