import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;

  flex-wrap: wrap;
  justify-content: center;
`;

export const CategorieContainer = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  max-width: 250px;
  margin: 20px 30px;

  align-items: center;
  justify-content: center;

  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.45);
  transition: background-size 400ms;

  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;

  strong {
    opacity: 0;
    padding: 20px 25px;
    font-size: 3rem;
    transition: opacity 300ms;
  }

  @media (min-width: 1025px) {
    &:hover {
      background: linear-gradient(
          rgba(0, 0, 0, 0.5) 100%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        url(${props => props.image});
      background-repeat: no-repeat;
      background-size: 120%;
      background-position: center center;

      strong {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1024px) {
    background: linear-gradient(
        rgba(0, 0, 0, 0.5) 100%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${props => props.image}) !important;
    background-repeat: no-repeat !important;
    background-size: 100% !important;
    background-position: center center !important;

    strong {
      opacity: 1 !important;
    }
  }

  @media (max-width: 565px) {
    margin: 20px 0;
  }

  @media (max-width: 385px) {
    height: 200px;
    background-size: cover !important;
  }
`;
