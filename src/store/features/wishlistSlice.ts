import { createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";
import { RootState } from "../store";

interface WishlistState {
  items: Product[];
  quantity: number;
}

const initialState: WishlistState = {
  items: [],
  quantity: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlistItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];

      if (!existingItem) {
        state.items.push(action.payload);
        state.quantity += 1;
      }
    },
    removeWishlistItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.quantity -= 1;
      }
    },
  },
});

export const { addWishlistItem, removeWishlistItem } = wishlistSlice.actions;

export const wishlistItemsState = (state: RootState) => state.wishlist.items;
export const wishlistQuantityState = (state: RootState) =>
  state.wishlist.quantity;

export default wishlistSlice.reducer;
