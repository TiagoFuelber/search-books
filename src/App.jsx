import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, Container, Header, Book } from './view';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { mockBooks } from './mockBooks';
import { Book as BookDomain } from './domain/Book';

library.add(faSearch);
library.add(faStar);
library.add(faTimes);

class App extends Component {
  state = {
    books: mockBooks.map(book => new BookDomain(book))
  };

  render() {
    const { books } = this.state;

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header />
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}

          <button>Load more</button>
        </Container>
      </>
    );
  }
}

export default App;

// AIzaSyACq7VStwGKxc3eUeIiWt__3uIeDaQOXvs
