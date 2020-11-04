import { rgba } from 'polished';
import styled from 'styled-components';

import FormComponent from '@app/components/Form';

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

export const Form = styled(FormComponent)`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const PrefixContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    margin: 10px 0;
  }
`;
