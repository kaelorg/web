import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { actions } from '@app/store/modules/auth';
import { parseQueryString } from '@app/utils';

import { Container, Spinner } from './styles';

const AuthenticationPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const { token, type } = parseQueryString(location.search);

    if (!token || !type) window.location.replace('/');
    else dispatch(actions.signInRequest({ token, type }));
  }, [dispatch, location.search]);

  return (
    <Container>
      <h1>Estou logando você! Aguarde um pouco...</h1>

      <Spinner />
    </Container>
  );
};

export default AuthenticationPage;
