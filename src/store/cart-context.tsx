import { createContext } from "react";
import ContextType from "../models/ContextType";

const CartContext = createContext<ContextType>({
  items: [],
  quantity: 0,
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default CartContext;
