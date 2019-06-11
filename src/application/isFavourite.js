export const isFavourite = (id, favourites) =>
  !!favourites.filter(fav => fav.id === id).length;
