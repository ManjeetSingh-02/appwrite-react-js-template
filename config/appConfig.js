export const appConfig = {
  endpointURL: String(import.meta.env.VITE_APPWRITE_ENDPOINT_URL),
  projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
