import { createContext } from "react";

// Define the shape of our cart context
export interface CartContextType {
  items: string;
  setItems: (items: string) => void;
  totalPrice: number;
  setTotalPrice: (price: number) => void;
}

// Create a context with a default value of `null`
export const CartContext = createContext<CartContextType | null>(null);
