import { FC, useContext } from "react";
import CartContext from "../../store/cart-context";
import Alert from "../../UI/Alert";
import Button from "../../UI/Button";
import CartItem from "./CartItem";

const Cart: FC = () => {
  const cartCtx = useContext(CartContext);

  const clearCartHandler = () => {
    cartCtx.clearCart();
  };

  const removeItemHandler = (id: string) => {
    cartCtx.removeFromCart(id);
  };

  return (
    <div className="bg-alt-default shadow-inner p-5 m-auto rounded-lg w-auto sm:w-96">
      <h2 className="font-semibold text-3xl text-center">Cart</h2>
      <hr className="my-2" />
      <p className="font-semibold my-2 text-xl">Items: {cartCtx.quantity}</p>
      <ul>
        {cartCtx.items.length === 0 ? (
          <Alert message="Your cart is currently empty!" variant="error" />
        ) : (
          cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={removeItemHandler}
            />
          ))
        )}
      </ul>
      {cartCtx.items.length > 0 && (
        <>
          <hr className="my-2" />
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <p className="font-semibold my-2 sm:my-0">
              Total Price: {cartCtx.totalPrice.toFixed(2)}$
            </p>
            <Button onClick={() => clearCartHandler()}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
