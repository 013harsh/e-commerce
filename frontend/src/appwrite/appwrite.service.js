// src/appwrite/storageService.js
import { Client, Storage, ID } from "appwrite";
import { IMAGES_BUCKET_ID } from "../api/appwriteConfig.jsx";

const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1") // Appwrite Cloud endpoint
  .setProject("69cb53bb000088490e62");

const storage = new Storage(client);

// Upload image and return file ID
export const uploadImage = async (file) => {
  const response = await storage.createFile(
    IMAGES_BUCKET_ID,
    ID.unique(),
    file,
  );
  return response.$id; // Save this ID in your product document
};

// Get preview URL from file ID
export const getImageUrl = (fileId) => {
  return storage.getFilePreview(IMAGES_BUCKET_ID, fileId);
};
