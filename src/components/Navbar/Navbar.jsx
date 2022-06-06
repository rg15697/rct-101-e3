import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {CartContext} from "../../context/CartContext"
// use react-router Link or NavLink
const Link = <a />;
    
const Navbar = () => {
    const {isAuth,logout} = React.useContext(AuthContext)
    const {count} = React.useContext(CartContext)

    const handleLogin = () =>{
        // if(isAuth) {logout()}
        // else Navigate("/login")
    }
  return (
    // <h1>navbar</h1>
    <div data-cy="navbar">
    <Link data-cy="navbar-home-link">Logo</Link>
    <span data-cy="navbar-cart-items-count">{count}</span>
    <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuth ? "logout" : "login"}</button>
  </div>
  );
};

export default Navbar;
