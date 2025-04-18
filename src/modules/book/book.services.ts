import { CreateBookInput, BookDocument, TypesenseSearchResult, TypesenseHit } from './book.types.ts';
import Book from "../../models/book.model.ts";
import { typesenseClient } from "../../../config/typesenseClient.ts";


// Create a new book in the database and index it in Typesense
export const createBook = async (data: CreateBookInput) => {
  const book = await Book.create(data);
  await typesenseClient.collections("books").documents().create({
    id: book._id.toString(),
    ...data,
  });
  return book;
};

// Get all books from the database

export const getAllBooks = async () => {
  return await Book.find();
};

// Search books in Typesense and return the results

export const searchBooks = async (query: string): Promise<BookDocument[]> => {
  const result = await typesenseClient.collections("books").documents().search({
    q: query,
    query_by: "title,author,summary",
  }) as TypesenseSearchResult<BookDocument>; 

  return result.hits.map((hit: TypesenseHit<BookDocument>) => hit.document);
};
