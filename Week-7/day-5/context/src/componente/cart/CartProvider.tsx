import React, { useState } from "react";
import { CartContext, CartContextType } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Provide the cart values
  const value: CartContextType = { items, setItems, totalPrice, setTotalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
