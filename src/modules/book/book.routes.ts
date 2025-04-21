import { Router } from "../../../deps.ts"; 
import {
  createBookHandler,
  getBooksHandler,
  searchBooksHandler,
} from "./book.controllers.ts";

const router = Router();


router.post("/create_book", createBookHandler);
router.get("/", getBooksHandler); 
router.get("/search", searchBooksHandler); 
export default router;
