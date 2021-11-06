import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import Product from "../../models/Product";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { LoopDocumentIcon } from "../../UI/Icons";
import ProductForm from "./ProductForm";
import { addCartItem } from "../../store/features/cartSlice";
import WishlistToggler from "../pages/wishlist/WishlistToggler";
import { wishlistItemsState } from "../../store/features/wishlistSlice";
import Alert from "../../UI/Alert";
import { Link } from "react-router-dom";

const ProductItem: FC<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const wishlistItems = useAppSelector(wishlistItemsState);
  const [wishlistState, setWishlistState] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const quantityChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (+e.target.value > product.stockQuantity) {
        return;
      }
      const updatedQuantity = +e.target.value;
      setQuantity(updatedQuantity);
    },
    []
  );

  const addToCartHandler = useCallback((quantity: number) => {
    if (quantity > product.stockQuantity) {
      return;
    }
    dispatch(
      addCartItem({
        ...product,
        quantity,
      })
    );
  }, []);

  useEffect(() => {
    if (wishlistItems.includes(product)) {
      setWishlistState(true);
      return;
    }
    setWishlistState(false);
  }, [wishlistItems, wishlistState]);

  return (
    <li className="m-2 hover-trigger">
      <Card>
        <div className="relative hover-target">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-52 rounded-md w-full m-auto mb-4 hover-target"
          />
          <WishlistToggler
            product={product}
            id={product.id}
            wishlistState={wishlistState}
            position="absolute"
          />
          <Link
            to={`/product/${product.id}`}
            className="absolute top-1 right-1 cursor-pointer transition-all ease-in-out duration-100 text-info hover:text-hover-link"
          >
            <LoopDocumentIcon />
          </Link>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="mr-2">
            <Link
              to={`/product/${product.id}`}
              className="text-xl font-semibold hover:underline"
            >
              {product.title}
            </Link>
            <p className="text-md font-semibold">
              Category: {product.category}
            </p>
            <p className="text-md font-semibold mb-2">
              Price: {product.price.toFixed(2)}$
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center mt-2 flex-row">
          {product.isAvailable ? (
            <ProductForm
              quantity={quantity}
              onQuantityChange={quantityChangeHandler}
            />
          ) : (
            <Alert variant="error" message="Out of Stock!" />
          )}
          {product.isAvailable && (
            <Button
              variant="secondary"
              extraClasses="ml-2 w-full"
              onClick={() => addToCartHandler(quantity)}
            >
              Add
            </Button>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
