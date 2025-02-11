export const backendConfig = {
  endpointURL: String(import.meta.env.VITE_APPWRITE_ENDPOINT_URL),
  projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  blogs: {
    collectionID: String(import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID),
    bucketID: String(import.meta.env.VITE_APPWRITE_BLOGS_BUCKET_ID),
  },
};
