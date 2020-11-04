import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0 20px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-top: 20px;

  border: 6px solid transparent;
  border-right: 6px solid transparent;
  animation: spinner 700ms linear infinite;

  border-left: 6px solid ${props => props.theme.default};
  border-top: 6px solid ${props => props.theme.default};
  border-right: 6px solid ${props => props.theme.default};

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
