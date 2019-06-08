import React from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, Container } from './view';

const App = () => (
  <>
    <Normalize />
    <GlobalStyle />
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
    <Container>
      <div className="book">Book 1</div>
      <div className="book">Book 2</div>
      <div className="book">Book 3</div>
      <div className="book">Book 4</div>
      <button>Load more</button>
    </Container>
  </>
);

export default App;
