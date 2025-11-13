import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducer/UserSlice.jsx";
import ProductSlice from "./reducer/ProductSlice.jsx";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    product: ProductSlice,
  },
});
