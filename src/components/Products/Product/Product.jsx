import React from "react";
import { CartContext } from "../../../context/CartContext";



const Product = ({data,id}) => {
    const {count,RemoveFromCart,increment,decrement,addToCart} = React.useContext(CartContext)
  // Note: this id should come from api
  const product = { id: id };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button"onClick={addToCart}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"onClick={increment}>+</button>
        <span data-cy="product-count">{count} </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={decrement}> - </button>
        <button data-cy="product-remove-cart-item-button"onClick={RemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;
