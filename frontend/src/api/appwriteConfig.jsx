import { Client, Databases, Account, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const PRODUCTS_COLLECTION_ID = import.meta.env
  .VITE_PRODUCTS_COLLECTION_ID;
export const CART_COLLECTION_ID = import.meta.env.VITE_CART_COLLECTION_ID;
export const IMAGES_BUCKET_ID = import.meta.env.VITE_IMAGES_BUCKET_ID;

export { ID };
