import { Account, Client } from "appwrite";

const endpoint = import.meta.env.VITE_ENDPOINT;
const projectId = import.meta.env.VITE_PROJECT_ID;

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

export const account = new Account(client);

export default client;