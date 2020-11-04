import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Header from '@app/components/Header';
import Layout from '@app/components/Layout';

const DefaultLayout = ({ children }) => (
  <Layout>
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  </Layout>
);

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  padding: 30px 0;
`;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
