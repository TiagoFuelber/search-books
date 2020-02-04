import { Book } from 'domain/Book';

export const isFavourite = (id: string, favourites: Book[]): boolean =>
  !!favourites.filter(fav => fav._id === id).length;
