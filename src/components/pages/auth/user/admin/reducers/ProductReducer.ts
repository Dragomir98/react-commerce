import Actions from "./ProductActions";
import { ActionProps, StateProps } from "./ReducerModels";

export const productState: StateProps = {
  id: "",
  title: "",
  price: 0,
  quantity: 0,
  stockQuantity: 0,
  isAvailable: false,
  category: "",
  image: "",
};

export const ProductFormReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case Actions.SET_ID:
      var updatedProduct = {
        ...state,
        id: action.payload.id,
      };
      return updatedProduct;
    case Actions.SET_TITLE:
      var updatedProduct = {
        ...state,
        title: action.payload.title,
      };
      return updatedProduct;
    case Actions.SET_PRICE:
      var updatedProduct = {
        ...state,
        price: action.payload.price,
      };
      return updatedProduct;
    case Actions.SET_QUANTITY:
      var updatedQuantity = action.payload.quantity;
      var updatedStockQuantity = action.payload.stockQuantity;
      var updatedIsAvailable = action.payload.isAvailable;

      if (updatedStockQuantity === 0) {
        updatedQuantity = 0;
        updatedIsAvailable = false;
      }

      if (updatedStockQuantity > 0) {
        updatedQuantity = 1;
        updatedIsAvailable = true;
      }

      return {
        ...state,
        quantity: updatedQuantity,
        stockQuantity: updatedStockQuantity,
        isAvailable: updatedIsAvailable,
      };
    case Actions.SET_CATEGORY:
      var updatedProduct = {
        ...state,
        category: action.payload.category,
      };
      return updatedProduct;
    case Actions.SET_IMAGE:
      var updatedProduct = {
        ...state,
        image: action.payload.image,
      };
      return updatedProduct;

    default:
      return state;
  }
};
