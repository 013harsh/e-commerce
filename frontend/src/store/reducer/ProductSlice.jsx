import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
      state.products = action.payload;
    },
    Deleteproduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { loadproduct, Deleteproduct } = productsSlice.actions;
export default productsSlice.reducer;
