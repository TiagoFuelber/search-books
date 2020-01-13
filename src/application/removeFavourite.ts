import BooksRepository from '../infra/BooksRepository';
import { Book } from '../domain';

export const removeFavourite = book =>
  BooksRepository.removeFavourite(book.dto).map(book => new Book(book));
