import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';

import Form from '../Form';
import { SaveButton, LoadingContainer, ResetButton } from '../Save/styles';
import Switch from '../Switch';

import {
  Container,
  TextsContainer,
  ButtonsContainer,
  ModalContainer,
  ModalContent,
  GlobalStyle,
} from './styles';

const ConfigurationComponent = ({
  title,
  description,
  modal,
  isSwitch,
  modalTitle,
  initialData,
  switchChecked,
  handleSubmit,
  handleSwitch,
}) => {
  const modalRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [{ inFetch, reset, submit }, setFormRef] = useState({});

  useEffect(() => {
    function listener({ path }) {
      const { current: modalElement } = modalRef;

      if (!path.some(element => element === modalElement) && modalOpen) {
        setModalOpen(false);
      }
    }

    if (modal) window.addEventListener('click', listener, false);
    return () => window.removeEventListener('click', listener);
  }, [modal, modalOpen]);

  return (
    <Container>
      <TextsContainer>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </TextsContainer>

      <ButtonsContainer>
        {modal && (
          <button type="button" onClick={() => setModalOpen(!modalOpen)}>
            <MdAdd size="2rem" />
          </button>
        )}

        {isSwitch && (
          <Switch checked={switchChecked} handleChange={handleSwitch} />
        )}
      </ButtonsContainer>

      <ModalContainer open={modalOpen}>
        <ModalContent ref={modalRef}>
          <header>
            <h3>{modalTitle}</h3>

            <button
              type="button"
              onClick={() => {
                setModalOpen(false);
                reset();
              }}
            >
              <FiX size="2rem" />
            </button>
          </header>

          <section
            className="scroll"
            style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}
          >
            <Form
              saveComponent={false}
              getFormRef={setFormRef}
              initialData={initialData}
              handleSubmit={handleSubmit}
            >
              {modal}
            </Form>
          </section>

          <footer>
            <SaveButton type="button" onClick={submit} loading={inFetch}>
              <span>Save</span>

              <LoadingContainer>
                <span />
                <span />
              </LoadingContainer>
            </SaveButton>

            <ResetButton type="button" onClick={reset}>
              Reset
            </ResetButton>
          </footer>
        </ModalContent>

        {modalOpen && <GlobalStyle />}
      </ModalContainer>
    </Container>
  );
};

ConfigurationComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  modal: PropTypes.node,
  isSwitch: PropTypes.bool,
  modalTitle: PropTypes.string,
  initialData: PropTypes.shape({}),
  switchChecked: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleSwitch: PropTypes.func,
};

ConfigurationComponent.defaultProps = {
  description: false,
  modal: null,
  isSwitch: true,
  modalTitle: '',
  initialData: {},
  switchChecked: false,
  handleSubmit: () => {},
  handleSwitch: () => {},
};

export default React.memo(ConfigurationComponent);
