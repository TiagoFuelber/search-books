import { Book, BookDTO } from '../domain';

const API_KEY = 'AIzaSyACq7VStwGKxc3eUeIiWt__3uIeDaQOXvs';
const FAVOURITES_TABLE_NAME = 'FavouriteBooks';

const searchBooks = async (query: string): Promise<BookDTO[]> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query
      .split(' ')
      .join('+')}&key${API_KEY}`
  );
  const json = await response.json();
  return json.items;
};

const getFavourites = (): BookDTO[] => {
  if (!localStorage.getItem(FAVOURITES_TABLE_NAME)) {
    return [];
  }
  return JSON.parse(localStorage.getItem(FAVOURITES_TABLE_NAME));
};

const addFavourite = (book: Book): BookDTO[] => {
  if (!localStorage.getItem(FAVOURITES_TABLE_NAME)) {
    localStorage.setItem(FAVOURITES_TABLE_NAME, JSON.stringify([book]));
    return getFavourites();
  }

  const books = JSON.parse(localStorage.getItem(FAVOURITES_TABLE_NAME));

  if (!books.find((item: Book) => item.id === book.id)) {
    localStorage.setItem(
      FAVOURITES_TABLE_NAME,
      JSON.stringify([...books, book])
    );
  }

  return getFavourites();
};

const removeFavourite = (book: Book): BookDTO[] => {
  const books = JSON.parse(localStorage.getItem(FAVOURITES_TABLE_NAME));
  const index = books
    .map((item: Book, index: number) => ({ id: item.id, index }))
    .filter((item: Book) => item.id === book.id)[0].index;

  books.splice(index, 1);
  localStorage.setItem(FAVOURITES_TABLE_NAME, JSON.stringify([...books]));
  return getFavourites();
};

export default { searchBooks, addFavourite, getFavourites, removeFavourite };
