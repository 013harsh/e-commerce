import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducer/UserSlice.jsx";
import ProductSlice from "./reducer/ProductSlice.jsx";
import CartSlice from "./reducer/CartSlice.jsx";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    product: ProductSlice,
    Cart: CartSlice,
  },
});
