import styled from 'styled-components';

export const Container = styled.header.attrs({ className: 'padding' })`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;

  align-items: center;
  background-color: ${props => props.theme.dark_solid};
`;

export const TextContainer = styled.div`
  margin-left: 20px;

  span {
    font-size: 2.3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.7rem;
  }
`;
