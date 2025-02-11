import { backendConfig } from "../config/backendConfig";
import { Client, ID, Storage } from "appwrite";

class StorageService {
  #client;
  #storage;
  constructor() {
    this.#client = new Client().setEndpoint(backendConfig.endpointURL).setProject(backendConfig.projectID);
    this.#storage = new Storage(this.#client);
  }

  async createFile(type, file, perms) {
    try {
      return await this.#storage.createFile(backendConfig[type].bucketID, ID.unique(), file, perms);
    } catch (error) {
      throw error;
    }
  }

  async getFile(type, fileID) {
    try {
      return await this.#storage.getFile(backendConfig[type].bucketID, fileID);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(type, fileID) {
    try {
      return await this.#storage.deleteFile(backendConfig[type].bucketID, fileID);
    } catch (error) {
      throw error;
    }
  }

  previewFile(type, fileID, options) {
    try {
      return this.#storage.getFilePreview(backendConfig[type].bucketID, fileID, ...options);
    } catch (error) {
      throw error;
    }
  }
}

export default new StorageService();
