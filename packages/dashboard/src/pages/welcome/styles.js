import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    color: ${props => props.theme.grey};
  }

  strong {
    font-size: 2rem;
    text-align: left;
  }
`;

export const Hero = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    padding-top: 20px;

    h2 {
      font-size: 3rem;
    }

    p {
      margin-left: 15px;
      text-align: justify;
      font-size: 1.8rem;
    }
  }

  hr {
    margin-top: 10px;
    border: none;
    border-top: 1px solid ${props => rgba(props.theme.grey, 0.6)};
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;

  flex-wrap: wrap;
  justify-content: space-between;

  & > section {
    margin-bottom: 20px;
  }
`;
