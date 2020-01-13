import Styled from 'styled-components';
import { MOBILE } from './styles/constants';

export const StyledBooksContainer = Styled.div`
  display: grid;
  grid-gap: 10px;

  @media screen and (min-width: ${MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
