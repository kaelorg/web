import styled from 'styled-components';

export const Container = styled.div`
  & > h3 {
    &:not(:first-child) {
      margin-top: 20px;
    }

    font-size: 2.5rem;
  }

  & > p {
    margin-top: 5px;
  }

  & > section {
    margin-top: 20px;

    p {
      font-size: 1.8rem;

      & + p {
        margin-top: 6px;
      }
    }
  }
`;

export const SelectContainer = styled.div`
  margin-top: 20px;
`;
