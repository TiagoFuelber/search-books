import BooksRepository from '../infra/BooksRepository';
import { Book, BookDTO } from '../domain';

export const addFavourite = (book: Book): Book[] => {
  const newBooks: BookDTO[] = BooksRepository.addFavourite(book);
  return newBooks.map((book: BookDTO) => new Book(book));
};
