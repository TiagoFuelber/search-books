import Styled from 'styled-components';
import { LIGHT_GRAY, DARK_GRAY } from '../styles/constants';

export const StyledSearchInput = Styled.div`
  position: relative;
  width: 100%;

  .search-icon {
    color: ${DARK_GRAY};
    position: absolute;
    top: 9px;
    left: 8px;
    z-index: 1;
  }

  input {
    padding: 8px 8px 8px 30px;
    border: none;
    width: 100%;
    background: ${LIGHT_GRAY};
  }
`;
