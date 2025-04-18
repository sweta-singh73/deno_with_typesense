import { Typesense } from "../deps.ts";
 
export const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: Deno.env.get("TYPESENSE_HOST")!,
      port: Number(Deno.env.get("TYPESENSE_PORT")),
      protocol: Deno.env.get("TYPESENSE_PROTOCOL")!,
    },
  ],
  apiKey: Deno.env.get("TYPESENSE_API_KEY")!,
  connectionTimeoutSeconds: 2,
});