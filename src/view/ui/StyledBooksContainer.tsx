import Styled from 'styled-components';
import { MOBILE } from './styles/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBooksContainer = Styled.div<any>`
  display: grid;
  grid-gap: 10px;

  @media screen and (min-width: ${MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
