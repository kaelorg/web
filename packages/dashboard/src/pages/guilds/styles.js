import styled from 'styled-components';

export const Container = styled.section.attrs({ className: 'padding' })`
  margin-top: 30px;
  text-align: center;

  h1 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8rem;

  flex-wrap: wrap;
  justify-content: center;
`;

export const GuildContainer = styled.div`
  margin: 20px 30px;

  p {
    margin-top: 15px;
  }
`;

export const Icon = styled.div`
  position: relative;

  & > div {
    transition: border-color 300ms;
  }

  & > span {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    align-items: center;
    justify-content: center;
    opacity: 0;

    font-size: 4rem;
    font-weight: 600;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 300ms;
  }

  &:hover {
    & > div {
      border-color: #fff;
    }

    & > span {
      opacity: 1;
    }
  }
`;
