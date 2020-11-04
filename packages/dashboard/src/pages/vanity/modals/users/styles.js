import styled from 'styled-components';

export const Container = styled.div`
  & > h3 {
    &:not(:first-child) {
      margin-top: 35px;
      color: ${props => props.theme.default};
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

export const InputContainer = styled.div`
  margin-top: 20px;

  p {
    margin: 5px 0;
  }

  input {
    max-width: 100% !important;
  }
`;
