import {
  databases,
  ID,
  DATABASE_ID,
  CART_COLLECTION_ID,
} from "../../api/appwriteConfig";
import {
  loadCart,
  addtoCart,
  removeFromCart,
  increasequantity,
  decreasequantity,
} from "../reducer/CartSlice";

const getValidImage = (url) =>
  typeof url === "string" && url.trim() !== ""
    ? url
    : "https://placehold.co/400x400/eeeeee/333333?text=No+Image";

// Helper: normalize Appwrite cart document to plain object
const normalizeCart = (doc) => ({
  id: doc.$id,
  name: doc.name || "",
  brand: doc.brand || "",
  category: doc.category || "",
  subcategory: doc.subcategory || "",
  price: doc.price ?? 0,
  stock: doc.stock ?? 0,
  description: doc.description || "",
  image: getValidImage(doc.image),
  quantity: doc.quantity ?? 1,
});

// ─── LOAD CART ────────────────────────────────────────────────────────────────
export const asyncloadCart = () => async (dispatch) => {
  try {
    const res = await databases.listDocuments(DATABASE_ID, CART_COLLECTION_ID);
    const cartItems = res.documents.map(normalizeCart);
    dispatch(loadCart(cartItems));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (e) {
    console.log("Load cart error:", e.message);
  }
};

// ─── ADD TO CART ──────────────────────────────────────────────────────────────
export const asyncaddtoCart = (product) => async (dispatch, getState) => {
  try {
    // Check if product already in Appwrite cart
    const res = await databases.listDocuments(DATABASE_ID, CART_COLLECTION_ID);
    const existing = res.documents.find((doc) => doc.$id === product.id);

    if (existing) {
      // Already in cart — just increase quantity
      const newQty = (existing.quantity || 1) + 1;
      await databases.updateDocument(
        DATABASE_ID,
        CART_COLLECTION_ID,
        product.id,
        {
          quantity: newQty,
        },
      );
      dispatch(increasequantity(String(product.id)));
    } else {
      // New item — create document with product.id as the document ID
      await databases.createDocument(
        DATABASE_ID,
        CART_COLLECTION_ID,
        product.id, // use product id as document id for easy lookup
        {
          name: product.name,
          brand: product.brand || "",
          category: product.category || "",
          subcategory: product.subcategory || "",
          price: product.price,
          stock: product.stock,
          description: product.description || "",
          ...(product.image ? { image: product.image } : {}),
          quantity: 1,
        },
      );
      dispatch(addtoCart(product));
    }

    localStorage.setItem("cart", JSON.stringify(getState().Cart.Cart));
    // console.log("Cart updated:", getState().Cart.Cart);
  } catch (error) {
    console.log("Add to cart error:", error.message);
  }
};

// ─── REMOVE FROM CART ─────────────────────────────────────────────────────────
export const asyncremoveFromCart = (id) => async (dispatch, getState) => {
  try {
    await databases.deleteDocument(DATABASE_ID, CART_COLLECTION_ID, id);
    dispatch(removeFromCart(id));
    localStorage.setItem("cart", JSON.stringify(getState().Cart.Cart));
    // console.log("Removed from cart:", id);
  } catch (error) {
    console.log("Remove from cart error:", error.message);
  }
};

// ─── INCREASE QUANTITY ────────────────────────────────────────────────────────
export const asyncincreasequantity = (id) => async (dispatch, getState) => {
  try {
    const doc = await databases.getDocument(
      DATABASE_ID,
      CART_COLLECTION_ID,
      id,
    );
    const newQty = (doc.quantity || 1) + 1;

    await databases.updateDocument(DATABASE_ID, CART_COLLECTION_ID, id, {
      quantity: newQty,
    });

    dispatch(increasequantity(String(id)));
    localStorage.setItem("cart", JSON.stringify(getState().Cart.Cart));
    // console.log("Quantity increased for:", id);
  } catch (e) {
    console.log("Increase quantity error:", e.message);
  }
};

// ─── DECREASE QUANTITY ────────────────────────────────────────────────────────
export const asyncdecreasequantity = (id) => async (dispatch, getState) => {
  try {
    const doc = await databases.getDocument(
      DATABASE_ID,
      CART_COLLECTION_ID,
      id,
    );
    const current = doc.quantity || 1;
    const newQty = current - 1;

    if (newQty > 0) {
      await databases.updateDocument(DATABASE_ID, CART_COLLECTION_ID, id, {
        quantity: newQty,
      });
      dispatch(decreasequantity(String(id)));
    } else {
      // Remove item when quantity reaches 0
      await databases.deleteDocument(DATABASE_ID, CART_COLLECTION_ID, id);
      dispatch(removeFromCart(String(id)));
    }

    localStorage.setItem("cart", JSON.stringify(getState().Cart.Cart));
    // console.log("Quantity decreased for:", id);
  } catch (e) {
    console.log("Decrease quantity error:", e.message);
  }
};
