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

const Cart: FC = () => {
  const cartItems = useAppSelector(cartItemsState);
  const cartQuantity = useAppSelector(cartQuantityState);
  const cartTotalPrice = useAppSelector(cartTotalPriceState);
  const dispatch = useAppDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const removeItemHandler = (id: string) => {
    console.log("remove");
    dispatch(removeCartItem(id));
  };

  return (
    <div className="bg-alt-light dark:bg-alt-dark shadow-defaultInner p-5 m-auto rounded-lg w-auto sm:w-96">
      <h2 className="font-semibold text-3xl text-center">Cart</h2>
      <hr className="my-2" />
      <p className="font-semibold my-2 text-xl">Items: {cartQuantity}</p>
      {cartItems.length <= 0 ? (
        <Alert message="Your cart is currently empty!" variant="error" />
      ) : (
        <div>
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
            <p className="font-semibold my-2 sm:my-0">
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
