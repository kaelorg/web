import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${props => props.theme.grey};
    font-weight: 500;
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

  & > div {
    display: flex;
    padding-top: 20px;

    align-items: center;
    justify-content: space-between;

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

    &:nth-child(2) {
      & > div {
        &:nth-child(1) h3 {
          color: ${props => props.theme.default};
        }

        &:nth-child(2) button {
          border: none;
          color: ${props => props.theme.dark_solid};
          background-color: ${props => props.theme.default};
        }
      }
    }
  }
`;
