import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const {login} = React.useContext(AuthContext)
    const handleLogin=()=>{
        if(email=="eve.holt@reqres.in" && pass==="eve.holt@reqres.in") Navigate("/")
    }
  return (

    <div>
      <input data-cy="login-email" onChange={(e)=>setEmail(e.target.value)} />
      <input data-cy="login-password" onChange={(e)=>setPass(e.target.value)} />
      <button data-cy="login-submit" onClick={handleLogin}></button>
    </div>
  );
};

export default Login;
