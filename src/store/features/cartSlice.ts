import { createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";
import { RootState } from "../store";

enum ActionKind {
  ADD = "ADD_ITEM",
  REMOVE = "REMOVE_ITEM",
  CLEAR = "CLEAR_CART",
}

interface CartState {
  items: Product[];
  quantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  quantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const updatedTotalPrice =
        state.totalPrice + action.payload.price * action.payload.quantity;
      const updatedQuantity = state.quantity + action.payload.quantity;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems: Product[];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + action.payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        quantity: updatedQuantity,
        totalPrice: updatedTotalPrice,
      };
    },
    removeCartItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];

      const updatedTotalPrice = state.totalPrice - existingItem.price;
      const updatedQuantity = state.quantity - 1;

      let updatedItems: Product[];
      if (existingItem.quantity > 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      }

      return {
        items: updatedItems,
        quantity: updatedQuantity,
        totalPrice: updatedTotalPrice,
      };
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export const cartItemsState = (state: RootState) => state.cart.items;
export const cartQuantityState = (state: RootState) => state.cart.quantity;
export const cartTotalPriceState = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
