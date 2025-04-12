import React from "react";
import CartProvider from "./componente/cart/CartProvider";
import AddToCart from "./componente/cart/AddToCart";
const App: React.FC = () => {
  return (
    <CartProvider>
      <AddToCart />
    </CartProvider>
  );
};

export default App;
