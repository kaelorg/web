import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ColorPicker from '@app/components/ColorPicker';
import { SaveButton, LoadingContainer } from '@app/components/Save/styles';
import TextArea from '@app/components/TextArea';
import Upload from '@app/components/Upload';
import Layout from '@app/layouts/Logged';

import { handleSubmit } from './handlers';

import {
  WaveContainer,
  Container,
  Hero,
  Form,
  FormSection,
  UploadContainer,
} from './styles';

const GeneralPage = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
  const [{ inFetch, submit }, setFormRef] = useState({});

  const helpers = (profile.helpers ? profile.helpers.social : {}) || {};

  return (
    <Layout>
      <Container>
        <Hero>
          <hr />
          <h2>CONFIGURAÇÕES DE PERFIL</h2>
          <hr />
        </Hero>

        <WaveContainer>
          <svg
            className="wave-1hkxOo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#36393f"
              d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            />
          </svg>
        </WaveContainer>

        <Form
          saveComponent={false}
          initialData={helpers}
          getFormRef={setFormRef}
          handleSubmit={(...params) => handleSubmit(dispatch, ...params)}
        >
          <FormSection>
            <h4>Biografia do perfil</h4>
            <p>
              O texto que você inserir será usado em sua biografia do seu perfil
              social.
            </p>

            <div style={{ marginTop: '10px', maxWidth: '800px' }}>
              <TextArea name="bio" />
            </div>
          </FormSection>

          <FormSection>
            <h4>Cor da descrição do perfil</h4>
            <p>
              Esta cor será usada na descrição personalizada do seu perfil
              social.
            </p>

            <ColorPicker name="favColor" />
          </FormSection>

          <FormSection>
            <h4>Plano de fundo</h4>
            <p>
              Escolha um belo plano de fundo para ser usado em seu perfil
              social.
            </p>

            <UploadContainer>
              <div>
                <h5>Atual</h5>

                <section>
                  <img
                    alt="background"
                    src={
                      helpers.background || 'https://i.imgur.com/XVNmOUb.png'
                    }
                  />
                </section>
              </div>

              <div>
                <h5>Atualizar plano de fundo</h5>
                <span style={{ fontSize: '1.2rem' }}>
                  Tamanho recomendado{' '}
                  <strong style={{ fontSize: '1.3rem', color: '#24e056' }}>
                    (635x270)
                  </strong>
                </span>

                <Upload name="background" />
              </div>
            </UploadContainer>
          </FormSection>

          <SaveButton type="button" onClick={submit} loading={inFetch}>
            <span>Salvar</span>

            <LoadingContainer>
              <span />
              <span />
            </LoadingContainer>
          </SaveButton>
        </Form>

        <WaveContainer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#36393f"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </WaveContainer>
      </Container>
    </Layout>
  );
};

export default GeneralPage;
