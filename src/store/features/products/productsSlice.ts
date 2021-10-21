import { child, get, ref } from "@firebase/database";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../../firebase";
import Product from "../../../models/Product";
import { RootState } from "../../store";

interface Payload {
  items: Product[];
  loading?: boolean;
  hasErrors?: boolean;
}

const dbRef = ref(db);

export const getProducts = createAsyncThunk<Payload>(
  "getProducts",
  async (req, thunkAPI) => {
    try {
      const response = await get(child(dbRef, "products"));
      const items = response.val();
      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export interface ProductsState {
  items: Product[];
  loading?: boolean;
  hasErrors?: boolean;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  hasErrors: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;

        const transformedItems = Object.entries(payload).reduce(
          (arr: Product[], item: any) => {
            const transformedItem: Product = item[1];
            transformedItem["id"] = item[0];
            arr.push(transformedItem);
            return arr;
          },
          []
        );
        state.items = transformedItems;
      }),
      builder.addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export const existingProducts = (state: RootState) => state.products.items;

export default productsSlice.reducer;
