import { CreateBookInput, BookDocument, TypesenseSearchResult, TypesenseHit } from './book.types.ts';
import Book from "../../models/book.model.ts";
import { typesenseClient } from "../../../config/typesenseClient.ts";


export const createBook = async (data: CreateBookInput) => {
  const book = await Book.create(data);

  await typesenseClient.collections("books").documents().upsert({
    id: book._id.toString(), 
    title: book.title,
    author: book.author,
    summary: book.summary,
    genre: book.genre,
    rating: book.rating,
    userId: book.userId,
  });

  return book;
};



export const getAllBooks = async () => {
  return await Book.find();
};


export const searchBooks = async (query: string): Promise<BookDocument[]> => {
  const result = await typesenseClient.collections("books").documents().search({
    q: query,
    query_by: "title,author,summary",
  }) as TypesenseSearchResult<BookDocument>; 
  
  return result.hits.map((hit: TypesenseHit<BookDocument>) => hit.document);
};