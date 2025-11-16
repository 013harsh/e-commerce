import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
   
      state.products = Array.isArray(action.payload) ? action.payload : [];
      state.error = null;
    },
    RemoveProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadproduct, RemoveProduct, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
