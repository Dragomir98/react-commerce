import { FC } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import Product from "../../../models/Product";
import { removeWishlistItem } from "../../../store/features/wishlistSlice";
import Alert from "../../../UI/Alert";
import { StarFilled } from "../../../UI/Icons";

interface Props {
  product: Product;
}

const WishlistItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const removeFromWishlistHandler = () => {
    dispatch(removeWishlistItem(product.id));
  };

  return (
    <div className="relative m-auto flex shadow-inner justify-between items-center bg-alt-default rounded-lg p-2">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-1/4 rounded-lg"
      />
      <div className="ml-2 flex flex-col flex-grow h-full">
        <h2 className="font-semibold text-xl">{product.title}</h2>
        <div className="font-semibold">Category: {product.category}</div>
        <div className="flex flex-row items-end justify-between mt-auto">
          <div className="font-semibold">
            Price: {product.price.toFixed(2)}$
          </div>
          <div>
            {product.isAvailable ? (
              <Alert variant="success" message="In Stock" />
            ) : (
              <Alert variant="error" message="Out of Stock" />
            )}
          </div>
        </div>
      </div>
      <span
        className="absolute right-2 top-2 cursor-pointer transition ease-in-out duration-150 hover:text-secondary-default"
        onClick={removeFromWishlistHandler}
      >
        <StarFilled />
      </span>
    </div>
  );
};

export default WishlistItem;
