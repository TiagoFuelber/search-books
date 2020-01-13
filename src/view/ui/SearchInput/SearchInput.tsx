import React from 'react';
import { StyledSearchInput } from './StyledSearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchInput = props => (
  <StyledSearchInput>
    <FontAwesomeIcon className="search-icon" icon={faSearch} />
    <input type="search" {...props} />
  </StyledSearchInput>
);
