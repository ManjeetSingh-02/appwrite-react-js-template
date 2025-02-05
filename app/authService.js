import { appConfig } from "../config/appConfig";
import { Account, Client, ID } from "appwrite";

class AuthService {
  #client;
  #account;
  constructor() {
    this.#client = new Client()
      .setEndpoint(appConfig.endpointURL)
      .setProject(appConfig.projectID);
    this.#account = new Account(this.#client);
  }

  async getAccount() {
    try {
      return await this.#account.get();
    } catch (error) {
      throw error;
    }
  }

  async createAccount(email, password, name) {
    try {
      return await this.#account.create(ID.unique(), email, password, name);
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      return await this.#account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async updateName(name) {
    try {
      return await this.#account.updateName(name);
    } catch (error) {
      throw error;
    }
  }

  async updateEmail(email, password) {
    try {
      return await this.#account.updateEmail(email, password);
    } catch (error) {
      throw error;
    }
  }

  async updatePassword(newPass, oldPass) {
    try {
      return await this.#account.updatePassword(newPass, oldPass);
    } catch (error) {
      console.error("APPWRITE AUTH :: UPDATE PASSWORD :: ", error);
      throw error;
    }
  }

  async logoutUser() {
    try {
      return await this.#account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
