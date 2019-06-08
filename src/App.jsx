import React from "react";

const App = () => (
  <>
    <header>
      <h1>Search books</h1>
      <div>
        <input type="search" />
        <label htmlFor="favourites">
          <input name="favourites" type="checkbox" />
          Favourites
        </label>
      </div>
    </header>
    <div className="container">
      <div className="book">Book 1</div>
      <div className="book">Book 2</div>
      <div className="book">Book 3</div>
      <div className="book">Book 4</div>
      <button>Load more</button>
    </div>
  </>
);

export default App;
