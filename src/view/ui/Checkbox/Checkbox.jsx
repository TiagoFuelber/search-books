import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from './StyledCheckbox';

export const Checkbox = ({ name, className }) => (
  <StyledCheckbox className={className} htmlFor={name}>
    <input id={name} name={name} type="checkbox" />
    Favourites
  </StyledCheckbox>
);

Checkbox.defaultProps = {
  className: ''
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};
