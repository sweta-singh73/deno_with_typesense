import { Request, Response } from "../../../deps.ts";
import { createBook, getAllBooks, searchBooks } from "./book.services.ts";

export const createBookHandler = async (req: Request, res: Response) => {
  const book = await createBook(req.body);
  res.json(book);
};

export const getBooksHandler = async (_req: Request, res: Response) => {
  const books = await getAllBooks();
  res.json(books);
};

export const searchBooksHandler = async (req: Request, res: Response) => {
  const query = req.query.q as string;
  if (!query) {
    return res.status(400).json({ message: "Missing search query" });
  }
  const books = await searchBooks(query);
  res.json(books);
};
