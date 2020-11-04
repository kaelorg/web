import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    pointer-events: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  top: 0;

  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-top: 20px;

  border: 6px solid transparent;
  animation: spinner 600ms linear infinite;

  border-left: 6px solid ${props => props.theme.default};
  border-top: 6px solid ${props => props.theme.default};

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
