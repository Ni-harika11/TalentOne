import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const AddToCart: React.FC = () => {
  const cart = useContext(CartContext);

  // If context is null, return an error message
  if (!cart) {
    return <p>Error: CartProvider is missing!</p>;
  }

  // Destructure safely from context
  const { items, setItems, totalPrice, setTotalPrice } = cart;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items: {items}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => setItems("New Item")}>Add Item</button>
      <button onClick={() => setTotalPrice(totalPrice + 10)}>Increase Price</button>
    </div>
  );
};

export default AddToCart;
