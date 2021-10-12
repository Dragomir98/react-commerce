import { ChangeEvent, FC, useEffect, useState } from "react";
import Product from "../../models/Product";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { CartIcon } from "../../UI/Icons";
import ProductForm from "./ProductForm";
import { addCartItem } from "../../store/features/cartSlice";
import WishlistToggler from "../pages/wishlist/WishlistToggler";
import { wishlistItemsState } from "../../store/features/wishlistSlice";

const ProductItem: FC<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const wishlistItems = useAppSelector(wishlistItemsState);
  const [wishlistState, setWishlistState] = useState(false);
  const dispatch = useAppDispatch();

  const quantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedQuantity = +e.target.value;
    setQuantity(updatedQuantity);
  };

  const addToCartHandler = (quantity: number) => {
    dispatch(
      addCartItem({
        ...product,
        quantity,
      })
    );
  };

  useEffect(() => {
    if (wishlistItems.includes(product)) {
      setWishlistState(true);
    } else {
      setWishlistState(false);
    }
  }, [wishlistItems, wishlistState]);

  return (
    <li className="m-2 max-w-1/2">
      <Card>
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-52 rounded-md w-full m-auto mb-4"
          />
          <WishlistToggler
            product={product}
            id={product.id}
            wishlistState={wishlistState}
          />
          {/* <div
            className={`absolute top-1 left-1 pointer-events-none p-1 rounded-md text-alt-default ${
              product.isAvailable ? "bg-success" : "bg-error"
            }`}
          >
            {product.isAvailable ? "Available" : "Out of Stock"}
          </div> */}
        </div>

        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-xl font-semibold">{product.title}</p>
            <p className="text-md font-semibold mb-2">
              Price: {product.price.toFixed(2)}$
            </p>
          </div>

          <ProductForm
            quantity={quantity}
            onQuantityChange={quantityChangeHandler}
          />
        </div>

        <div className="flex justify-around mt-2">
          <Button extraClasses="flex-grow mr-2 flex justify-center">
            <CartIcon />
          </Button>
          <Button
            extraClasses="flex-grow ml-2"
            onClick={() => addToCartHandler(quantity)}
          >
            Order
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
