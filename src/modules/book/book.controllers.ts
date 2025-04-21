import { Request, Response } from "../../../deps.ts";
import { container } from "../../dependencies/container.ts";

export const createBookHandler = async (req: Request, res: Response) => {
  const book = await container.bookService.createBook(req.body);
  res.json(book);
};

export const getBooksHandler = async (_req: Request, res: Response) => {
  const books = await container.bookService.getAllBooks();
  res.json(books);
};

export const searchBooksHandler = async (req: Request, res: Response) => {
  const query = req.query.q as string;

  if (!query) {
    return res.status(400).json({ message: "Missing search query" });
  }

  try {
    const books = await container.bookService.searchBooks(query);
    
    res.json(books);
  } catch (error) {
    console.error("Error searching books:", error);
    res.status(500).json({ message: "Error searching books" });
  }
};

