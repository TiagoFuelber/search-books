import BooksRepository from '../infra/BooksRepository';
import { Book, BookDTO } from '../domain';

export const removeFavourite = (book: Book): Book[] =>
  BooksRepository.removeFavourite(book).map((book: BookDTO) => new Book(book));
