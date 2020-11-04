import { useField, FormContext } from '@unform/core';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import Dropzone from 'react-dropzone';

import { Container, DropContainer, UploadMessage } from './styles';

const UploadComponent = ({ name }) => {
  const [file, setFile] = useState();
  const [error, setError] = useState();

  // Form
  const { unregisterField } = useContext(FormContext);
  const { fieldName, registerField } = useField(name);

  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Selecionar imagem</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte a imagem aqui</UploadMessage>;
  }

  function handleUpload(uploadedFiles) {
    setError();

    const [uploadedFile] = uploadedFiles;

    if (uploadedFile.size * 0.000001 > 2) {
      return setError('O arquivo precisa ser menor que 2MB');
    }

    setFile(Object.assign(uploadedFile, { file: uploadedFile }));
  }

  useEffect(() => {
    registerField({
      ref: file,
      name: fieldName,
      getValue: value => value,
    });

    return () => unregisterField(fieldName);
  }, [file, fieldName, registerField, unregisterField]);

  return (
    <Dropzone
      multiple={false}
      onDropAccepted={handleUpload}
      accept={['image/jpg', 'image/png', 'image/jpeg']}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Container>
          {error && <p>{error}</p>}

          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>

          {file && (
            <a
              href={URL.createObjectURL(file)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </a>
          )}
        </Container>
      )}
    </Dropzone>
  );
};

UploadComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UploadComponent;
