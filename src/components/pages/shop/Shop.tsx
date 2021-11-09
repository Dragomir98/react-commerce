import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  productErrorSelector,
  productItemsSelector,
  productLoadingSelector,
} from "../../../store/features/products/productsSelectors";
import { getProducts } from "../../../store/features/products/productsSlice";
import Alert from "../../../UI/Alert";
import Loader from "../../../UI/Loader";
import Products from "../../products/Products";
import SidebarFilter from "./sidebar/SidebarFilter";

const ShopPage = () => {
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
    <section>
      <h1 className="text-3xl text-center font-semibold py-10">Shop</h1>
      {error && <Alert message="Error fetching products" variant="error" />}
      {!isLoading && products.length === 0 && (
        <p className="text-center text-2xl font-semibold">
          There are currently no products!
        </p>
      )}
      {!isLoading ? (
        <div className="flex flex-col md:flex-row">
          <SidebarFilter />
          {products.length > 0 && <Products products={products} />}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ShopPage;
