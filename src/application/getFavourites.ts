import BooksRepository from '../infra/BooksRepository';
import { Book, BookDTO } from '../domain';

export const getFavourites = (): Book[] =>
  BooksRepository.getFavourites().map((book: BookDTO) => new Book(book));
