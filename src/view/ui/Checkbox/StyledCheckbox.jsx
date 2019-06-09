import Styled from 'styled-components';
import { DARK_GRAY, LIGHT_GRAY, BLUE } from '../styles/constants';

export const StyledCheckbox = Styled.label`
  display: inline-flex;
  align-items: center;
  padding-left: 20px;

  input {
    position: relative;
    appearance: none;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 13px;
      height: 13px;
      top: -8px;
      left: -20px;
      background: ${LIGHT_GRAY};
      border: 1px solid ${DARK_GRAY};
      border-radius: 2px;
      outline: none;
    }

    &:checked::after {
      background: ${BLUE};
      border-color: ${BLUE};
    }
  }
`;
