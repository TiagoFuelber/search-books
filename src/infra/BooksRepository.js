const apiKey = 'AIzaSyACq7VStwGKxc3eUeIiWt__3uIeDaQOXvs';

const searchBooks = async query => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query
      .split(' ')
      .join('+')}&key${apiKey}`
  );
  const json = await response.json();
  return json.items;
};

export default { searchBooks };
