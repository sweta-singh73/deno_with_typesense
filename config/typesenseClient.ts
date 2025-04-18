// config/typesenseClient.ts
import Typesense from "npm:typesense";

export const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: "localhost",
      port: 8108,
      protocol: "http",
    },
  ],
  apiKey: "ghjklkjk", // Replace with your actual Typesense API key
  connectionTimeoutSeconds: 2,
});
