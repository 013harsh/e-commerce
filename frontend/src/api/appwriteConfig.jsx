import { Client, Databases, Account, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1") // Appwrite Cloud endpoint
  .setProject("69cb53bb000088490e62"); // Appwrite Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID } from "appwrite";

export const DATABASE_ID = "69cb5cf5000781a016d4";
export const PRODUCTS_COLLECTION_ID = "69cb64af002e88e33193";
export const CART_COLLECTION_ID = "69cb64a40019430e6053";
export const IMAGES_BUCKET_ID = "69cd5011001b9e719d92";
