import React, { createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth,setIsAuth] = React.useState(false)

    const login = ()=>{
        setIsAuth(true)
    }
    const logout=()=>{
        setIsAuth(false)
        Navigate('/')
    }


  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
