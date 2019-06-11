const API_KEY = 'AIzaSyACq7VStwGKxc3eUeIiWt__3uIeDaQOXvs';
const FAVOURITES_TABLE_NAME = 'FavouriteBooks';

const searchBooks = async query => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query
      .split(' ')
      .join('+')}&key${API_KEY}`
  );
  const json = await response.json();
  return json.items;
};

const addFavourite = book => {
  if (!localStorage.getItem(FAVOURITES_TABLE_NAME)) {
    localStorage.setItem(FAVOURITES_TABLE_NAME, JSON.stringify([book]));
    return getFavourites();
  }

  const books = JSON.parse(localStorage.getItem(FAVOURITES_TABLE_NAME));

  if (!books.find(item => item.id === book.id)) {
    localStorage.setItem(
      FAVOURITES_TABLE_NAME,
      JSON.stringify([...books, book])
    );
  }

  return getFavourites();
};

const removeFavourite = book => {
  const books = JSON.parse(localStorage.getItem(FAVOURITES_TABLE_NAME));
  const index = books
    .map((item, index) => ({ id: item.id, index }))
    .filter(item => item.id === book.id)[0].index;

  books.splice(index, 1);
  localStorage.setItem(FAVOURITES_TABLE_NAME, JSON.stringify([...books]));
  return getFavourites();
};

const getFavourites = () => {
  if (!localStorage.getItem(FAVOURITES_TABLE_NAME)) {
    return [];
  }
  return JSON.parse(localStorage.getItem(FAVOURITES_TABLE_NAME));
};

export default { searchBooks, addFavourite, getFavourites, removeFavourite };
