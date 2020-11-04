import React from 'react';

import { GlobalStyles, Container, Spinner } from './styles';

const LoaderComponent = () => (
  <Container>
    <Spinner />
    <GlobalStyles />
  </Container>
);

export default LoaderComponent;
