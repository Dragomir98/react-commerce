import { createSelector } from "reselect";
import { RootState } from "../../store";
import { ProductsState } from "./productsSlice";

export const ProductSelector: (state: RootState) => ProductsState = (
  state: RootState
) => state.products;

export const productItemsSelector = createSelector(
  ProductSelector,
  (products) => {
    return products.items;
  }
);

export const productLoadingSelector = createSelector(
  ProductSelector,
  (products) => {
    return products.loading;
  }
);

export const productErrorSelector = createSelector(
  ProductSelector,
  (products) => {
    return products.hasErrors;
  }
);
