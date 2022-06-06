import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
    const {isAuth}= React.useContext()



    if(isAuth) return children;
    else Navigate("/login")

};

export default RequiredAuth;
