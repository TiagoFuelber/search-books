import React from 'react';
import { StyledHeader } from './StyledHeader';
import { SearchInput } from '../ui/SearchInput/SearchInput';
import { Checkbox } from '../ui/Checkbox/Checkbox';

export const Header = () => (
  <StyledHeader>
    <h1 className="title">Search books</h1>
    <div className="actions">
      <SearchInput className="search" />
      <Checkbox name="favourites" className="favourites" />
    </div>
  </StyledHeader>
);
