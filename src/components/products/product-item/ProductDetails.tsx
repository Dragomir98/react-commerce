import { doc, getDoc } from "@firebase/firestore";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import firestoreDb from "../../../firebase";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Product from "../../../models/Product";
import { addCartItem } from "../../../store/features/cartSlice";
import { wishlistItemsState } from "../../../store/features/wishlistSlice";
import Alert from "../../../UI/Alert";
import Button from "../../../UI/Button";
import Loader from "../../../UI/Loader";
import WishlistToggler from "../../pages/wishlist/WishlistToggler";
import ProductForm from "../ProductForm";

const ProductDetails: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const locationId = location.pathname.split("/")[2];
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [quantity, setQuantity] = useState<number>(
    currentProduct?.stockQuantity as number
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(wishlistItemsState);
  const [wishlistState, setWishlistState] = useState<boolean>(false);

  const docRef = doc(firestoreDb, "products", locationId);

  const getProductById = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setCurrentProduct(data as Product);
      setQuantity(data.quantity);
    } else {
      console.log("Document doesnt exist");
    }
  };

  const quantityChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const updatedQuantity: number = +e.target.value;
      if (updatedQuantity > (currentProduct?.stockQuantity as number)) {
        return;
      }
      setQuantity(updatedQuantity);
    },
    []
  );

  const addToCartHandler = (quantity: number) => {
    if (quantity > (currentProduct?.stockQuantity as number)) {
      return;
    }

    if (currentProduct) {
      dispatch(
        addCartItem({
          ...currentProduct,
          quantity,
          price: currentProduct.price,
          id: locationId,
        })
      );
    }
  };

  useEffect(() => {
    const eventTimer = setTimeout(() => {
      setIsLoading(true);
      try {
        getProductById();
      } catch (err) {
        console.log(`Error: ${err}`);
      }
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(eventTimer);
    };
  }, []);

  useEffect(() => {
    if (wishlistItems.includes(currentProduct as Product)) {
      setWishlistState(true);
      console.log("includes");
      return;
    }
    console.log("does not include");
    setWishlistState(false);
  }, [wishlistItems, wishlistState]);

  return (
    <section className="my-10">
      {!currentProduct && <Loader />}
      {!isLoading && currentProduct !== undefined && (
        <>
          <div>
            <Button onClick={() => history.goBack()}>Back</Button>
          </div>
          <div className="flex flex-col md:flex-row justify-center sm:justify-between my-5">
            <div className="relative flex-grow rounded-tl-md rounded-tr-md md:rounded-md shadow-2xl max-w-full md:max-w-1/2 max-h-80 md:max-h-full">
              <img
                src={currentProduct?.image}
                alt={currentProduct?.title}
                className="object-cover w-full max-h-inherit rounded-tl-md rounded-tr-md md:rounded-md"
              />
              <WishlistToggler
                product={{
                  ...currentProduct,
                  id: locationId,
                }}
                id={locationId}
                wishlistState={wishlistState}
                position="absolute"
              />
            </div>

            <div className="flex-grow rounded-bl-md rounded-br-md md:rounded-md p-5 md:ml-5 bg-primary-light dark:bg-primary-dark shadow-2xl mb-10 md:mb-0">
              <div className="text-alt-light">
                <h2 className="text-3xl font-semibold">
                  {currentProduct?.title}
                </h2>
                <p className="text-xl font-semibold">
                  Category: {currentProduct?.category}
                </p>
                <p className="text-xl font-semibold mt-5">
                  Price: {currentProduct?.price}$
                </p>
              </div>
              <div className="my-5">
                <div className="my-5">
                  {currentProduct?.isAvailable ? (
                    <Alert
                      message="This product is available"
                      variant="success"
                    />
                  ) : (
                    <Alert
                      message="This product is currently out of stock"
                      variant="error"
                    />
                  )}
                </div>
                {currentProduct?.isAvailable && (
                  <div className="flex flex-row justify-center">
                    <ProductForm
                      quantity={quantity}
                      onQuantityChange={quantityChangeHandler}
                    />
                    <Button
                      onClick={() => addToCartHandler(quantity)}
                      variant="secondary"
                      extraClasses="ml-2"
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetails;
