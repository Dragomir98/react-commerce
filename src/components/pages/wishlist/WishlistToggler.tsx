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
}

const WishlistToggler: FC<Props> = ({ product, id, wishlistState }) => {
  const dispatch = useAppDispatch();

  const addToWishlistHandler = (product: Product) => {
    dispatch(addWishlistItem(product));
  };

  const removeFromWishlistHandler = (id: string) => {
    dispatch(removeWishlistItem(id));
  };

  return (
    <div>
      {wishlistState ? (
        <span
          className="absolute top-1 left-1 cursor-pointer transition ease-in-out duration-150 hover:text-secondary-default"
          onClick={() => removeFromWishlistHandler(id)}
        >
          <StarFilled />
        </span>
      ) : (
        <span
          className="absolute top-1 left-1 cursor-pointer transition ease-in-out duration-150 hover:text-secondary-default"
          onClick={() => addToWishlistHandler(product)}
        >
          <StarIcon />
        </span>
      )}
    </div>
  );
};

export default WishlistToggler;
