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
import { mockBooks } from './mockBooks';
import { Book as BookDomain } from './domain/Book';
import { DARK_GRAY } from './view/ui/styles/constants';

library.add(faSearch);
library.add(faStar);
library.add(faTimes);

class App extends Component {
  state = {
    books: [],
    searchQuery: '',
    showFavourites: false
  };

  updateSearchQuery = query => this.setState({ searchQuery: query });

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
            query={searchQuery}
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

// AIzaSyACq7VStwGKxc3eUeIiWt__3uIeDaQOXvs
