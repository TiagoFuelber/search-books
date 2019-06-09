import React from 'react';
import { StyledHeader } from './StyledHeader';
import { SearchInput } from '../ui/SearchInput/SearchInput';

export const Header = () => (
  <StyledHeader>
    <h1 className="title">Search books</h1>
    <div className="actions">
      <SearchInput className="search" />
      <label className="favourites" htmlFor="favourites">
        <input id="favourites" name="favourites" type="checkbox" />
        Favourites
      </label>
    </div>
  </StyledHeader>
);
