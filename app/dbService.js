import { backendConfig } from "../config/backendConfig";
import { Client, Databases } from "appwrite";

class DBService {
  #client;
  #databases;
  constructor() {
    this.#client = new Client().setEndpoint(backendConfig.endpointURL).setProject(backendConfig.projectID);
    this.#databases = new Databases(this.#client);
  }

  async listDocuments(type, queries) {
    try {
      return await this.#databases.listDocuments(backendConfig.databaseID, backendConfig[type].collectionID, queries);
    } catch (error) {
      throw error;
    }
  }

  async createDocument(type, documentID, data, perms) {
    try {
      return await this.#databases.createDocument(backendConfig.databaseID, backendConfig[type].collectionID, documentID, data, perms);
    } catch (error) {
      throw error;
    }
  }

  async getDocument(type, documentID, queries) {
    try {
      return await this.#databases.getDocument(backendConfig.databaseID, backendConfig[type].collectionID, documentID, queries);
    } catch (error) {
      throw error;
    }
  }

  async updateDocument(type, documentID, data, perms) {
    try {
      return await this.#databases.updateDocument(backendConfig.databaseID, backendConfig[type].collectionID, documentID, data, perms);
    } catch (error) {
      throw error;
    }
  }

  async deleteDocument(type, documentID) {
    try {
      return await this.#databases.deleteDocument(backendConfig.databaseID, backendConfig[type].collectionID, documentID);
    } catch (error) {
      throw error;
    }
  }
}

export default new DBService();
