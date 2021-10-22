import { useAppSelector } from "../../hooks/hooks";
import { cartQuantityState } from "../../store/features/cartSlice";

const CartCounter = () => {
  const cartQuantity = useAppSelector(cartQuantityState);

  return (
    <span className="bg-red-500 dark:bg-red-800 shadow-inner rounded-lg px-2 mr-1 font-normal">
      {cartQuantity}
    </span>
  );
};

export default CartCounter;
