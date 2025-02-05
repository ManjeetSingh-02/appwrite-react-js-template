import { appConfig } from "../config/appConfig";
import { Client, ID, Storage } from "appwrite";

class StorageService {
  #client;
  #storage;
  constructor() {
    this.#client = new Client()
      .setEndpoint(appConfig.endpointURL)
      .setProject(appConfig.projectID);
    this.#storage = new Storage(this.#client);
  }

  async createFile(file, perms = []) {
    try {
      return await this.#storage.createFile(
        appConfig.bucketID,
        ID.unique(),
        file,
        perms,
      );
    } catch (error) {
      throw error;
    }
  }

  async getFile(fileID) {
    try {
      return await this.#storage.getFile(appConfig.bucketID, fileID);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileID) {
    try {
      return await this.#storage.deleteFile(appConfig.bucketID, fileID);
    } catch (error) {
      throw error;
    }
  }

  previewFile(fileID, options = {}) {
    try {
      return this.#storage.getFilePreview(
        appConfig.bucketID,
        fileID,
        ...options,
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new StorageService();
