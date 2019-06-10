const searchBooks = async query => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(query)}`
  );
  const json = await response.json();
  return json.items;
};

export default { searchBooks };
