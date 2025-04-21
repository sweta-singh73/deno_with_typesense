import * as AuthService from "../modules/auth/auth.services.ts";
import * as BookService from "../modules/book/book.services.ts";

export const container = {
  authService: AuthService,
  bookService: BookService

};
