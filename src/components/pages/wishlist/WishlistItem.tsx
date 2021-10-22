import { FC } from "react";
import Product from "../../../models/Product";
import Alert from "../../../UI/Alert";
import WishlistToggler from "./WishlistToggler";

interface Props {
  product: Product;
}

const WishlistItem: FC<Props> = ({ product }) => {
  return (
    <div className="relative m-auto flex shadow-defaultInner justify-between items-center bg-alt-light dark:bg-card-dark rounded-lg p-3">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-1/4 rounded-lg"
      />
      <div className="ml-2 flex flex-row flex-grow h-full">
        <div className="flex flex-col flex-grow h-full min-h-85 sm:min-h-105 justify-between">
          <div>
            <h2 className="font-semibold text-xl">{product.title}</h2>
            <span className="font-semibold">Category: {product.category}</span>
          </div>

          <span className="font-semibold">
            Price: {product.price.toFixed(2)}$
          </span>
        </div>

        <div className="flex flex-col items-end h-full min-h-85 sm:min-h-105 justify-between">
          <WishlistToggler
            product={product}
            id={product.id}
            wishlistState={true}
            position="unset"
          />
          {product.isAvailable ? (
            <Alert variant="success" message="In Stock" />
          ) : (
            <Alert variant="error" message="Out of Stock" />
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
