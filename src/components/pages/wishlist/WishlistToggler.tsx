import { FC } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import Product from "../../../models/Product";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../../store/features/wishlistSlice";
import { StarFilled, StarIcon } from "../../../UI/Icons";

interface Props {
  product: Product;
  id: string;
  wishlistState: boolean;
  position?: string;
}

const WishlistToggler: FC<Props> = ({
  product,
  id,
  wishlistState,
  position,
}) => {
  const dispatch = useAppDispatch();

  const addToWishlistHandler = (product: Product) => {
    dispatch(addWishlistItem(product));
  };

  const removeFromWishlistHandler = (id: string) => {
    dispatch(removeWishlistItem(id));
  };

  return (
    <>
      {wishlistState ? (
        <span
          className={`${position} top-1 left-1 cursor-pointer transition ease-in-out duration-150 text-primary-light hover:text-link-lightHover dark:text-secondary-dark dark:hover:text-alt-dark`}
          onClick={() => removeFromWishlistHandler(id)}
        >
          <StarFilled />
        </span>
      ) : (
        <span
          className="absolute top-1 left-1 cursor-pointer transition ease-in-out duration-150 text-primary-light hover:text-link-lightHover dark:text-secondary-dark dark:hover:text-alt-dark"
          onClick={() => addToWishlistHandler(product)}
        >
          <StarIcon />
        </span>
      )}
    </>
  );
};

export default WishlistToggler;
