import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.Cart = action.payload;
    },

    addtoCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.Cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.Cart.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload);
    },

    increasequantity: (state, action) => {
      const item = state.Cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decreasequantity: (state, action) => {
      const item = state.Cart.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.Cart = state.Cart.filter(
          (cartItem) => cartItem.id !== action.payload
        );
      }
    },

    clearall: (state) => {
      state.Cart = [];
    },
  },
});

export const {
  loadCart,
  addtoCart,
  removeFromCart,
  increasequantity,
  decreasequantity,
  clearall,
} = cartSlice.actions;
export default cartSlice.reducer;
