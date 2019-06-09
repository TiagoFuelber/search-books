import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './StyledHeader';
import { SearchInput } from '../ui/SearchInput/SearchInput';
import { Checkbox } from '../ui/Checkbox/Checkbox';

export const Header = ({
  searchQuery,
  onSearchUpdate,
  showFavourites,
  onShowFavourites
}) => (
  <StyledHeader>
    <h1 className="title">Search books</h1>
    <div className="actions">
      <SearchInput
        className="search"
        onChange={({ target }) => onSearchUpdate(target.value)}
        value={searchQuery}
      />
      <Checkbox
        name="favourites"
        className="favourites"
        onChange={onShowFavourites}
        value={showFavourites}
      />
    </div>
  </StyledHeader>
);

Header.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchUpdate: PropTypes.func.isRequired,
  showFavourites: PropTypes.bool.isRequired,
  onShowFavourites: PropTypes.func.isRequired
};
