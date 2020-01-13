import * as React from "react";
import { Normalize } from "styled-normalize";
import {
  GlobalStyle,
  Container,
  Header,
  Book,
  StyledBooksContainer
} from "./view";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { DARK_GRAY } from "./view/ui/styles/constants";
import {
  searchBooks,
  addFavourite,
  getFavourites,
  isFavourite
} from "./application";
import { throttle } from "./helpers/throttle";
import { removeFavourite } from "./application/removeFavourite";

library.add(faSearch);
library.add(faStar);
library.add(faTimes);

interface Props {}

interface State {
  books: Book[];
  searchQuery: String;
  showFavourites: Boolean;
  favourites: Book[];
}

class App extends React.Component<Props, State> {
  state = {
    books: [],
    searchQuery: "",
    showFavourites: false,
    favourites: []
  };

  componentDidMount() {
    this.setState({ favourites: getFavourites() });
  }

  updateSearchQuery = async query => {
    this.setState({ searchQuery: query });
    if (!this.state.showFavourites) this.throttledSearchBooks(query);
  };

  throttledSearchBooks = throttle(async query => {
    const books = query ? await searchBooks(query) : [];
    this.setState({ books });
  }, 200);

  toggleShowFavourites = () => {
    this.state.showFavourites
      ? this.throttledSearchBooks(this.state.searchQuery)
      : this.setState({ books: this.state.favourites });

    this.setState({ showFavourites: !this.state.showFavourites });
  };

  addToFavourites = book => {
    const newFavourites = addFavourite(book);
    this.setState({ favourites: newFavourites });
    if (this.state.showFavourites) this.setState({ books: newFavourites });
  };

  removeFromFavourites = book => {
    const newFavourites = removeFavourite(book);
    this.setState({ favourites: newFavourites });
    if (this.state.showFavourites) this.setState({ books: newFavourites });
  };

  render() {
    const { books, searchQuery, showFavourites, favourites } = this.state;

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
              books.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  onAddToFavourites={
                    isFavourite(book.id, favourites)
                      ? this.removeFromFavourites
                      : this.addToFavourites
                  }
                  isFavourite={isFavourite(book.id, favourites)}
                />
              ))
            ) : (
              <div
                style={{
                  color: `${DARK_GRAY}`,
                  fontSize: "25px",
                  textAlign: "center"
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
