import styled from 'styled-components';

import FormComponent from '@app/components/Form';

export const WaveContainer = styled.div`
  width: 100%;

  svg {
    display: block;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
  }

  strong {
    font-size: 2rem;
    text-align: left;
  }
`;

export const Hero = styled.div.attrs({ className: 'padding' })`
  display: flex;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;

  align-items: center;

  h2 {
    width: 100%;
    flex-grow: 1;
    margin: 0 5px;
    text-align: center;
    color: #fff;
  }

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

export const Form = styled(FormComponent).attrs({ className: 'padding' })`
  display: flex;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  flex-direction: column;
  background-color: #36393f;

  h4 {
    font-size: 2.2rem;
    color: #1e91d6;
  }

  & > button {
    margin-top: 20px;
    padding: 15px 20px;
  }
`;

export const FormSection = styled.section`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(30, 145, 214, 0.3);

  & + section {
    margin-top: 35px;
  }
`;

export const UploadContainer = styled.section`
  display: flex;
  margin-top: 10px;

  h5 {
    font-size: 2rem;
    color: ${props => props.theme.default};
  }

  img {
    width: 100%;
    height: auto;
    max-width: 200px;
    border: 2px solid ${props => props.theme.dark_solid};
  }

  & > div {
    width: 100%;

    & + div {
      margin-left: 10px;
    }

    & > section {
      margin-top: 8px;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    & > div + div {
      margin: 0;
      margin-top: 10px;
    }
  }
`;
