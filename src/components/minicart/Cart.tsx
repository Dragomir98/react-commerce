import { FC } from "react";
import {
  cartItemsState,
  cartQuantityState,
  cartTotalPriceState,
  clearCart,
  removeCartItem,
} from "../../store/features/cartSlice";
import Alert from "../../UI/Alert";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useHistory } from "react-router";

const Cart: FC = () => {
  const cartItems = useAppSelector(cartItemsState);
  const cartQuantity = useAppSelector(cartQuantityState);
  const cartTotalPrice = useAppSelector(cartTotalPriceState);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const clearCartHandler = () => {
    dispatch(clearCart());
    history.replace("/shop");
  };

  const removeItemHandler = (id: string) => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className="w-auto sm:w-96 px-5 pt-5">
      <p className="font-semibold my-2 text-xl">Items: {cartQuantity}</p>
      {cartItems.length <= 0 ? (
        <Alert message="Your cart is currently empty!" variant="error" />
      ) : (
        <div className="max-h-250 overflow-y-scroll">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={removeItemHandler}
            />
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <hr className="my-2" />
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <p className="text-xl font-semibold my-2 sm:my-0">
              Total Price: {cartTotalPrice.toFixed(2)}$
            </p>
            <Button onClick={() => clearCartHandler()}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
