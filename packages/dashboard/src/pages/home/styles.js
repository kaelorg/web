import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'padding' })`
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
    height: auto;
    max-width: 450px;
  }

  p {
    font-size: 2.2rem;
  }

  h1 {
    font-size: 3.5rem;
    color: ${props => props.theme.default};
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    & > div {
      margin-bottom: 15px;
    }
  }
`;

export const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  bottom: 0;
`;
