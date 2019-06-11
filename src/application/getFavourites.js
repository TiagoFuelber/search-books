import BooksRepository from '../infra/BooksRepository';
import { Book } from '../domain';

export const getFavourites = () =>
  BooksRepository.getFavourites().map(book => new Book(book));
