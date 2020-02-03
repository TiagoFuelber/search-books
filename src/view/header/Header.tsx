import React from 'react';
import { StyledHeader } from './StyledHeader';
import { SearchInput } from '../ui/SearchInput/SearchInput';
import { Checkbox } from '../ui/Checkbox/Checkbox';

interface Props {
  searchQuery: string;
  onSearchUpdate: (value: string) => void;
  showFavourites: boolean;
  onShowFavourites: () => void;
}

export const Header = ({
  searchQuery,
  onSearchUpdate,
  showFavourites,
  onShowFavourites
}: Props): React.ReactElement => (
  <StyledHeader>
    <h1 className="title">Search books</h1>
    <div className="actions">
      <SearchInput
        className="search"
        onChange={({ target }: Event): void => onSearchUpdate(target.value)}
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
