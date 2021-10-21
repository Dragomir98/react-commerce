import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  productErrorSelector,
  productItemsSelector,
  productLoadingSelector,
} from "../../store/features/products/productsSelectors";
import { getProducts } from "../../store/features/products/productsSlice";
import Alert from "../../UI/Alert";
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
      {isLoading && <p className="text-center text-2xl">Loading...</p>}
      {error && <Alert message="Error fetching products" variant="error" />}
      {products.length === 0 && (
        <p className="text-center text-2xl">There are currently no products!</p>
      )}
      {products.length > 0 && (
        <ul className="m-auto w-full flex justify-center flex-row flex-wrap container">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
