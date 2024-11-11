import { Account, Client } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6710a3db002cbe23ff7c");

export const account = new Account(client);

export default client;