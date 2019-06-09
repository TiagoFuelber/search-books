import Styled from 'styled-components';
import { MOBILE } from '../styles/constants';

export const StyledModal = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    padding: 15px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 20px);
    box-sizing: border-box;

    @media screen and (min-width: ${MOBILE}) {
      min-width: 500px;
      max-width: 700px;
    }
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;
