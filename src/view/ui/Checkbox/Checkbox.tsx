import React from 'react';
import { StyledCheckbox } from './StyledCheckbox';

interface Props {
  name: string;
  className: string;
  onChange: () => void;
  value: boolean;
}

export const Checkbox = ({
  name,
  className,
  onChange,
  value
}: Props): React.ReactElement => (
  <StyledCheckbox className={className} htmlFor={name}>
    <input
      id={name}
      name={name}
      type="checkbox"
      onChange={onChange}
      value={value.toString()}
    />
    Favourites
  </StyledCheckbox>
);
