import Styled from 'styled-components';

export const StyledHeader = Styled.header`
  margin-bottom: 30px;

  .title {
    text-align: center;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .search {
    margin-bottom: 10px;
    width: 100%;
  }

  .favourites {
    margin-top: 10px;
  }
`;
