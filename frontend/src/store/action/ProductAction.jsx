import {
  databases,
  ID,
  DATABASE_ID,
  PRODUCTS_COLLECTION_ID,
} from "../../api/appwriteConfig";
import {
  loadproduct,
  RemoveProduct,
  setLoading,
  setError,
} from "../reducer/ProductSlice";

// ─── ADD PRODUCT ──────────────────────────────────────────────────────────────
export const AddProduct = (product) => async (dispatch) => {
  try {
    const doc = await databases.createDocument(
      DATABASE_ID,
      PRODUCTS_COLLECTION_ID,
      ID.unique(), // Appwrite generates a unique ID
      {
        name: product.name || "",
        brand: product.brand || "",
        category: product.category || "",
        subcategory: product.subcategory || "",
        price: parseFloat(product.price) || 0,
        stock: parseInt(product.stock) || 0,
        description: product.description || "",
        ...(product.image ? { image: product.image } : {}),
      },
    );

    // console.log("Product added:", doc);
    dispatch(ReadProduct()); // refresh product list
    return { success: true, data: doc };
  } catch (error) {
    console.log("Add product error:", error.message);
    return { success: false, error };
  }
};

// ─── READ ALL PRODUCTS ────────────────────────────────────────────────────────
export const ReadProduct = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await databases.listDocuments(
      DATABASE_ID,
      PRODUCTS_COLLECTION_ID,
    );

    // res.documents is array of Appwrite docs — ProductSlice normalizes $id → id
    // console.log("Products loaded:", res.documents);
    dispatch(loadproduct(res.documents));
  } catch (error) {
    console.log("Read products error:", error.message);
    dispatch(setError(error.message));
    dispatch(loadproduct([]));
  }
};

// ─── UPDATE PRODUCT ───────────────────────────────────────────────────────────
export const UpdateProduct = (id, product) => async (dispatch) => {
  try {
    const doc = await databases.updateDocument(
      DATABASE_ID,
      PRODUCTS_COLLECTION_ID,
      id,
      {
        name: product.name,
        brand: product.brand || "",
        category: product.category || "",
        subcategory: product.subcategory || "",
        price: parseFloat(product.price) || 0,
        stock: parseInt(product.stock) || 0,
        description: product.description || "",
        ...(product.image ? { image: product.image } : {}),
      },
    );

    // console.log("Product updated:", doc);
    dispatch(ReadProduct()); // refresh product list
  } catch (error) {
    console.log("Update product error:", error.message);
  }
};

// ─── DELETE PRODUCT ───────────────────────────────────────────────────────────
export const DeleteProduct = (id) => async (dispatch) => {
  try {
    await databases.deleteDocument(DATABASE_ID, PRODUCTS_COLLECTION_ID, id);
    // console.log("Product deleted:", id);
    dispatch(RemoveProduct(id));
  } catch (error) {
    console.log("Delete product error:", error.message);
  }
};
