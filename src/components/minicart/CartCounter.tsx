import { FC, HTMLProps } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { cartQuantityState } from "../../store/features/cartSlice";

const CartCounter: FC<HTMLProps<HTMLSpanElement>> = (props) => {
  const cartQuantity = useAppSelector(cartQuantityState);

  return (
    <span
      className="text-alt-light bg-primary-light dark:bg-red-800 shadow-inner rounded-lg px-2 mr-1 font-semibold"
      {...props}
    >
      {cartQuantity}
    </span>
  );
};

export default CartCounter;
