import BooksRepository from '../infra/BooksRepository';
import { Book } from '../domain';

export const searchBooks = async query => {
  const books = (await BooksRepository.searchBooks(query)) || [];
  return books.map(book => new Book(book));
};
