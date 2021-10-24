import { FC, SyntheticEvent, useReducer, useState } from "react";
import Button from "../../../../../UI/Button";
import Input from "../../../../../UI/Input";
import CategoryMenu from "./CategoryMenu";
import Actions from "./reducers/ProductActions";
import { ProductFormReducer, productState } from "./reducers/ProductReducer";
import { StateProps } from "./reducers/ReducerModels";
import { addDoc, collection } from "@firebase/firestore";
import firestoreDb from "../../../../../firebase";

const AddProductForm: FC<StateProps> = () => {
  const [state, dispatch] = useReducer(ProductFormReducer, productState);
  const [selectedCategory, setSelectedCategory] = useState<string | null | any>(
    null
  );
  const productsDbCollection = collection(firestoreDb, "products");

  const selectValueHandler = (selectedOption: string | null) => {
    setSelectedCategory(selectedOption);
    dispatch({
      type: Actions.SET_CATEGORY,
      payload: { ...state, category: selectedCategory },
    });
  };

  const addProductHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const product = {
        ...state,
        category: selectedCategory.value,
      };

      await addDoc(productsDbCollection, product);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <section className="max-w-full md:max-w-1/2 sm:max-w-3/4 m-auto">
      <h2 className="text-center text-3xl mt-10">Add Product</h2>
      <form>
        <Input
          hideLabel={false}
          label="ID"
          name="id"
          type="text"
          onChange={(e) =>
            dispatch({
              type: Actions.SET_ID,
              payload: { ...state, id: e.target.value },
            })
          }
        />
        <Input
          hideLabel={false}
          label="Title"
          name="title"
          type="text"
          onChange={(e) =>
            dispatch({
              type: Actions.SET_TITLE,
              payload: { ...state, title: e.target.value },
            })
          }
        />
        <Input
          hideLabel={false}
          label="Price"
          name="price"
          type="number"
          onChange={(e) =>
            dispatch({
              type: Actions.SET_PRICE,
              payload: { ...state, price: +e.target.value },
            })
          }
        />
        <Input
          hideLabel={false}
          label="Total Quantity"
          name="total_quantity"
          type="number"
          onChange={(e) =>
            dispatch({
              type: Actions.SET_QUANTITY,
              payload: { ...state, stockQuantity: +e.target.value },
            })
          }
        />
        <CategoryMenu
          onChange={selectValueHandler}
          selectedOption={selectedCategory}
        />
        <Input
          hideLabel={false}
          label="Image"
          name="image"
          type="url"
          onChange={(e) =>
            dispatch({
              type: Actions.SET_IMAGE,
              payload: { ...state, image: e.target.value },
            })
          }
        />
        <Button
          type="button"
          variant="primary"
          extraClasses="mt-5"
          onClick={addProductHandler}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default AddProductForm;
