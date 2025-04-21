import { Router } from "../../../deps.ts"; // Assuming you're using Express
import {
  createBookHandler,
  getBooksHandler,
  searchBooksHandler,
} from "./book.controllers.ts"; // Adjust according to your file structure

const router = Router();

// Define your routes
router.post("/create_book", createBookHandler); // Post route for creating a book
router.get("/", getBooksHandler); // Get route to retrieve books
router.get("/search", searchBooksHandler); // Get route for searching books

export default router;
