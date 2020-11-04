import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Reset = styled.button.attrs({ type: 'button' })`
  display: flex;
  width: 70px;
  height: 50px;
  margin: 10px;
  margin-left: 0;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
  background-color: #99aab5;
`;

export const ColorsContainer = styled.section`
  display: flex;
  margin: 10px;
  margin-left: 0;
  flex-direction: column;

  & > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Color = styled.button.attrs({ type: 'button' })`
  display: flex;
  width: 20px;
  height: 20px;
  margin: 5px;

  align-items: center;
  justify-content: center;

  border-radius: 2px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: ${props => props.color};

  svg {
    stroke-width: 3;

    * {
      color: #fff;
    }
  }
`;

// Picker

export const PickerContainer = styled.div`
  position: relative;

  & > button {
    position: relative;
    display: flex;
    width: 70px;
    height: 50px;
    margin: 10px;
    margin-left: 0;

    align-items: center;
    justify-content: center;

    border-radius: 6px;
    background-color: ${props => props.background};
    border: 1px solid
      ${props =>
        props.background !== 'transparent'
          ? 'transparent'
          : 'rgba(255, 255, 255, 0.3)'};

    & > svg {
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
`;

export const PickerContent = styled.section`
  position: absolute;
  left: 0;
  top: 100%;
  padding: 10px;
  display: ${props => (props.open ? 'block' : 'none')};

  border: 1px solid #202225;
  background-color: #36393f;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  & > div {
    background: transparent !important;
    box-shadow: none !important;

    & > div:nth-child(1) {
      margin-bottom: 10px;
    }

    & > div:nth-child(2) {
      padding: 0 !important;
    }

    & > div:nth-child(2) > div:first-child > div:first-child {
      display: none;
    }

    &
      > div:nth-child(2)
      > div:first-child
      > div:nth-child(2)
      > div:first-child
      > div
      > div
      > div {
      top: 50%;
      transform: translateY(-50%);

      & > div {
        width: 9px !important;
        height: 16px !important;
        border-radius: 3px !important;
        box-shadow: rgba(0, 0, 0, 0.55) 0 0 2px 0 !important;
      }
    }

    & > div:nth-child(2) > div:nth-child(2) {
      & > div:nth-child(2) {
        display: none !important;
      }

      & > div:nth-child(1) {
        width: 100%;

        & > div > div {
          span {
            display: none !important;
          }

          input {
            padding: 10px;
            border-radius: 4px;
            font-family: Roboto, sans-serif;

            font-size: 1.6rem !important;
            font-weight: 400 !important;

            height: 40px !important;
            text-align: left !important;

            color: #dcddde !important;
            box-shadow: none !important;
            background-color: rgba(0, 0, 0, 0.1) !important;
            border: 1px solid rgba(0, 0, 0, 0.3) !important;
          }
        }
      }
    }
  }

  @media (max-width: 420px) {
    left: calc(100% - 200px);
  }

  @media (max-width: 260px) {
    left: calc(100% - 100px);

    & > div {
      width: 100px !important;
    }
  }
`;
