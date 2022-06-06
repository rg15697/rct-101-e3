import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [count,setCount]=React.useState(0);
    const addToCart=()=>{
        setCount(1)
    }
    const RemoveFromCart=()=>{
        setCount(0)
    }
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }

  return <CartContext.Provider value={{count,RemoveFromCart,increment,decrement,addToCart}}>{children}</CartContext.Provider>;
};
