import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const getValidImage = (url) =>
  typeof url === "string" && url.trim() !== ""
    ? url
    : "https://placehold.co/400x400/eeeeee/333333?text=No+Image";

// Helper: normalize Appwrite document to plain product object
const normalize = (doc) => ({
  id: doc.$id, // Appwrite uses $id instead of id
  name: doc.name || "",
  brand: doc.brand || "",
  category: doc.category || "",
  subcategory: doc.subcategory || "",
  price: doc.price ?? 0,
  stock: doc.stock ?? 0,
  description: doc.description || "",
  image: getValidImage(doc.image),
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
      // Accepts both raw Appwrite documents (with $id) and already-normalized objects
      const raw = Array.isArray(action.payload) ? action.payload : [];
      state.products = raw.map((p) => (p.$id ? normalize(p) : p));
      state.loading = false;
      state.error = null;
    },
    RemoveProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { loadproduct, RemoveProduct, setLoading, setError } =
  productsSlice.actions;
export default productsSlice.reducer;
