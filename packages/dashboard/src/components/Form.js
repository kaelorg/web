import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ValidationError } from 'yup';

import Save from './Save';

const FormComponent = ({
  saveComponent,
  getFormRef,
  children,
  handleSubmit: defaultSubmit,
  ...rest
}) => {
  const formRef = useRef();
  const [inFetch, setInFetch] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const submit = () => !inFetch && formRef.current.submitForm();
  const setFetch = bool => setInFetch(bool);

  function reset() {
    if (!inFetch) {
      formRef.current.reset();
      formRef.current.setErrors({});
      formRef.current.setData(rest.initialData);
      setHasChanged(false);
    }
  }

  // wrap
  async function handleSubmit(data, params) {
    if (!inFetch) {
      try {
        setFetch(true);
        formRef.current.setErrors({});

        await defaultSubmit(data, {
          formRef,
          setFetch,
          setHasChanged,
          ...params,
        });
      } catch (error) {
        if (error instanceof ValidationError) {
          return formRef.current.setErrors(
            error.inner.reduce(
              (obj, field) =>
                Object.assign(obj, { [field.path]: field.message }),
              {},
            ),
          );
        }

        if (error.response) {
          const {
            field,
            message,
            errors,
            error: dataError,
          } = error.response.data;

          if (errors instanceof Array && errors.length) {
            return formRef.current.setErrors(
              errors.reduce(
                (obj, currentField) =>
                  Object.assign(obj, {
                    [currentField.field]: currentField.message,
                  }),
                {},
              ),
            );
          }

          if (field && message) {
            return formRef.current.setErrors({ [field]: message });
          }

          const hasMesage =
            message || (dataError && dataError.message) || dataError;

          if (hasMesage) return toast.error(hasMesage);
        }

        toast.error('Ocorreu um erro, tente novamente');
      } finally {
        const error = document.querySelector('span.error');

        if (error) {
          error.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }

        setFetch(false);
      }
    }
  }

  useEffect(() => {
    getFormRef({ formRef, inFetch, reset, submit });
  }, [inFetch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={() => !hasChanged && setHasChanged(true)}
      {...rest}
    >
      {children}

      {saveComponent && (
        <Save
          open={hasChanged}
          inFetch={inFetch}
          submit={submit}
          reset={reset}
        />
      )}
    </Form>
  );
};

FormComponent.propTypes = {
  saveComponent: PropTypes.bool,
  getFormRef: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

FormComponent.defaultProps = {
  saveComponent: true,
  getFormRef: () => {},
};

export default React.memo(FormComponent);
