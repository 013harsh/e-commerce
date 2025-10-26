import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './reducer/UserSlice.jsx';

export const store = configureStore({
  reducer: {
    user: UserSlice
  },
});