import axios from "axios";
import {
  loadCart,
  addtoCart,
  removeFromCart,
  increasequantity,
  decreasequantity,
} from "../reducer/CartSlice";

export const asyncloadCart = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/Cart");
    dispatch(loadCart(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncaddtoCart = (product) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/Cart", { id: product._id });
    dispatch(addtoCart(product));
    localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
    console.log(getstate().Cart.Cart);
  } catch (error) {
    console.log(error);
  }
};

export const asyncremoveFromCart = (productId) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.delete(`/Cart/${productId}`);
    dispatch(removeFromCart(productId));
    localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
    console.log(getstate().Cart.Cart);
  } catch (error) {
    console.log(error);
  }
};

export const asyncincreasequantity = (productId) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.put(`/Cart/${productId}`, {
      action: "increase"
    });
    dispatch(increasequantity(productId));
    localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
    console.log(getstate().Cart.Cart);
  } catch (error) {
    console.log(error);
  }
};

export const asyncdecreasequantity = (productId) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.put(`/Cart/${productId}`, {
      action: "decrease"
    });
    dispatch(decreasequantity(productId));
    localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
    console.log(getstate().Cart.Cart);
  } catch (error) {
    console.log(error);
  }
};
