import { appConfig } from "../config/appConfig";
import { Client, Databases } from "appwrite";

class DBService {
  #client;
  #databases;
  constructor() {
    this.#client = new Client()
      .setEndpoint(appConfig.endpointURL)
      .setProject(appConfig.projectID);
    this.#databases = new Databases(this.#client);
  }

  async listDocuments(queries) {
    try {
      return await this.#databases.listDocuments(
        appConfig.databaseID,
        appConfig.collectionID,
        queries,
      );
    } catch (error) {
      throw error;
    }
  }

  async createDocument(documentID, data = {}, perms = []) {
    try {
      return await this.#databases.createDocument(
        appConfig.databaseID,
        appConfig.collectionID,
        documentID,
        data,
        perms,
      );
    } catch (error) {
      throw error;
    }
  }

  async getDocument(documentID, queries = []) {
    try {
      return await this.#databases.getDocument(
        appConfig.databaseID,
        appConfig.collectionID,
        documentID,
        queries,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateDocument(documentID, data = {}, perms = []) {
    try {
      return await this.#databases.updateDocument(
        appConfig.databaseID,
        appConfig.collectionID,
        documentID,
        data,
        perms,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteDocument(documentID) {
    try {
      return await this.#databases.deleteDocument(
        appConfig.databaseID,
        appConfig.collectionID,
        documentID,
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new DBService();
