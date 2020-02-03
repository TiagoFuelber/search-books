import BooksRepository from '../infra/BooksRepository';
import { Book } from '../domain/Book';
import { BookDTO } from '../domain/Book';

export const searchBooks = async (query: string): Promise<Book[]> => {
  const books: BookDTO[] = (await BooksRepository.searchBooks(query)) || [];
  return books.map((book: BookDTO) => new Book(book));
};
