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
  },
});

export const { loadproduct } = productsSlice.actions;
export default productsSlice.reducer;
