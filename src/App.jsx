import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';
import {
  GlobalStyle,
  Container,
  Header,
  Book,
  StyledBooksContainer
} from './view';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DARK_GRAY } from './view/ui/styles/constants';
import { searchBooks } from './application';
import { throttle } from './helpers/throttle';

library.add(faSearch);
library.add(faStar);
library.add(faTimes);

class App extends Component {
  state = {
    books: [],
    searchQuery: '',
    showFavourites: false
  };

  updateSearchQuery = async query => {
    this.setState({ searchQuery: query });
    this.throttledSearchBooks(query);
  };

  throttledSearchBooks = throttle(async query => {
    const books = await searchBooks(query);
    this.setState({ books });
  }, 200);

  toggleShowFavourites = () =>
    this.setState({ showFavourites: !this.state.showFavourites });

  render() {
    const { books, searchQuery, showFavourites } = this.state;

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header
            searchQuery={searchQuery}
            onSearchUpdate={this.updateSearchQuery}
            showFavourites={showFavourites}
            onShowFavourites={this.toggleShowFavourites}
          />
          <StyledBooksContainer>
            {books.length ? (
              books.map(book => <Book key={book.id} book={book} />)
            ) : (
              <div
                style={{
                  color: `${DARK_GRAY}`,
                  fontSize: '25px',
                  textAlign: 'center'
                }}
              >
                No books to show
              </div>
            )}
          </StyledBooksContainer>
          {!books.length || <button>Load more</button>}
        </Container>
      </>
    );
  }
}

export default App;
