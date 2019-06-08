import React from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, Container, Header } from './view';

const App = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <Container>
      <Header />
      <div className="book">Book 1</div>
      <div className="book">Book 2</div>
      <div className="book">Book 3</div>
      <div className="book">Book 4</div>
      <button>Load more</button>
    </Container>
  </>
);

export default App;
