import { typesenseClient } from "./typesenseClient.ts";

const bookSchema = {
  name: "books",
  fields: [
    { name: "title", type: "string" },
    { name: "author", type: "string" },
    { name: "summary", type: "string" },
    { name: "genre", type: "string" },
    { name: "rating", type: "float" },
    { name: "userId", type: "string" },
  ],
  default_sorting_field: "rating" as const,
};

export const setupTypesense = async () => {
  try {
    await typesenseClient.collections("books").retrieve();
    console.log(" Typesense collection 'books' already exists");
  } catch (error) {
    // Handle Typesense "ObjectNotFound" error when collection doesn't exist
    if (error && typeof error === "object" && "message" in error) {
      const errMsg = (error as { message: string }).message;
      if (errMsg.includes("Not Found")) {
        console.log("⚙️ Creating Typesense collection: 'books'");
        await typesenseClient.collections().create(bookSchema);
        return;
      }
    }

    // Any other error
    console.error("Error setting up Typesense:", error);
  }
};
