import { collection, getDocs } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestoreDb from "../../../firebase";
import Product from "../../../models/Product";
import { RootState } from "../../store";

const productsCollectionRef = collection(firestoreDb, "products");

export const getProducts = createAsyncThunk(
  "getProducts",
  async (req, thunkAPI: any) => {
    try {
      const response = await getDocs(productsCollectionRef);
      const documents = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return documents;
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
        state.hasErrors = false;
        state.items = payload;
      }),
      builder.addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export const existingProducts = (state: RootState) => state.products.items;

export default productsSlice.reducer;
