import Styled from 'styled-components';
import { LIGHT_GRAY } from '../ui/styles/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBook = Styled.div`
  display: flex;
  padding: 5px;
  background: ${LIGHT_GRAY};
  position: relative;

  .thumbnail {
    margin-right: 15px;

    &:hover {
      cursor: pointer;
    }
  }

  .info {
    &:hover {
      cursor: pointer;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 800;
  }

  .favourite {
    position: absolute;
    bottom: 15px;
    right: 15px;

    &:hover {
      cursor: pointer;
    }
  }

  .modal {
    .header {
      display: flex;
    }
  }
`;
