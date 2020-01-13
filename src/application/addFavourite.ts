import BooksRepository from '../infra/BooksRepository';
import { Book } from '../domain';

export const addFavourite = book => {
  const newBooks = BooksRepository.addFavourite(book.dto);
  return newBooks.map(book => new Book(book));
};
