import { FC, useReducer } from "react";
import ContextType from "../models/ContextType";
import Product from "../models/Product";
import CartContext from "./cart-context";

enum ActionKind {
  ADD = "ADD_ITEM",
  REMOVE = "REMOVE_ITEM",
  CLEAR = "CLEAR_CART",
}

interface Action {
  type: ActionKind;
  payload?: Product | any; //any should be replaced or fixed
}

interface State {
  items: Product[];
  quantity: number;
  totalPrice: number;
}

const defaultCartState: State = {
  items: [],
  quantity: 0,
  totalPrice: 0,
};

const cartReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.ADD:
      var updatedTotalPrice =
        state.totalPrice + payload.price * payload.quantity;

      var updatedQuantity = state.quantity + payload.quantity;

      var existingItemIndex = state.items.findIndex(
        (item: Product) => item.id === payload.id
      );
      var existingCartItem: Product = state.items[existingItemIndex];
      var updatedItems: Product[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = (state.items as Product[]).concat(payload);
      }

      return {
        items: updatedItems,
        quantity: updatedQuantity,
        totalPrice: updatedTotalPrice,
      };
    case ActionKind.REMOVE:
      var existingItemIndex = state.items.findIndex(
        (item) => item.id === payload
      );
      var existingCartItem = state.items[existingItemIndex];
      var updatedTotalPrice = state.totalPrice - existingCartItem.price;
      var updatedTotalQuantity = state.quantity - 1;

      var updatedItems: Product[];

      if (existingCartItem.quantity === 1) {
        console.log("its one");
        updatedItems = state.items.filter((item) => item.id !== payload);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        quantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    case ActionKind.CLEAR:
      return defaultCartState;
    default:
      return state;
  }
};

const CartProvider: FC = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (item: Product) => {
    dispatchCartAction({ type: ActionKind.ADD, payload: item });
  };

  const removeFromCartHandler = (id: string) => {
    dispatchCartAction({ type: ActionKind.REMOVE, payload: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: ActionKind.CLEAR });
  };

  const cartContext: ContextType = {
    items: cartState.items,
    quantity: cartState.quantity,
    totalPrice: cartState.totalPrice,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
