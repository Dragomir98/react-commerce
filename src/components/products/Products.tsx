import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  productErrorSelector,
  productItemsSelector,
  productLoadingSelector,
} from "../../store/features/products/productsSelectors";
import { getProducts } from "../../store/features/products/productsSlice";
import Alert from "../../UI/Alert";
import Loader from "../../UI/Loader";
import ProductItem from "./ProductItem";

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productItemsSelector);
  const isLoading = useAppSelector(productLoadingSelector);
  const error = useAppSelector(productErrorSelector);

  useEffect(() => {
    try {
      dispatch(getProducts());
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Alert message="Error fetching products" variant="error" />}
      {!isLoading && products.length === 0 && (
        <p className="text-center text-2xl font-semibold">
          There are currently no products!
        </p>
      )}
      {products.length > 0 && (
        <ul className="m-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
