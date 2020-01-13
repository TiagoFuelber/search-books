import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from './StyledCheckbox';

export const Checkbox = ({ name, className, onChange, value }) => (
  <StyledCheckbox className={className} htmlFor={name}>
    <input
      id={name}
      name={name}
      type="checkbox"
      onChange={onChange}
      value={value}
    />
    Favourites
  </StyledCheckbox>
);

Checkbox.defaultProps = {
  className: ''
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};
