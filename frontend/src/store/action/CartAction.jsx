import axios from "../../api/axiosconfig";
import {
  loadCart,
  addtoCart,
  removeFromCart,
  increasequantity,
  decreasequantity,
} from "../reducer/CartSlice";

export const asyncloadCart = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/cart");
    dispatch(loadCart(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncaddtoCart = (product) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/cart", {
      id: product._id, 
      ...product, 
      quantity: 1,
    });

    dispatch(addtoCart(product));
    localStorage.setItem("cart", JSON.stringify(getstate().Cart));
    console.log(getstate().Cart.Cart);
  } catch (error) {
    console.log(error);
  }
};

export const asyncremoveFromCart =
  (productId) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.delete(`/cart/${productId}`);
      dispatch(removeFromCart(productId));

      localStorage.setItem("cart", JSON.stringify(getstate().Cart));
      console.log(getstate().Cart.Cart);
    } catch (error) {
      console.log(error);
    }
  };

export const asyncincreasequantity =
  (productId) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.patch(`/cart/${productId}`, {
        action: "increase",
      });
      dispatch(increasequantity(productId));
      localStorage.setItem("cart", JSON.stringify(getstate().Cart));
      console.log(getstate().Cart.Cart);
    } catch (error) {
      console.log(error);
    }
  };

export const asyncdecreasequantity =
  (productId) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.patch(`/cart/${productId}`, {
        action: "decrease",
      });
      dispatch(decreasequantity(productId));
      localStorage.setItem("cart", JSON.stringify(getstate().Cart));
      console.log(getstate().Cart.Cart);
    } catch (error) {
      console.log(error);
    }
  };
